import styled from "styled-components";

export const Card = styled.div`
  position: relative;
  width: 350px;
  height: 250px;
  overflow: hidden;
  border-radius: 16px;
  cursor: pointer;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;

  ${Card}:hover & {
    transform: scale(1.1);
  }
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  color: white;
  font-size: 0.9rem;
  text-align: center;
`;

export const Title = styled.h3`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #fff;
  font-size: 1.7rem;
  text-align: center;
  z-index: 2;
  transition: opacity 0.5s ease;

  ${Card}:hover & {
    opacity: 0; 
  }
`;

export const HoverText = styled.p`
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.5s ease, transform 0.5s ease;

  ${Card}:hover & {
    opacity: 1;
    transform: translateY(0);
  }
`;