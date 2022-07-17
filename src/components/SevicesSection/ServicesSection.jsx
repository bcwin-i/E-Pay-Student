import React, { useEffect } from "react";
import AOS from "aos";

//Local imports
import {
  CardViewContainer,
  ServiceImage,
  ServiceTitle,
  ServiceBottom,
  ServiceParagraph,
  SeviceDescription,
  ServiceContainer,
  CardWrapper,
} from "./ServicesSectionStyles";

import login from "../../assets/login.svg";
import register from "../../assets/register.svg";

export const ServicesSection = ({ handleScreen }) => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <ServiceContainer id="getStarted">
      <CardWrapper>
        <CardViewContainer>
          <ServiceImage src={login} alt="signin" />
          <SeviceDescription>
            <ServiceTitle>Effectiveness</ServiceTitle>
            <ServiceParagraph>
              Already have an account? Log in to gain access to a variety of
              transactional payment features.
            </ServiceParagraph>
            <ServiceBottom onClick={() => handleScreen(0)}>
              Sign in
            </ServiceBottom>
          </SeviceDescription>
        </CardViewContainer>
      </CardWrapper>
      <CardWrapper>
        <CardViewContainer>
          <ServiceImage src={register} alt="signup" />
          <SeviceDescription>
            <ServiceTitle>Launch</ServiceTitle>
            <ServiceParagraph>
              {/* Create a secure account in a few easy steps and take control of
              your client and inventory management systems. Get going by
              creating an account. */}
              If you are new to the system, you can easily activate an account
              with your student email address gain access to a variety of
              features .
            </ServiceParagraph>
            <ServiceBottom onClick={() => handleScreen(1)}>
              Activate
            </ServiceBottom>
          </SeviceDescription>
        </CardViewContainer>
      </CardWrapper>
    </ServiceContainer>
  );
};
