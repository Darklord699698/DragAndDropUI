import React from "react";

const Connection = ({ start, end }) => {
  const lineStyle = {
    stroke: "black",
    strokeWidth: 2,
  };

  const path = `M ${start[0]} ${start[1]} L ${end[0]} ${end[1]}`;

  return (
    <svg
      style={{ position: "absolute", top: 0, left: 0, pointerEvents: "none" }}
      width="100%"
      height="100%"
    >
      <path d={path} style={lineStyle} />
    </svg>
  );
};

export default Connection;
