import styled from "styled-components";
import { RiCloseCircleFill } from "react-icons/ri";
import { FcGoogle } from "react-icons/fc";

import { colors } from "../../utils/colors";

export const AccessaccountContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
position: fixed;
z-index: 5;
width: 100%;
height: 100%;
top: 0;
left: 0;
padding: 5%;
background: rgba(0, 0, 0, 0.9);
transition: all 1s ease-in-out;
opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
`;
export const AccessAccountWrapper = styled.div`
background-color: white;
border-radius: 5px;
display: flex;
flex-wrap: wrap;
transition: all 0.2s ease-in-out;
`;

export const AccessFormWrapper = styled.div`
display: flex;
flex-direction: column;
padding: 3%;
background-color: white;
border-radius: 10px;
height: min-content;
max-height: 100vh;
max-width: 100vh;
overflow-y: scroll;
flex: 0.4;
&::-webkit-scrollbar {
  --webkit-appearance: none;
}
@media (max-width: 600px) {
  flex: 1;
}
`;

export const AccessHeaderWrapper = styled.div`
display: flex;
justify-content: space-between;
`;

export const AccessTitle = styled.h1`
color: ${colors.secondary};
font-size: 1.2rem;
color: ${colors.red};
margin-bottom: 20px;
cursor: pointer;
`;

export const AccessCloseBtn = styled(RiCloseCircleFill)`
font-size: 28px;
color: ${colors.red};
cursor: pointer;
`;

export const AccessHeader = styled.h3`
color: ${colors.primary};
font-weight: 500;
margin-bottom: 30px;
font-size: 28px;
`;
export const AccessTextLabelTitle = styled.h5`
color: black;
font-size: 15px;
margin-bottom: 10px;
`;

export const AccessInputEmail = styled.input`
border: none;
border-bottom: 2px solid ${colors.primary};
font-size: 24px;
color: black;
font-weight: 500;
margin-bottom: 30px;
&:active {
  border: none;
  border-bottom: 2px solid ${colors.red};
}
&:focus {
  outline: none;
  border-bottom: 2px solid ${colors.red};
}
`;

export const AccessInputPassword = styled.input`
border: none;
border-bottom: 2px solid ${colors.primary};
font-size: 24px;
color: black;
font-weight: 500;
margin-bottom: 15px;
&:active {
  border: none;
  border-bottom: 2px solid ${colors.red};
}
&:focus {
  outline: none;
  border-bottom: 2px solid ${colors.red};
}
`;

export const AccessErrorMessage = styled.p`
font-size: 12px;
align-self: flex-start;
margin-bottom: 10px;
color: ${colors.red};
`;

export const AccessForgotPassword = styled.a`
font-size: 15px;
align-self: flex-end;
margin-bottom: 30px;
`;

export const AccessButton = styled.button`
color: white;
font-weight: 600;
background-color: ${colors.primary};
display: flex;
justify-content: center;
align-self: flex-start;
align-items: center;
padding: 12px 20px;
border: 0;
border-radius: 1.5rem;
font-size: 0.9rem;
cursor: pointer;
text-decoration: none;
transition: all 1s ease-in-out;
&:hover {
  background-color: ${colors.primary};
}
`;

export const AccessButtonsWrap = styled.div`
display: flex;
flex-wrap: wrap;
justify-items: center;
align-content: center;
align-items: center;
`;

export const AccessGoogleWraper = styled.div`
display: flex;
margin-top: 15px;
font-size: 15px;
align-items: center;
justify-items: center;
align-content: center;
`;

export const AccessGoogleButton = styled(FcGoogle)`
font-size: 32px;
cursor: pointer;
margin: 0 10px;
padding: 2px;
background-color: white;
border-radius: 50%;
transition: all 1s ease-in-out;
&:hover {
  background-color: #492849;
  color: white;
}
`;
