import React from "react";
import "../Css/Overview.css";

export default function Overview() {
  return (
    <section className="overview">
      <img src="../../pluto logo.png" alt="Pluto Logo" className="pluto-logo" />
      <div className="overview-text">
        <h2>Building the Future of Flight – Drone Programming</h2>
        <p>
          The Drones have a microcontroller on-board, which helps implement various algorithms to stabilize and fly the drone.
          The firmware of the drone can be considered as code written to simplify a lot of processes when attempting to stabilize
          the drone. This entire programming is conducted via GitHub. For beginners, this can be very overwhelming as there are
          hundreds of files and dependencies to be compiled. This is where our software ecosystem helps. We have now created firmware
          APIs which can help you get access the drone firmware with great ease.
        </p>
      </div>
    </section>
  );
}