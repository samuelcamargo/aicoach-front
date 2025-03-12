import styled from 'styled-components';

export const SloganContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
  text-align: center;
  position: relative;
  z-index: 1;
`;

export const MainText = styled.h1`
  font-size: 4rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: #ffffff;
  text-shadow: 0 0 15px rgba(255, 255, 255, 0.5);
  
  @media (max-width: 768px) {
    font-size: 3rem;
  }
  
  @media (max-width: 480px) {
    font-size: 2.5rem;
  }
`;

export const SubText = styled.h2`
  font-size: 2rem;
  font-weight: 400;
  opacity: 0.9;
  color: #ffffff;
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
  
  @media (max-width: 768px) {
    font-size: 1.7rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1.4rem;
  }
`; 