import React, { useMemo } from 'react';
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
}

const AgentsCarrousel: React.FC<AgentsCarrouselProps> = ({
  agents,
  imageWidth,
  imageHeight,
  rightImages,
  leftImages,
  gap,
  selectedIndex,
  componentWidth,
}) => {
  const imagesStyles = useMemo(() => {
    // Mutiplier to adjust the size and positions of the images
    const sizeMultiplier = 0.2;
    const opacityMultiplier = 0.05;
    const zIndexMultiplier = 0.5;
    const spaceBetweenImages = gap;
    if (agents.length === 0) return [];
    const imagesStyles = agents.map((agent, index) => {
      if (index === selectedIndex) {
        return {
          class: '',
          right: 0,
          opcacity: 1,
          scale: 1.3,
          width: imageWidth,
          height: imageHeight,
          zIndex: 8,
          id: agent.displayName,
        };
      }

      return {
        class: 'none',
        right: 0,
        scale: 1,
        width:
          imageWidth -
          Math.max(rightImages, leftImages) * sizeMultiplier * imageWidth,
        height:
          imageHeight -
          Math.max(rightImages, leftImages) * sizeMultiplier * imageHeight,
        opcacity: 0,
        zIndex: 1,
        id: agent.displayName,
      };
    });

    let midldle = 0;
    for (let i = rightImages * 2; i > 0; i--) {
      const index =
        selectedIndex - i < 0
          ? agents.length + (selectedIndex - i)
          : selectedIndex - i;
      const distance = i;

      const rightMultiplier = rightImages - i;
      const right = rightMultiplier * (spaceBetweenImages + imageWidth);
      if (i > rightImages) {
        imagesStyles[index].class = 'none';
        imagesStyles[index].right = right;

        imagesStyles[index].width = imageWidth;
        imagesStyles[index].height = imageHeight;
        imagesStyles[index].opcacity = 0;
        continue;
      }
      imagesStyles[index].width = imageWidth;
      imagesStyles[index].height = imageHeight;
      imagesStyles[index].class = '';

      imagesStyles[index].opcacity = 1 - distance * opacityMultiplier;
      imagesStyles[index].zIndex = Math.max(1 - distance * zIndexMultiplier, 1);
      imagesStyles[index].right = right;
      midldle = imagesStyles[index].right;
    }
    imagesStyles[selectedIndex].right =
      midldle + spaceBetweenImages + imageWidth;

    for (let i = 1; i <= leftImages * 2; i++) {
      const index = (selectedIndex + i) % agents.length;
      const distance = i;
      const leftMultiplier = leftImages + i;
      const right = leftMultiplier * (spaceBetweenImages + imageWidth);

      if (distance > leftImages) {
        imagesStyles[index].class = 'none';
        imagesStyles[index].right = right;
        imagesStyles[index].width = imageWidth;
        imagesStyles[index].height = imageHeight;
        imagesStyles[index].opcacity = 0;
        imagesStyles[index].zIndex = 1 - distance * zIndexMultiplier;
        continue;
      }
      imagesStyles[index].class = '';
      imagesStyles[index].width = imageWidth;
      imagesStyles[index].height = imageHeight;
      imagesStyles[index].opcacity = 1 - distance * opacityMultiplier;
      imagesStyles[index].zIndex = Math.max(1 - distance * zIndexMultiplier, 1);
      imagesStyles[index].right = right;
    }

    return imagesStyles;
  }, [
    agents,
    gap,
    imageHeight,
    imageWidth,
    leftImages,
    rightImages,
    selectedIndex,
  ]);

  return (
    <>
      {agents.length === imagesStyles.length && (
        <ListWrapper
          style={{
            width: `${componentWidth}px`,
            height: `${imageHeight}px`,
          }}
        >
          {agents.map((agent, index) => {
            return (
              <ImageWrapper
                imageWidth={imagesStyles[index].width}
                imageHeight={imagesStyles[index].height}
                zIndex={imagesStyles[index].zIndex}
                opacity={imagesStyles[index].opcacity}
                key={agent.uuid}
                onClick={(e) => {
                  e.stopPropagation();
                  if (imagesStyles[index].class === 'none') return;
                }}
                right={imagesStyles[index].right}
                className={imagesStyles[index].class}
                scale={imagesStyles[index].scale}
              >
                <img src={agent.fullPortrait} alt={agent.displayName} />
              </ImageWrapper>
            );
          })}
        </ListWrapper>
      )}
    </>
  );
};

export default AgentsCarrousel;
