import styled from "styled-components";

export const AboutContainer = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 3vh;
`;

export const CardContainer = styled.section`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;

  gap: 2vh;
`;

export const ContainerAboutProstata = styled.div`
  width: 100vh;
  padding: 1rem;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 15px;

  @media (max-width: 768px) {
    width: 65vh;
  }
`;

export const TitleAboutProstata = styled.h1`
  color: #1e90ff;
  margin-bottom: 1rem;
`;
