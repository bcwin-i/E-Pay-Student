import { getDatabase, onValue, ref } from "firebase/database";
import React, { useEffect, useRef, useState } from "react";
import { useAuthState } from "../../../firebase";
import { colors } from "../../../utils/colors";
import dateFormat, { masks } from "dateformat";
import { AccessButton } from "../../AccountAccessForm/AccountAccessFormStyles";
import { useReactToPrint } from "react-to-print";
import { PrintPage } from "../PrintPage";

const History = () => {
  const { isAuthenticated } = useAuthState();
  const refto = `payments/${isAuthenticated?.uid}/`;
  const [history, setHistory] = useState([]);
  let print = useRef();
  const handlePrint = useReactToPrint({
    content: () => print.current,
  });

  useEffect(() => {
    try {
      onValue(ref(getDatabase(), refto), (snapshot) => {
        setHistory([]);
        snapshot.forEach(function (childSnapshot) {
          let data = childSnapshot.val();
          console.log("Parent: ", childSnapshot.key);
          setHistory((g) => [...g, data]);
        });
      });
    } catch (e) {
      console.error(e);
    }
  }, []);

  return (
    <>
      {Object?.values(history).map((val) => (
        <div
          key={val.date}
          style={{
            borderBottom: "1px solid" + colors.accent,
            padding: 15,
            display: "flex",
            justifyContent: "space-between",
            marginTop: 20,
            fontWeight: 600,
          }}
        >
          <span style={{ display: "flex", flexDirection: "row" }}>
            {val.institution === "Coventry University (CU)" ? (
              <img
                src={require("../../../assets/cov.png")}
                style={{ width: 70, height: 70 }}
              />
            ) : (
              <img
                src={require("../../../assets/gt.jpg")}
                style={{ width: 70, height: 70 }}
              />
            )}
            <span
              style={{
                display: "flex",
                flexDirection: "column",
                marginLeft: 10,
              }}
            >
              <h5>{val.institution}</h5>
              <p>{val.option}</p>
              <AccessButton onClick={handlePrint}>
                {isAuthenticated.email === "iziqbek@gmail.com"
                  ? "Approve payment"
                  : "Print Receipt"}
              </AccessButton>
            </span>
          </span>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              flexDirection: "column",
            }}
          >
            <p>{dateFormat(val?.date, "dddd, mmmm dS, yyyy, h:MM:ss TT")}</p>
            <h3
              style={{
                color: colors.secondary,
                fontSize: 30,
                alignSelf: "flex-end",
              }}
            >
              GH₵ {val.amount}
              <p>{val?.approved}</p>
            </h3>
          </div>
          {/* <PrintPage style={{height: 0, width: 0, overflow: "hidden"}} val={val} ref={print} /> */}
        </div>
      ))}
    </>
  );
};

export default History;
