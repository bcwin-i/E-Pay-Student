import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthState } from "../../firebase";
import { getAuth, signOut } from "firebase/auth";
import { colors } from "../../utils/colors";

export const SidebarButtons = ({ children, ...props }) => {
  const [hover, setHover] = useState(false);
  const navigate = useNavigate();
  const { setUser } = useAuthState();

  const handleSignout = () => {
    signOut(getAuth())
      .then((e) => {
        console.info("Logout: ", e);
        setUser();
      })
      .catch((e) => {
        console.error(e);
      });
  };

  return (
    <button
      style={{
        border: "none",
        background: "none",
        color: props.active ? colors.primary : "white",
        fontSize: 16,
        display: "flex",
        alignItems: "center",
        width: "100%",
        fontWeight: "400",
        backgroundColor: props.active
          ? colors.secondary
          : hover
          ? colors.secondary
          : "transparent",
        borderRadius: 5,
        transition: "all 0.5s ease-in-out",
        padding: 15,
        paddingLeft: 20,
        cursor: "pointer",
        marginBottom: 10,
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={() =>
        props.title === "Logout"
          ? handleSignout()
          : navigate(`/homepage/:${props.title.toLowerCase()}`, { replace: true })
      }
    >
      {children}
      {props.title}
    </button>
  );
};
