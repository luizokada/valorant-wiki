import React, { useCallback, useEffect, useMemo } from 'react';
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
  imageHeight,
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

  const getCenterImageScrollPostion = useCallback(
    (index: number) => {
      if (currentImageRef.current && listParentRef.current) {
        const constainerWidth = listParentRef.current.clientWidth;
        const imageCenter = (imageWidth + gap) * index + imageWidth / 2;
        const scrollCenter = constainerWidth / 2;
        const scrollLeft = imageCenter - scrollCenter;
        return scrollLeft;
      }
    },
    [imageWidth, gap],
  );
  useEffect(() => {
    console.log('selectedIndex', selectedIndex);
    if (currentImageRef.current && listParentRef.current) {
      const scrollLeft = getCenterImageScrollPostion(selectedIndex);

      if (listParentRef.current) {
        listParentRef.current.scrollTo({
          left: scrollLeft,
          behavior: 'smooth',
        });
      }
    }
  }, [
    imageWidth,
    selectedIndex,
    setSelectedIndex,
    getCenterImageScrollPostion,
  ]);

  return (
    <>
      <ListWrapper
        ref={listParentRef}
        style={{
          minHeight: `${imageHeight * 1.3}px`,
        }}
        onScroll={(e) => {
          const currentScroll = e.currentTarget.scrollLeft;

          if (
            (selectedIndex >= agents.length * 2 ||
              selectedIndex < agents.length) &&
            currentScroll ===
              Math.floor(getCenterImageScrollPostion(selectedIndex) || 0)
          ) {
            if (listParentRef.current) {
              const newIndex =
                selectedIndex >= agents.length * 2
                  ? selectedIndex - agents.length
                  : selectedIndex + agents.length;
              const scrollLeft = getCenterImageScrollPostion(newIndex);

              if (listParentRef.current) {
                listParentRef.current.scrollTo({
                  left: scrollLeft,
                  behavior: 'instant',
                });
                setSelectedIndex(newIndex);
              }
            }
          }
          return;
        }}
      >
        {circularAgents.map((agent, index) => {
          return (
            <ImageWrapper
              key={index}
              ref={index === selectedIndex ? currentImageRef : null}
              style={{
                transform:
                  selectedIndex === index + agents.length ||
                  selectedIndex === index ||
                  selectedIndex === index + agents.length * 2
                    ? `scale(1.3)`
                    : 'scale(1)',
              }}
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
