import React from "react";

function Error({ children }) {
  return (
    <div
      style={{
        width: "100%",
        padding: 10,
        marginBottom: 20,
        borderRadius: 4,
        backgroundColor: "orangered",
        textAlign: "center",
        color: "white",
        textTransform: "capitalize",
      }}
    >
      {children}
    </div>
  );
}

export default Error;
