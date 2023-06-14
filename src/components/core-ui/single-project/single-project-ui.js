import React from "react";
import { FaCode, FaPlay } from "react-icons/fa";
import Fade from "react-reveal/Fade";
import placeholder from "../../../assets/png/placeholder.png";
import "./single-project.css";

function SingleProjectUI({
  id,
  name,
  desc,
  tags,
  code,
  demo,
  image,
  theme,
  classes,
}) {
  console.log(code);
  return (
    <Fade bottom>
      <div
        key={id}
        className="singleProject"
        style={{ backgroundColor: theme.quaternary }}
      >
        <div className="projectContent">
          <h2
            id={name.replace(" ", "-").toLowerCase()}
            style={{ color: theme.tertiary }}
          >
            {name}
          </h2>
          <img src={image ? image : placeholder} alt={name} />
          <div className="project--showcaseBtn">
            <div className="projectCode">
              <a
                href={code.frontEnd}
                target="_blank"
                rel="noreferrer"
                className="tooltip1"
                aria-labelledby={`${name.replace(" ", "-").toLowerCase()} ${name
                  .replace(" ", "-")
                  .toLowerCase()}-demo`}
              >
                <FaCode
                  id={`${name.replace(" ", "-").toLowerCase()}-demo`}
                  className={classes.icon}
                  aria-label="Demo"
                />
              </a>
              {code?.backEnd && (
                <a
                  href={code.backEnd}
                  target="_blank"
                  className="tooltip2"
                  rel="noreferrer"
                  aria-labelledby={`${name
                    .replace(" ", "-")
                    .toLowerCase()} ${name
                    .replace(" ", "-")
                    .toLowerCase()}-demo`}
                >
                  <FaCode
                    id={`${name.replace(" ", "-").toLowerCase()}-demo`}
                    className={classes.icon}
                    aria-label="Demo"
                  />
                </a>
              )}
            </div>
            <a
              href={demo}
              target="_blank"
              rel="noreferrer"
              className={classes.iconBtn}
              aria-labelledby={`${name.replace(" ", "-").toLowerCase()} ${name
                .replace(" ", "-")
                .toLowerCase()}-code`}
            >
              <FaPlay
                id={`${name.replace(" ", "-").toLowerCase()}-code`}
                className={classes.icon}
                aria-label="Code"
              />
            </a>
          </div>
        </div>
        <p
          className="project--desc"
          style={{
            background: theme.secondary,
            color: theme.tertiary,
          }}
        >
          {desc.projectDescription}
          <br></br>
          {desc?.Credential}
          <br></br>
          {desc?.Admin}
          <br></br>
          {desc?.Password}
        </p>
        <div
          className="project--lang"
          style={{
            background: theme.secondary,
            color: theme.tertiary,
          }}
        >
          {tags.map((tag, id) => (
            <span key={id}>{tag}</span>
          ))}
        </div>
      </div>
    </Fade>
  );
}

export default SingleProjectUI;
