import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import TrafficLight from "./trafficLight.jsx";
import { Buttons } from "./buttons";

//create your first component
const Home = () => {
  return (
    <div className="row">
      <div className="col d-flex justify-content-center mt-5">
        <TrafficLight />
      </div>
      {/* <div className="col-6 d-flex justify-content-center mt-5 flex-column">
        <Buttons />
      </div> */}
    </div>
  );
};

export default Home;
