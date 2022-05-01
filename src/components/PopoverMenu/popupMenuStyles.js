import styled from "styled-components";
import { colors } from "../../utils/colors";
import { Link as LinkScroll } from "react-scroll";
import { FiUser } from "react-icons/fi";

export const Popupmenu = styled.ul`
  border: 1px solid ${colors.accent};
  border-radius: 0.6rem;
  min-width: 150px;
  margin-right: 1.6rem;
  background-color: white;
  overflow: hidden;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  padding: 0;
  z-index: 50;
`;

export const MenuList = styled(LinkScroll)`
  list-style: none;
  padding: 10px 12px;
  cursor: pointer;
  font-weight: 500;
  -webkit-transition: background-color 0.5s ease-in-out;
  -moz-transition: background-color 0.5s ease-in-out;
  -o-transition: background-color 0.5s ease-in-out;
  transition: background-color 0.5s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  &:hover {
    color: white;
    background-color: ${colors.secondary};
  }
`;
export const MenuBtn = styled.button`
  list-style: none;
  padding: 10px 12px;
  cursor: pointer;
  font-weight: 500;
  -webkit-transition: background-color 0.5s ease-in-out;
  -moz-transition: background-color 0.5s ease-in-out;
  -o-transition: background-color 0.5s ease-in-out;
  transition: background-color 0.5s ease-in-out;
  display: flex;
  background: none;
  border: none;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  &:hover {
    color: white;
    background-color: ${colors.secondary};
  }
`;

export const ListIconSignin = styled(FiUser)`
  margin-left: 10px;
  color: ${colors.primary};
  font-size: ${(props) => props.size}px;
`;