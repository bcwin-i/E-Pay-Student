import React, { useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";

import {
  AccessaccountContainer,
  AccessButton,
  AccessButtonsWrap,
  AccessCloseBtn,
  AccessErrorMessage,
  AccessForgotPassword,
  AccessFormWrapper,
  AccessGoogleButton,
  AccessGoogleWraper,
  AccessHeader,
  AccessHeaderWrapper,
  AccessInputEmail,
  AccessInputPassword,
  AccessTextLabelTitle,
  AccessTitle,
  AccessTypeImage,
} from "./AccountAccessFormStyles";

import { colors } from "../../utils/colors";

const type = [
  {
    title: "Sign in",
    header: "Here, your customers will be happier.",
    button: "Sign in",
    action: "login",
  },
  {
    title: "Sign up",
    header: "This choice will be well received by your clients.",
    button: "Sign up",
    action: "register",
  },
  //   {
  //     title: "Suscribe",
  //     header: "This choice will be well received by your clients.",
  //     button: "Suscribe",
  //     action: "suscribe",
  //   },
];

export const AccountAccessForm = ({ screen, isOpen, closeAccess }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSignin = () => {
    setLoading(true);
    try {
      console.log("On");
    } catch (e) {
      console.error("Login failed: ", e);
      setLoading(false);
    }
  };

  return (
    <AccessaccountContainer isOpen={isOpen}>
      <AccessFormWrapper>
        <AccessHeaderWrapper>
          <AccessTitle>{type[screen].title}</AccessTitle>
          <AccessCloseBtn onClick={closeAccess} />
        </AccessHeaderWrapper>
        <AccessHeader>{type[screen].header}</AccessHeader>
        <AccessTextLabelTitle>Email</AccessTextLabelTitle>
        <AccessInputEmail
          type="email"
          onChange={(text) => setEmail(text.target.value)}
        />
        {screen === 0 ? (
          <>
            <AccessTextLabelTitle>Password</AccessTextLabelTitle>
            <AccessInputPassword
              type="password"
              onChange={(text) => setPassword(text.target.value)}
            />
          </>
        ) : (
          <>
            <AccessTextLabelTitle>Password</AccessTextLabelTitle>
            <AccessInputPassword
              type="password"
              onChange={(text) => setPassword(text.target.value)}
            />
            <AccessTextLabelTitle style={{marginTop: 19}}>Confirm Password</AccessTextLabelTitle>
            <AccessInputPassword
              type="password"
              onChange={(text) => setPassword2(text.target.value)}
              style={{marginBottom: 20}}
            />
          </>
        )}
        {error !== "" ? <AccessErrorMessage>{error}</AccessErrorMessage> : null}
        {screen !== 1 ? (
          <AccessForgotPassword>Forgot Password?</AccessForgotPassword>
        ) : null}
        <AccessButtonsWrap>
          {loading ? (
            <ClipLoader loading={true} size={35} color={colors.primary} />
          ) : (
            <AccessButton onClick={() => handleSignin()}>
              {type[screen].button}
            </AccessButton>
          )}
           <AccessGoogleButton /> 
        </AccessButtonsWrap>
          <AccessGoogleWraper>
            Or you can {type[screen].action} with your account.
          </AccessGoogleWraper>
      </AccessFormWrapper>
    </AccessaccountContainer>
  );
};
