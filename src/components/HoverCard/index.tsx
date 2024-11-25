// HoverCard.tsx
import React from "react";
import {
  Card,
  Image,
  Overlay,
  Title,
  HoverText
} from "./styles"; 

interface HoverCardProps {
  imageSrc: string;
  titleCard: string;
  content: string;
}

const HoverCard: React.FC<HoverCardProps> = ({ imageSrc, titleCard, content }) => {
  return (
    <Card>
      <Image src={imageSrc} />
      <Overlay>
        <Title>{titleCard}</Title>
        <HoverText>{content}</HoverText>
      </Overlay>
    </Card>
  );
};

export default HoverCard;
