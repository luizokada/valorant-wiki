import React, { useEffect, useMemo } from 'react';
import { Agents } from '../../../api-types/agents';
import { ImageWrapper, ListWrapper } from './styles';

// import { Container } from './styles';

interface AgentsCarrouselProps {
  agents: Agents[];
  imageWidth: number;
  imageHeight: number;
  selectedIndex: number;
  rightImages: number;
  leftImages: number;
  gap: number;
  componentWidth: number;
  setSelectedIndex: React.Dispatch<React.SetStateAction<number>>;
}

const AgentsCarrousel: React.FC<AgentsCarrouselProps> = ({
  agents,
  gap,

  imageWidth,
  selectedIndex,

  setSelectedIndex,
}) => {
  const currentImageRef = React.useRef<HTMLDivElement>(null);
  const listParentRef = React.useRef<HTMLDivElement>(null);
  const circularAgents = useMemo(() => {
    if (!agents) return [];
    const circularAgents = [...agents];

    return [...circularAgents, ...circularAgents, ...circularAgents];
  }, [agents]);

  useEffect(() => {
    console.log('selectedIndex', gap);
    if (currentImageRef.current && listParentRef.current) {
      const constainerWidth = listParentRef.current.clientWidth;
      const imageCenter = (imageWidth + gap) * selectedIndex + imageWidth / 2;
      const scrollCenter = constainerWidth / 2;
      const scrollLeft = imageCenter - scrollCenter;

      if (listParentRef.current) {
        listParentRef.current.scrollTo({
          left: scrollLeft,
          behavior: 'smooth',
        });
        if (
          selectedIndex >= agents.length * 2 ||
          selectedIndex < agents.length
        ) {
          const overFlow =
            selectedIndex >= agents.length * 2
              ? selectedIndex - agents.length * 2 + 1
              : 2;
          const timerRef = setTimeout(() => {
            if (listParentRef.current) {
              const newIndex =
                selectedIndex >= agents.length * 2
                  ? selectedIndex - agents.length
                  : selectedIndex + agents.length;
              const constainerWidth = listParentRef.current.clientWidth;
              const imageCenter =
                (imageWidth + gap) * newIndex + imageWidth / 2;
              const scrollCenter = constainerWidth / 2;
              const scrollLeft = imageCenter - scrollCenter;

              if (listParentRef.current) {
                listParentRef.current.scrollTo({
                  left: scrollLeft,
                  behavior: 'instant',
                });
                setSelectedIndex(newIndex);
              }
            }
          }, Math.min(overFlow * 200, 3000));
          return () => clearTimeout(timerRef);
        }
      }
    }
  }, [imageWidth, selectedIndex, gap, agents.length, setSelectedIndex]);

  return (
    <>
      <ListWrapper ref={listParentRef}>
        {circularAgents.map((agent, index) => {
          return (
            <ImageWrapper
              key={index}
              ref={index === selectedIndex ? currentImageRef : null}
              onClick={(e) => {
                e.stopPropagation();
                setSelectedIndex(index);
              }}
            >
              <img src={agent.fullPortrait} alt={agent.displayName} />
            </ImageWrapper>
          );
        })}
      </ListWrapper>
    </>
  );
};

export default AgentsCarrousel;
