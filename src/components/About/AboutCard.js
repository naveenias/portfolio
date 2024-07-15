import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Naveen M </span>
            from <span className="purple"> Bangalore, India. </span>
            I am a passionate and dedicated<span className="purple"> software engineer</span> with a keen interest in full-stack web development. I thrive on creating dynamic and responsive web applications using technologies like React JS, Node JS, and MongoDB.
           
            My expertise covers<span className="purple"> Full-Stack Development, JavaScript Development, and MERN Stack Development. </span>
            
            My goal is to leverage the potential of code to address real-world challenges and drive innovation for a brighter future.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Swimming
            </li>
            <li className="about-activity">
              <ImPointRight /> Cooking
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Coding to shape the future of technology.!"{" "}
          </p>
          <footer className="blockquote-footer">Naveen M</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
