import styled from "styled-components";
import { colors } from "../../utils/colors";

import { HiOutlineMenuAlt3 } from "react-icons/hi";

export const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-content: center;
  align-items: center;
  background-color: white;
  padding: 20px;
  z-index: 5;
  box-shadow: ${(props) => (props.shadow ? "0 2px 4px 0 rgba(0, 0, 0, 0.1)" : null)};
`;

export const TextLogo = styled.h1`
  color: white;
  font-size: 1.2rem;
  color: ${colors.primary};
  font-weight: 600;
  cursor: pointer;
  color: ${(props) => (props.color === 1 ? colors.primary : colors.secondary)};
  display: flex;
`;

export const NavigationButtonContainer = styled.button`
  height: fit-content;
  width: fit-content;
  border: none;
  background: none;
`;

export const NavigationButton = styled(HiOutlineMenuAlt3)`
  width: 2rem;
  height: 2rem;
  color: ${colors.secondary};
  cursor: pointer;
  -webkit-transition: color 1s ease-in-out;
  -moz-transition: color 1s ease-in-out;
  -o-transition: color 1s ease-in-out;
  transition: color 1s ease-in-out;
  &:hover {
    border-radius: 10px;
    color: ${colors.primary};
  }
`;