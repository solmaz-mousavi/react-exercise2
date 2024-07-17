import React, { useEffect, useState } from "react";
import axios from "axios";
import "./aboutUs.css";

export default function AboutUs() {
  const [skillsUI, setSkillsUI] = useState(null);
  const [skillsPE, setSkillsPE] = useState(null);

  const getData = async () => {
    await axios.get("/json/skills.json")
    .then((res) => {
      setSkillsUI(res.data.skillsUI);
      setSkillsPE(res.data.skillsPE);
    });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="aboutUsContainer">
      <div className="aboutUsLeft">
        <img
          src="./images/pic.jpg"
          className="aboutUsImg"
          alt="solmaz mousavi"
        />
        <h3 className="infoTitle">Solmaz Mousavi</h3>
        <p>UI, Power Electric Engineer</p>
        <p>Tehran, Iran</p>
      </div>

      <div className="aboutUsRight">
        <h3 className="infoTitle">Educational Info</h3>
        <p>
          Master of science in Power Electrical Enginner, Tehran Polytechnic
          University
        </p>

        <h3 className="infoTitle">Skills - UI</h3>
        <div className="skillContainer">
          {skillsUI
            ? skillsUI.map((skill) => (
                <div className="skillThumb" key={skill.id}>
                  <img
                    src={skill.image}
                    className="skillImg"
                    alt={skill.title}
                  />
                  <p>{skill.title}</p>
                </div>
              ))
            : "Loading..."}
        </div>

        <h3 className="infoTitle">Skills - Power Electric</h3>
        <div className="skillContainer">
          {skillsPE
            ? skillsPE.map((skill) => (
                <div className="skillThumb" key={skill.id}>
                  <img
                    src={skill.image}
                    className="skillImg"
                    alt={skill.title}
                  />
                  <p>{skill.title}</p>
                </div>
              ))
            : "Loading..."}
        </div>

        <h3 className="infoTitle">Contact Us</h3>
        <p>email: solmaz.mousavi@gmail.com</p>
        <p>tel: +989144005634</p>

        <div className="socialContainer">
          <img
            src="./images/social/github.png"
            className="socialImg"
            alt="github"
          />
          <img
            src="./images/social/linkedIn.png"
            className="socialImg"
            alt="linkedIn"
          />
          <img
            src="./images/social/facebook.png"
            className="socialImg"
            alt="facebook"
          />
        </div>
      </div>
    </div>
  );
}
