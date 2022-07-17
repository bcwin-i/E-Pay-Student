import React, { useEffect } from "react";
import AOS from "aos";

import {
  IntroContainer,
  IntroImageContainer,
  IntroImage,
  IntroTextContainer,
  IntroHeader,
  IntroDescription,
  IntroButton,
  RightArrow,
  IntroTitle,
} from "./IntroSectionStyles";

//Local imports
import welcome from "../../assets/welcome.svg";

export const IntroSection = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <IntroContainer id="about">
      <IntroImageContainer data-aos="fade-right">
        <IntroImage alt="healAssis. home svg" src={welcome} />
      </IntroImageContainer>
      <IntroTextContainer>
        <IntroTitle data-aos="fade-up">Easy and Secure Fee Payment</IntroTitle>
        <IntroHeader data-aos="fade-up">
          Welcome, to a new world of online payment.
        </IntroHeader>
        <IntroDescription data-aos="fade-up">
          With a secure and user-friendly UI, you can easily and quickly make
          online fee payments, produce online receipts, and keep track of your
          transactions with a single system.
        </IntroDescription>
        <IntroButton
          data-aos="fade-up"
          to="getStarted"
          smooth={true}
          duration={500}
        >
          Get Started
          <RightArrow />
        </IntroButton>
      </IntroTextContainer>
    </IntroContainer>
  );
};
