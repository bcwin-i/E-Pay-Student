import styled from "styled-components";


import { colors } from "../../utils/colors";

export const ServiceContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  min-height: 100vh;
  align-items: center;
  background-color: ${colors.accent};
`;

export const CardWrapper = styled.div`
  flex: 50%;
  padding: 3% 7%;
  @media (max-width: 600px) {
    flex: 100%;
  }
`;

export const CardViewContainer = styled.div`
  background-color: white;
  height: min-content;
  border-radius: 0.5rem;
  overflow: hidden;
  transition: all 0.5s ease-in-out;
  &:hover {
    transform: scale(1.03);
  }
`;

export const ServiceImage = styled.img.attrs((props) => ({
  src: props.src,
}))`
  height: 300px;
  width: 100%;
  object-fit: contain;
  overflow: hidden;
`;

export const ServiceTitle = styled.h1`
  color: white;
  font-size: 1.5rem;
`;

export const SeviceDescription = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5%;
  background-color: ${colors.primary};
  min-height: 210px;
`;

export const ServiceParagraph = styled.p`
  color: white;
  margin: 2% 0px;
`;

export const ServiceBottom = styled.button`
  color: ${colors.primary};
  font-weight: 500;
  background-color: white;
  align-self: flex-start;
  padding: 6px 11px;
  border: 0;
  border-radius: 0.5rem;
  font-size: 0.9rem;
  margin-top: 1.2rem;
  cursor: pointer;
  transition: all 1s ease-in-out;
  &:hover {
    background-color: ${colors.secondary};
    color: white;
  }
`;
