import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { colors } from "../../utils/colors";

export const SidebarButtons = ({ children, ...props }) => {
  const [hover, setHover] = useState(false);
  const navigate = useNavigate();

  return (
    <button
      style={{
        border: "none",
        background: "none",
        color: "white",
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
      onClick={() => navigate(`homepage/${props.title}`, { replace: true })}
    >
      {children}
      {props.title}
    </button>
  );
};
