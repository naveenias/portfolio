import React from "react";
import { Col, Row, Tooltip, OverlayTrigger } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
} from "react-icons/di";
import { FaHtml5, FaCss3Alt, FaBootstrap } from "react-icons/fa";
import { SiExpress, SiSqlite } from "react-icons/si";
import { SiGithub, SiVercel, SiVisualstudiocode, } from "react-icons/si";

function renderTooltip(name) {
  return <Tooltip>{name}</Tooltip>;
}

function Techstack() {
  const frontendTechs = [
    { icon: <DiJavascript1 />, name: "JavaScript" },
    { icon: <DiReact />, name: "React.js" },
    { icon: <FaHtml5 />, name: "HTML" },
    { icon: <FaCss3Alt />, name: "CSS" },
    { icon: <FaBootstrap />, name: "Bootstrap" },
  ];

  const backendTechs = [
    { icon: <DiNodejs />, name: "Node.js" },
    { icon: <SiExpress />, name: "Express.js" }, 
    { icon: <DiPython />, name: "Python" }
  ];

  const databaseTechs = [
    { icon: <DiMongodb />, name: "MongoDB" },
    { icon: <SiSqlite />, name: "SQLite" },
  ];

  const toolTechs = [
    { icon: <SiVisualstudiocode />, name: "Visual Studio Code" },
    { icon: <SiGithub />, name: "GitHub" },
    { icon: <SiVercel />, name: "Vercel" },
  ];

  return (
    <div style={{ textAlign: "center", paddingBottom: "50px" }}>
      <h2>Frontend</h2>
      <Row style={{ justifyContent: "center" }}>
        {frontendTechs.map((tech, index) => (
          <Col xs={4} md={2} className="tech-icons" key={index}>
            <OverlayTrigger
              placement="top"
              delay={{ show: 250, hide: 400 }}
              overlay={renderTooltip(tech.name)}
            >
              <div>{tech.icon}</div>
            </OverlayTrigger>
          </Col>
        ))}
      </Row>

      <h2>Backend</h2>
      <Row style={{ justifyContent: "center" }}>
        {backendTechs.map((tech, index) => (
          <Col xs={4} md={2} className="tech-icons" key={index}>
            <OverlayTrigger
              placement="top"
              delay={{ show: 250, hide: 400 }}
              overlay={renderTooltip(tech.name)}
            >
              <div>{tech.icon}</div>
            </OverlayTrigger>
          </Col>
        ))}
      </Row>

      <h2>Databases</h2>
      <Row style={{ justifyContent: "center" }}>
        {databaseTechs.map((tech, index) => (
          <Col xs={4} md={2} className="tech-icons" key={index}>
            <OverlayTrigger
              placement="top"
              delay={{ show: 250, hide: 400 }}
              overlay={renderTooltip(tech.name)}
            >
              <div>{tech.icon}</div>
            </OverlayTrigger>
          </Col>
        ))}
      </Row>

      <h2>Tools</h2>
      <Row style={{ justifyContent: "center" }}>
        {toolTechs.map((tech, index) => (
          <Col xs={4} md={2} className="tech-icons" key={index}>
            <OverlayTrigger
              placement="top"
              delay={{ show: 250, hide: 400 }}
              overlay={renderTooltip(tech.name)}
            >
              <div>{tech.icon}</div>
            </OverlayTrigger>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Techstack;
