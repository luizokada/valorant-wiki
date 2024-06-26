import React, { useEffect, useMemo, useRef, useState } from 'react';
import { AgentsFromApi } from '../../api-types/agents';
import { useFetch } from '../../hooks/useFecth';
import { ValorantAPI } from '../../service';
import AgentsCarrousel from './AgentsCarrousel';
import { AgentIcon, AgentsIconsWrapper, Container } from './styles';
import AgentInfo from './AgentInfo';
import Footer from '../../common/Footer';

type CarrouselProps = {
  imageWidth: number;
  imageHeight: number;
  selectedIndex: number;
  rightImages: number;
  leftImages: number;
  gap: number;
  componentWidth: number;
};
// import { Container } from './styles';
const WIDTHCARD = 350;
const GAP = 20;
const HEIGHTCARD = 400;
const RIGHTIMAGES = 3;
const LEFTIMAGES = 3;
const carouselWIDTH = (RIGHTIMAGES + LEFTIMAGES + 1) * WIDTHCARD;

const AgentsPage: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [corouselProps, setCorouselProps] = useState<CarrouselProps>({
    imageWidth: WIDTHCARD,
    imageHeight: HEIGHTCARD,
    selectedIndex: selectedIndex,
    rightImages: RIGHTIMAGES,
    leftImages: LEFTIMAGES,
    gap: GAP,
    componentWidth: carouselWIDTH,
  });

  const [shouldRenderCarousel, setShouldRenderCarousel] =
    useState<boolean>(true);
  const containerRef = useRef<HTMLDivElement>(null);

  const { data: agentsData } = useFetch<AgentsFromApi>({
    url: '/agents',
    fetchName: 'getAgents',
    axiosClient: ValorantAPI,
    params: {
      isPlayableCharacter: true,
    },
  });

  const agents = useMemo(() => {
    if (agentsData) {
      setSelectedIndex(agentsData.data.length);
      return agentsData.data.sort((a, b) =>
        a.displayName.localeCompare(b.displayName),
      );
    }
    return [];
  }, [agentsData]);

  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        const containerWidth = containerRef.current.offsetWidth;
        const numCards = Math.floor(containerWidth / (WIDTHCARD + GAP));
        const rightImages = Math.floor(numCards / 2);
        const leftImages = Math.floor(numCards / 2);
        const toCenterWidth = containerWidth - numCards * (WIDTHCARD + GAP);
        setShouldRenderCarousel(containerWidth > 1000);

        setCorouselProps((prev) => ({
          ...prev,
          rightImages,
          leftImages,
          componentWidth: containerWidth - toCenterWidth,
        }));
      }
    };

    const observer = new ResizeObserver(handleResize);

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    handleResize();
    return () => {
      observer.disconnect();
    };
  }, [containerRef]);

  /*  useEffect(() => {
    const timeRef = setTimeout(() => {
      setSelectedIndex((prev) => {
        const newIndex = prev + 1;

        if (newIndex >= agents.length * 3) {
          return agents.length;
        }

        return newIndex;
      });
    }, 3000);
    return () => {
      clearTimeout(timeRef);
    };
  }, [agents.length, selectedIndex]);*/
  return (
    <Container ref={containerRef}>
      {shouldRenderCarousel && (
        <AgentsCarrousel
          setSelectedIndex={setSelectedIndex}
          {...corouselProps}
          agents={agents}
          selectedIndex={selectedIndex}
        />
      )}
      {agents.length > 0 && (
        <AgentsIconsWrapper
          style={{ width: `${corouselProps.componentWidth}px` }}
        >
          {agents.map((agent, index) => (
            <AgentIcon
              isSelected={
                selectedIndex === index + agents.length ||
                selectedIndex === index ||
                selectedIndex === index + agents.length * 2
              }
              key={agent.uuid}
            >
              <img
                src={agent.displayIcon}
                alt={agent.displayName}
                onClick={() => {
                  console.log(index + agents.length);
                  setSelectedIndex((prev) => {
                    const newIndex = index + agents.length;
                    const nextRight = index + agents.length * 2;
                    const prevLeft = index;
                    const distanceRight = Math.abs(newIndex - prev);
                    const distanceLeft = Math.abs(prevLeft - prev);
                    const distanceNextRight = Math.abs(nextRight - prev);
                    if (
                      distanceRight < distanceLeft &&
                      distanceRight < distanceNextRight
                    ) {
                      return newIndex;
                    } else if (
                      distanceLeft < distanceRight &&
                      distanceLeft < distanceNextRight &&
                      prevLeft >= agents.length / 2
                    ) {
                      return prevLeft;
                    } else if (
                      distanceNextRight < distanceRight &&
                      distanceNextRight < distanceLeft &&
                      nextRight <= agents.length * 2 + agents.length / 2
                    ) {
                      return nextRight;
                    } else {
                      return newIndex;
                    }
                  });
                }}
              />
              <div className="tag">
                <p>S</p>
              </div>
            </AgentIcon>
          ))}
        </AgentsIconsWrapper>
      )}
      <AgentInfo agent={agents[selectedIndex % agents.length]} />

      <Footer />
    </Container>
  );
};

export default AgentsPage;
