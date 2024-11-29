import styled from "styled-components";

export const HowToPreventContainer = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1vh 3.5vh;
  margin-top: 2rem;

  gap: 4vh;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const TitlePrevent = styled.h1`
  color: #1e90ff;
  margin-bottom: 1rem;
  font-size: 1.9rem;
`;

export const HowToPreventImage = styled.img`
  width: 56vh;
  border: 2px solid #ccc;
  border-radius: 8px;
  padding: 1rem;

  @media (max-width: 768px) {
    width: 45vh;
  }
`;

export const SectionSignals = styled.section`
  width: 80vh;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  border-radius: 16px;

  .list-sintomas {
    margin-top: 1rem;
    margin-left: 2.5rem;

    li {
      font-size: 0.9rem;
      margin: 8px;
    }

    li::marker {
      color: gray;
    }
  }

  @media (max-width: 768px) {
    width: 45vh;
  }
`;
