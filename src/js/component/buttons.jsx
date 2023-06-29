import React from "react";
import TrafficLight from "./trafficLight";

export const Buttons = () => {
  return (
    <div className="buttons d-flex gap-2">
      <button type="button" className="btn btn-primary btn-lg toggle-color">
        Toggle Color
      </button>
      <button type="button" className="btn btn-secondary btn-lg hide color">
        hide color
      </button>
    </div>
  );
};
