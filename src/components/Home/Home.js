import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import profileimg from "../../Assets/profileimg.png";
import Particle from "../Particle";
import Type from "./Type";
import { SiGmail } from "react-icons/si";

import {
  AiFillGithub,
} from "react-icons/ai";
import { FaLinkedinIn, FaPhone } from "react-icons/fa";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{"   "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name">   Naveen M</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
              
            </Col>

            <Col md={5} style={{ paddingBottom: 0 }}>
            <img
                src={profileimg}
                alt="home pic"
                className="profile"
                style={{ maxHeight: "450px" }}
              />
              <div class="photo-container">
              <div class="rect-wall"></div>
              <img src={profileimg} alt="Profile Photo" className="profile-photo" />
              </div>
            </Col>
          </Row>
          <Row>
            <Col md={12} className="home-about-social">
              <h1>FIND ME ON</h1>
              <p>
                Feel free to <span className="purple">connect </span>with me
              </p>
              <ul className="home-about-social-links">
                <li className="social-icons">
                  <a
                    style={{ color: "white", textDecoration: "none"}} 
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaPhone
                      style={{ marginRight: "8px" }}
                      className="icon-colour  home-social-icons"
                    />{" "}
                    +91 9632557859
                  </a>
                </li>
                <li className="social-icons">
                  <a
                    href="mailto:naveenacp24@gmail.com"
                    style={{ color: "white", textDecoration: "none"}} 
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <SiGmail
                      style={{ marginRight: "8px" }}
                      className="icon-colour  home-social-icons"
                    />{" "}
                    naveenacp24@gmail.com
                  </a>
                </li>
                <li className="social-icons">
                  <a
                    href="https://github.com/naveenias"
                    style={{ color: "white", textDecoration: "none"}} 
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <AiFillGithub
                      style={{ marginRight: "8px" }}
                      className="icon-colour  home-social-icons"
                    />{" "}
                    https://github.com/naveenias
                  </a>
                </li>
                <li className="social-icons">
                  <a
                    href="https://www.linkedin.com/in/naveen4455/"
                    style={{ color: "white", textDecoration: "none"}} 
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedinIn
                      style={{ marginRight: "8px" }}
                      className="icon-colour  home-social-icons"
                    />{" "}
                    www.linkedin.com/in/naveen4455
                  </a>
                </li>
                
              </ul>
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
}

export default Home;
