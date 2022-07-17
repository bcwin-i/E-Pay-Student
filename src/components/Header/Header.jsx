import React, { useState } from "react";
import { Popover } from "react-tiny-popover";
import { FaUserCircle } from "react-icons/fa";

import {
  HeaderContainer,
  TextLogo,
  NavigationButton,
  NavigationButtonContainer,
} from "./headerStyles";
import PopoverNavMenu from "../PopoverMenu/PopoverMenu";
import logo from "../../assets/logo.png";
import { colors } from "../../utils/colors";

export const Header = ({ page }) => {
  const [isNavPopoverOpen, setIsNavPopoverOpen] = useState(false);

  return (
    <HeaderContainer style={{borderBottom: page !== "welcome" ? `1px solid ${colors.accent}`: null}}>
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
      {page === "welcome" ? (
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
      ) : (
        <div
          style={{
            flexDirection: "row",
            display: "flex",
            alignItems: "center"
          }}
        >
          <h4 style={{marginRight: 10, color: colors.primary}}>BEKOE KOJO ISAAC</h4>
          <FaUserCircle size={30} color={colors.secondary}/>
        </div>
      )}
    </HeaderContainer>
  );
};
