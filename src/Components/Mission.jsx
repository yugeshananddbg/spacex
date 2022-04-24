import React from "react";
import "./Mission.css";

const Mission = (props) => {
  return (
    <div>
      <div className="Mission">
        <img src={props.img} alt="" />
        <h2 id="name">{props.name}</h2>
        <h2>Mission Ids:</h2>

        {props.id.map((e) => (
          <li key={e}>{e}</li>
        ))}

        <h2>
          Launch Year: <span id="s">{props.launch}</span>
        </h2>
        <h2>
          Successful Launch:{" "}
          <span id="s">{props.success ? " True " : " False "}</span>
        </h2>
        <h2>Sucessfull Landing :</h2>
      </div>
    </div>
  );
};

export default Mission;
