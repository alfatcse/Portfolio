import { Container } from "@mui/material";
import React, { useContext } from "react";
import codings from "../../../assets/lottie/coding.json";
import { ThemeContext } from "../../../contexts/theme-context";
import { aboutData } from "../../../data/aboutData";
import AnimationLottie from "../../helper/animation-lottie";
import "./about.css";

function About() {
  const { theme } = useContext(ThemeContext);
  return (
    <div style={{ backgroundColor: theme.secondary }}>
      <Container className="about" id="about">
        <div className="line-styling">
          <div
            className="style-circle"
            style={{ backgroundColor: theme.primary }}
          ></div>
          <div
            className="style-circle"
            style={{ backgroundColor: theme.primary }}
          ></div>
          <div
            className="style-line"
            style={{ backgroundColor: theme.primary }}
          ></div>
        </div>
        <div className="about-body">
          <div className="about-description">
            <h2 style={{ color: theme.primary }}>{aboutData.title}</h2>
            <p style={{ color: theme.tertiary, textAlign: "center" }}>
              {aboutData.description1}
              <br />

              {aboutData.description2}
            </p>
            <p style={{ textAlign: "center" }}>
              {aboutData.description3.map((i, index) => (
                <React.Fragment key={index}>
                  <strong
                    style={{
                      color: index % 2 === 0 ? "DodgerBlue" : "OrangeRed",
                    }}
                  >
                    {i}
                  </strong>
                  {index !== aboutData.description3.length - 1 && ", "}
                </React.Fragment>
              ))}
            </p>
          </div>
          <div className="about-animation">
            <AnimationLottie animationPath={codings} />
          </div>
        </div>
      </Container>
    </div>
  );
}

export default About;
