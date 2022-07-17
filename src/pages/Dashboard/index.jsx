import React, { useEffect, useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { MdSpaceDashboard, MdPayments, MdOutlineHistory } from "react-icons/md";
import { IoMdLogOut } from "react-icons/io";
import { useParams } from "react-router-dom";
import { child, get, getDatabase, ref } from "firebase/database";
import { BsArrowRightSquareFill, BsArrowLeftSquareFill } from "react-icons/bs";

import { SidebarButtons } from "../../components";

import { colors } from "../../utils/colors";
import { useAuthState } from "../../firebase";
import Payment from "../../components/Homepage/SubPages/Payment";
import History from "../../components/Homepage/SubPages/History";
import Review from "../../components/Homepage/SubPages/Review";

const Dashboard = () => {
  const [sideNav, setSideNave] = useState(true);
  const { isAuthenticated } = useAuthState();
  const [name, setName] = useState(isAuthenticated?.email);
  const [page, setPage] = useState(null);

  let r = useParams();

  useEffect(() => {
    const dbRef = ref(getDatabase());
    get(child(dbRef, `users/${isAuthenticated?.uid}`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          // setName(snapshot.)
          const { LastName, FirstName } = snapshot.val();
          setName(LastName + " " + FirstName);
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        //console.error(error);
      });
  }, []);

  useEffect(() => setPage(r?.dashboard.replace(":", "")), [r]);

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
          flex: sideNav ? 0.15 : 0,
          backgroundColor: colors.primary,
          alignContent: "center",
          padding: sideNav ? 25 : 0,
          transition: "all 0.5s ease-in-out",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            position: "relative",
            opacity: sideNav ? 1 : 0,
            transition: "all 0.3s ease-in-out",
          }}
        >
          <img
            src={require("../../assets/logo.png")}
            style={{ height: 70, width: 70 }}
            alt="healAssis logo"
          />
          <BsArrowLeftSquareFill
            size={20}
            color="white"
            style={{ position: "absolute", right: 0, top: 0 }}
            cursor="pointer"
            onClick={() => setSideNave(false)}
          />
        </div>
        <div
          style={{
            marginTop: 50,
            opacity: sideNav ? 1 : 0,
            transition: "all 0.3s ease-in-out",
          }}
        >
          {isAuthenticated?.email === "iziqbek@gmail.com" ? (
            <>
              <h4 style={{ color: "white" }}>School Admin</h4>
              <SidebarButtons title="Logout">
                <IoMdLogOut size={16} style={{ marginRight: 10 }} />
              </SidebarButtons>
            </>
          ) : (
            <>
              <SidebarButtons
                title="Dashboard"
                active={r?.dashboard === ":dashboard"}
              >
                <MdSpaceDashboard size={16} style={{ marginRight: 10 }} />
              </SidebarButtons>
              <SidebarButtons
                title="Payment"
                active={r?.dashboard === ":payment"}
              >
                <MdPayments size={16} style={{ marginRight: 10 }} />
              </SidebarButtons>
              <SidebarButtons
                title="History"
                active={r?.dashboard === ":history"}
              >
                <MdOutlineHistory size={16} style={{ marginRight: 10 }} />
              </SidebarButtons>
              <SidebarButtons title="Logout">
                <IoMdLogOut size={16} style={{ marginRight: 10 }} />
              </SidebarButtons>
            </>
          )}
        </div>
      </div>
      <div
        style={{
          flex: sideNav ? 0.85 : 1,
          maxHeight: "100%",
          overflow: "scroll",
          scrollbarWidth: 0,
          flexDirection: "column",
          transition: "all 0.5s ease-in-out",
        }}
      >
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
          <h2
            style={{
              color: "grey",
              fontFamily: "monospace",
              textTransform: "capitalize",
            }}
          >
            {sideNav ? null : (
              <BsArrowRightSquareFill
                size={20}
                color={colors.primary}
                style={{ marginRight: 10 }}
                cursor="pointer"
                onClick={() => setSideNave(true)}
              />
            )}
            {page}
          </h2>
          <div
            style={{
              flexDirection: "row",
              display: "flex",
              alignItems: "center",
            }}
          >
            <h4 style={{ marginRight: 10, color: colors.primary }}>{name}</h4>
            <FaUserCircle size={30} color={colors.secondary} />
          </div>
        </header>
        <section style={{ flex: 1, padding: 20, flexDirection: "column" }}>
          {isAuthenticated?.email === "iziqbek@gmail.com" ? (
            <History />
          ) : r?.dashboard === ":dashboard" ? (
            <Review />
          ) : r?.dashboard === ":payment" ? (
            <Payment />
          ) : (
            <History />
          )}
        </section>
      </div>
    </div>
  );
};

export default Dashboard;
