import React, { useState } from "react";
import { Buttons } from "./buttons";

const TrafficLight = () => {
  const [color, setColor] = useState("");

  return (
    <div className="trafficLight">
      <div
        onClick={() => setColor("red")}
        className={"light red" + (color === "red" ? " glow-red" : "")}
      ></div>
      <div
        onClick={() => setColor("yellow")}
        className={"light yellow" + (color === "yellow" ? " glow-yellow" : "")}
      ></div>
      <div
        onClick={() => setColor("green")}
        className={"light green" + (color === "green" ? " glow-green" : "")}
      ></div>
      {/* <div
        onClick={() => setColor("purple")}
        className={
          "light purple hide" + (color === "purple" ? " glow-purple" : "")
        }
      ></div> */}
    </div>
  );
};

export default TrafficLight;
