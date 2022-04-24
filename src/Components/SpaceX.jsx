import "./SpaceX.css";
import React, { useState, useEffect } from "react";

import Mission from "./Mission";
import { Link } from "react-router-dom";
let spaceData = [];

const years = [
  2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018,
  2019, 2020,
];

const SpaceX = () => {
  
  const [api, setApi] = useState(
    "https://api.spacexdata.com/v3/launches?limit=100"
  );
  const [mission, setMission] = useState(spaceData);

  const btnHandler = (e) => {
    let year = e.target.value;
    if (api.includes("&launch_year")) {
      setApi(`${api.split("&launch_year")[0]}&launch_year=${year}`);
      
    } else {
      setApi(`${api}&launch_year=${year}`);
    }
  };
  console.log(api)

  const launchBtnHandler = (e) => {
    let launch = e.target.value;

    if (api.includes("launch_success=true")) {
      setApi(api.replace(`launch_success=true`, `launch_success=${launch}`));
    }
    if (api.includes("launch_success=false")) {
      setApi(api.replace(`launch_success=false`, `launch_success=${launch}`));
    }
    if (!api.includes("launch_success")) {
      setApi(`${api}&launch_success=${launch}`);
    }
  };

  const landBtnHandler = (e) => {
    let land = e.target.value;
    if (api.includes("land_success=true")) {
      setApi(api.replace(`land_success=true`, `land_success=${land}`));
    }
    if (api.includes("land_success=false")) {
      setApi(api.replace(`land_success=false`, `land_success=${land}`));
    }
    if (!api.includes("land_success")) {
      setApi(`${api}&land_success=${land}`);
    }
  };
  function fetchData() {
    fetch(api)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setMission(data);
      });
  }

  useEffect(() => {
    fetchData();
  }, [api]);

  return (
    <div className="spaceX">
      <div className="left">
        <h1 className="bold">Filter</h1>
        <h1 className="filterHeader">Launch Year</h1>
        <div className="filterOption">
          {years.map((e) => (
            <button
              key={e}
              className="filterButton"
              value={e}
              onClick={btnHandler}
            >
              {e}
            </button>
          ))}
        </div>

        <h1 className="filterHeader">Successfull Launch</h1>
        <button
          className="filterButton"
          value={true}
          onClick={launchBtnHandler}
        >
          True
        </button>
        <button
          className="filterButton"
          value={false}
          onClick={launchBtnHandler}
        >
          False
        </button>
        <h1 className="filterHeader">Successfull Land</h1>
        <button className="filterButton" value={true} onClick={landBtnHandler}>
          True
        </button>
        <button className="filterButton" value={false} onClick={landBtnHandler}>
          False
        </button>
      </div>
      <div className="right">
        {mission.map((mission) => (
          <Mission
            key={mission.flight_number}
            img={mission.links.mission_patch}
            name={mission.mission_name}
            id={mission.mission_id}
            launch={mission.launch_year}
            success={mission.launch_success}
          />
        ))}
      </div>
    </div>
  );
};

export default SpaceX;
