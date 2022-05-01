import styled from "styled-components";
import { BiChevronRight } from "react-icons/bi";
import { Link as LinkScroll } from "react-scroll";

import { colors } from "../../utils/colors";

export const IntroContainer = styled.main`
  display: flex;
  flex-wrap: wrap;
  padding: 2rem;
  min-height: 100vh;
  padding-top: 80px;
`;

export const IntroImageContainer = styled.div`
  flex: 50%;
  height: fit-content;
  @media (max-width: 600px) {
    flex: 100%;
  }
`;

export const IntroImage = styled.img`
  width: 100%;
  height: 100%;
`;

export const IntroTextContainer = styled.div`
  flex: 50%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  align-content: flex-end;
  @media (max-width: 600px) {
    flex: 100%;
  }
`;

export const IntroTitle = styled.h1`
  text-align: end;
  font-family: Georgia, "Times New Roman", Times, serif;
  color: ${colors.secondary};
  margin-bottom: 2rem;
`;

export const IntroHeader = styled.h2`
  text-align: end;
  font-family: Georgia, "Times New Roman", Times, serif;
  color: ${colors.primary};
  margin-bottom: 2rem;
`;

export const IntroDescription = styled.p`
  text-align: end;
  color: grey;
  font-size: large;
  line-height: 30px;
`;

export const IntroButton = styled(LinkScroll)`
  color: white;
  font-weight: 600;
  background-color: ${colors.primary};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px 20px;
  border: 0;
  border-radius: 1.5rem;
  margin-top: 4rem;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 1s ease-in-out;
  &:hover {
    background-color: ${colors.secondary};
  }
`;

export const RightArrow = styled(BiChevronRight)`
  width: 1.2rem;
  height: 1.2rem;
  color: white;
  align-self: center;
`;