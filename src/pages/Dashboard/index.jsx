import React, { useEffect } from "react";
import { FaUserCircle } from "react-icons/fa";
import { MdSpaceDashboard, MdPayments, MdOutlineHistory } from "react-icons/md";
import {IoMdLogOut} from "react-icons/io"
import { useParams } from "react-router-dom";

import { SidebarButtons } from "../../components";

import { colors } from "../../utils/colors";

const Dashboard = () => {
  let { page } = useParams();
  useEffect(() => {
    console.log("Page: ", page);
  }, []);

  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        flexDirection: "row",
      }}
    >
      <div
        style={{
          flex: 0.15,
          height: "100%",
          backgroundColor: colors.primary,
          alignContent: "center",
          padding: 25,
        }}
      >
        <div style={{ display: "flex", justifyContent: "center" }}>
          <img
            src={require("../../assets/logo.png")}
            style={{ height: 70, width: 70 }}
            alt="healAssis logo"
          />
        </div>
        <div style={{ marginTop: 50 }}>
          <SidebarButtons title="Dashboard" active={(page === "Dashboard")}>
            <MdSpaceDashboard size={16} style={{ marginRight: 10 }} />
          </SidebarButtons>
          <SidebarButtons title="Payment" active={(page === "Payment")}>
            <MdPayments size={16} style={{ marginRight: 10 }} />
          </SidebarButtons>
          <SidebarButtons title="History" active={(page === "History")}>
            <MdOutlineHistory size={16} style={{ marginRight: 10 }} />
          </SidebarButtons>
          <SidebarButtons title="Logout" >
            <IoMdLogOut size={16} style={{ marginRight: 10 }} />
          </SidebarButtons>
        </div>
      </div>
      <div style={{ flex: 0.85 }}>
        <header
          style={{
            padding: 25,
            border: `1px solid ${colors.accent}`,
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h2 style={{ color: "grey", fontFamily: "monospace" }}>{page}</h2>
          <div
            style={{
              flexDirection: "row",
              display: "flex",
              alignItems: "center",
            }}
          >
            <h4 style={{ marginRight: 10, color: colors.primary }}>
              BEKOE KOJO ISAAC
            </h4>
            <FaUserCircle size={30} color={colors.secondary} />
          </div>
        </header>
      </div>
    </div>
  );
};

export default Dashboard;
