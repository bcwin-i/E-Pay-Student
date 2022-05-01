import styled from "styled-components";
import { Link as LinkRouter } from "react-router-dom";
import { colors } from "../../utils/colors";


export const FooterContainer = styled.footer`
  background-color: ${colors.primary};
`;

export const FooterWrap = styled.div`
  padding: 48px 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1100px;
  margin: 0 auto;
`;

export const FooterLinksContainer = styled.div`
  display: flex;
  justify-content: center;

  @media screen and (max-width: 820px) {
    padding-top: 32px;
  }
`;

export const FooterLinksWrapper = styled.div`
  display: flex;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

export const FooterLinkItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 16px;
  text-align: left;
  width: 160px;
  box-sizing: border-box;
  color: ${colors.secondary};

  @media screen and (max-width: 420px) {
    margin: 0;
    padding: 10px;
    width: 100%;
  }
`;

export const FooterLinkTitle = styled.h1`
  font-size: 1.1rem;
  margin-bottom: 24px;
  color: ${colors.secondary};
  text-transform: uppercase;
`;

export const FooterLink = styled(LinkRouter)`
  color: white;
  text-decoration: none;
  margin-bottom: 0.5rem;
  line-height: 1.5rem;
  font-size: 0.9rem;

  &:hover {
    color: ${colors.secondary};
    transition: 0.3 ease-out;
  }
`;

export const SocialMedia = styled.section`
  max-width: 1000px;
  width: 100%;
`;

export const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1100px;
  margin: 40px auto 0 auto;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

export const SocialLogo = styled(LinkRouter)`
  color: ${colors.secondary};
  justify-self: start;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.3rem;
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  font-weight: bold;
`;

export const WebsiteRights = styled.small`
  color: white;
  margin-bottom: 16px;
  font-size: 1rem;
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 240px;
`;

export const SocialIconLink = styled.a`
  color: white;
  font-size: 24px;
`;
