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
import {
  getAuth,
  signInWithEmailAndPassword,
} from "firebase/auth";

import { colors } from "../../utils/colors";
import { useNavigate } from "react-router-dom";
import { useAuthState } from "../../firebase";

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
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { isAuthenticated, setUser } = useAuthState();

  const handleSignin = () => {
    setLoading(true);
    try {
      const auth = getAuth();
      signInWithEmailAndPassword(auth, email, password)
        .then((e) => {
          console.log(e);
          setUser(e.user);
          // const db = getDatabase();
          // set(ref(db, "users/" + e.user.uid), {
          //   name: "Bekoe Kojo Isaac",
          //   admin: "admin",
          //   role: "HOD",
          //   email: e.user.email,
          //   url: ""
          // })
          //   .then((db) => {
          //     setUser(e.user);
          //     console.info("Database added: ", db)
          //     console.info("New detail is: ", isAuthenticated);
          //   })
          //   .catch((er) => {
          //     setError(er);
          //   });
        })
        .catch((e) => {
          console.error(e);
          setError("Wrong user credentials.");
          setLoading(false);
        });
      // createUserWithEmailAndPassword(auth, email, password).then((e) => {
      //   const user = res.user;
      //   const q = query(collection(db, "users"), where("uid", "==", user.uid));
      //   const docs = await getDocs(q);
      //   if (docs.docs.length === 0) {
      //     await addDoc(collection(db, "users"), {
      //       uid: user.uid,
      //       name: user.displayName,
      //       authProvider: "google",
      //       email: user.email,
      //     });
      //   }
      // });
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
