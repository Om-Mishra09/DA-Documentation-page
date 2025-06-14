import React from "react";
import "../Css/Docs.css"; 

function Docs() {
  return (
    <section className="docs">
      <div className="doc-item">
        <div className="text">
          <h3>Pluto IDE -</h3>
          <p>
            Cygnus is an Eclipse-based IDE from Drona Aviation tailored for Pluto Drones, supporting C/C++ programming for core drone application development
          </p>
        </div>
        <img src="/IDE Image.png" alt="Pluto IDE" />
      </div>

      <div className="doc-item reverse">
        <img src="/pluto-block.png" alt="Pluto Blocks" />
        <div className="text">
          <h3>Pluto Blocks -</h3>
          <p>
            PlutoBlocks is a user-friendly visual programming software tailored for Drona Aviation’s Pluto Drone, enabling beginners to program their drone through intuitive drag-and-drop blocks
          </p>
        </div>
      </div>

      <div className="doc-item">
        <div className="text">
          <h3>Pluto Controller -</h3>
          <p>
            This section explores the possibility of different softwares that can be used to control the drone remotely by giving higher order commands.
          </p>
        </div>
        <div className="placeholder" />
      </div>
    </section>
  );
}
export default Docs;