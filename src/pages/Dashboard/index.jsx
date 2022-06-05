import React, { useEffect } from "react";
import { FaUserCircle } from "react-icons/fa";
import { MdSpaceDashboard, MdPayments, MdOutlineHistory } from "react-icons/md";
import { IoMdLogOut } from "react-icons/io";
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
          <SidebarButtons title="Dashboard" active={page === "Dashboard"}>
            <MdSpaceDashboard size={16} style={{ marginRight: 10 }} />
          </SidebarButtons>
          <SidebarButtons title="Payment" active={page === "Payment"}>
            <MdPayments size={16} style={{ marginRight: 10 }} />
          </SidebarButtons>
          <SidebarButtons title="History" active={page === "History"}>
            <MdOutlineHistory size={16} style={{ marginRight: 10 }} />
          </SidebarButtons>
          <SidebarButtons title="Logout">
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
        <section style={{ flex: 1, padding: 20, flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <div
              style={{
                flex: 0.7,
                borderRadius: 10,
                backgroundColor: colors.secondary,
                padding: 15,
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignSelf: "center",
                }}
              >
                <text style={{ color: "white", fontSize: 40, fontWeight: 500 }}>
                  Your TUITION
                </text>
                <p style={{ color: "white", fontSize: 18, fontWeight: 400 }}>
                  payment in your own hand
                </p>
                <p
                  style={{ color: colors.accent, fontSize: 14, marginTop: 30 }}
                >
                  A handy tool for all things payments. With benefits such a
                  solution are multipurposeness, transparency and
                  accountability.
                </p>
              </div>
              <img
                style={{ height: 250, width: 250, alignSelf: "flex-end" }}
                src={require("../../assets/purse.png")}
                alt="purse"
              />
            </div>
            <div
              style={{
                flex: 0.28,
                borderRadius: 10,
                backgroundColor: colors.accent,
                padding: 15,
                display: "flex",
                flexDirection: "column",
              }}
            >
              <text
                style={{
                  color: colors.primary,
                  fontWeight: 400,
                  fontSize: 20,
                }}
              >
                Added cards
              </text>
              <span
                style={{
                  flexDirection: "row",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <img
                  src={require("../../assets/visa.png")}
                  style={{ height: 60, width: 60 }}
                  alt="visa"
                />
                <h4
                  style={{
                    fontSize: 18,
                    marginLeft: 20,
                    display: "flex",
                    alignSelf: "center",
                  }}
                >
                  •••• •••• •••• 4456
                </h4>
              </span>
              <span
                style={{
                  flexDirection: "row",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <img
                  src={require("../../assets/visa.png")}
                  style={{ height: 60, width: 60 }}
                  alt="visa"
                />
                <h4
                  style={{
                    fontSize: 18,
                    marginLeft: 20,
                    display: "flex",
                    alignSelf: "center",
                  }}
                >
                  •••• •••• •••• 3454
                </h4>
              </span>
            </div>
          </div>
            <div
              style={{
                borderRadius: 10,
                backgroundColor: colors.accent,
                padding: 15,
                display: "flex",
                justifyContent: "space-between",
                marginTop: 20,
                fontWeight: 600
              }}
            >Cash Balance <h3 style={{color: colors.secondary, fontSize: 30}}>GH₵ 5,653.33</h3></div>
        </section>
      </div>
    </div>
  );
};

export default Dashboard;
