import React, {forwardRef} from 'react'
import { colors } from '../../utils/colors'
import dateFormat, { masks } from "dateformat";

// export const PrintPage = forwardRef(({val}, ref) => {
  export const PrintPage = React.forwardRef(({val}, ref) => {
  return (
    <div key={val.date} style={{
        borderBottom: "1px solid"+ colors.accent,
        padding: 15,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        marginTop: 20,
        fontWeight: 600,
      }}>
        {val.institution === "Coventry University (CU)" ? (
          <img
            src={require("../../assets/cov.png")}
            style={{ width: 70, height: 70 }}
          />
        ) : (
          <img
            src={require("../../assets/gt.jpg")}
            style={{ width: 70, height: 70 }}
          />
        )}
        <span style={{display: "flex", flexDirection: "column", marginLeft: 10}}>
        <h5>Payment made by: {val.institution}</h5>
        <p>{val.option}</p>
        </span>
        <p>{dateFormat(val?.date, "dddd, mmmm dS, yyyy, h:MM:ss TT")}</p>
        <h3 style={{ color: colors.secondary, fontSize: 30, alignSelf: "flex-end" }}>GH₵ {val.amount}</h3>
      </div>
  )
});