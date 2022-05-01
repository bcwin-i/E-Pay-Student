import React, { useState } from "react";
import { Popover } from "react-tiny-popover";

import {
  HeaderContainer,
  TextLogo,
  NavigationButton,
  NavigationButtonContainer,
} from "./headerStyles";
import PopoverNavMenu from "../PopoverMenu/PopoverMenu";
import logo from "../../assets/logo.png";

export const Header = () => {
  const [isNavPopoverOpen, setIsNavPopoverOpen] = useState(false);

  return (
    <HeaderContainer>
      <TextLogo
        color={1}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img
          src={logo}
          style={{ height: 20, width: 20, marginRight: 10 }}
          alt="healAssis logo"
        />
        E-Payment
      </TextLogo>
      <Popover
        isOpen={isNavPopoverOpen}
        positions={["bottom"]} // preferred positions by priority
        reposition={true}
        onClickOutside={() => setIsNavPopoverOpen(false)}
        content={<PopoverNavMenu />}
        containerStyle={{ zIndex: 6 }}
      >
        <NavigationButtonContainer
          onClick={() => setIsNavPopoverOpen(!isNavPopoverOpen)}
        >
          <NavigationButton aria-label="navigation button" />
        </NavigationButtonContainer>
      </Popover>
    </HeaderContainer>
  );
};
