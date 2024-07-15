import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CertificatesCard from "./CertificatesCard";
import Particle from "../Particle";
import ReactJs from "../../Assets/Certificates/ReactJs.jpg"
import nodeJs from "../../Assets/Certificates/nodeJs.jpg"
import Developer_foundation from "../../Assets/Certificates/Developer_foundation.jpg"
import dynamic from "../../Assets/Certificates/dynamic.jpg"
import python from "../../Assets/Certificates/python.jpg"
import SQl from "../../Assets/Certificates/SQl.jpg"
import javasript_essentials from "../../Assets/Certificates/javasript_essentials.jpg"
import responsive from "../../Assets/Certificates/responsive.jpg"
import static_website from "../../Assets/Certificates/static_website.jpg"


function Certificates() {
  const Certificates = [
    {
      title: "Build Your Own Static Website",
      description:"Key Topics Covered: Basics of HTML5, CSS3, CSS Box Model, Introduction of Bootstrap and Flex Layout, Bootstrap Utility Classes and Components, Website Layout Development",
      imgPath: static_website,
      Link: "https://certificates.ccbp.in/intensive/static-website?id=WPPQMISNXX",
    },
    {
      title: "Build Your Own Responsive Website",
      description:"Key Topics Covered: Bootstrap Grid System, CSS Specificity, CSS Cascading and Inheritance, Bootstrap Flex Utilities",
      imgPath: responsive,
      Link: "https://certificates.ccbp.in/intensive/responsive-website?id=EGDYIYQHOK",
    },
    {
        title: "Build Your Own Dynamic Web Application",
        description:"Key Topics Covered: Introduction to JS & variables, Arrays and objects, Fetch & Callback, Building Wikipedia Search Application, DOM & Event Fundamentals, JSON & Local Storage, Forms",
        imgPath: dynamic,
        Link: "https://certificates.ccbp.in/intensive/dynamic-web-application?id=KWNYUXYZIO",
      },
      {
        title: "JavaScript Essentials",
        description:"Key Topics Covered: Factory and Constructor, Prototype and classes, Asynchronous JS, Scope & Hoisting, Array methods",
        imgPath: javasript_essentials,
        Link: "https://certificates.ccbp.in/intensive/javascript-essentials?id=KGYJEZXQOH",
      },
      {
        title: "Programming Foundations with Python",
        description:"Key Topics Covered: Loops & Conditionals, Lists, Tuples & Sets, Dictionaries, Functions & Recursion, OOP Concepts",
        imgPath: python,
        Link: "https://certificates.ccbp.in/intensive/programming-foundations?id=RTRMLZWWDB",
      },
      {
        title: "Developer Foundations",
        description:"Key Topics Covered: Fundamentals of Computer Science, Work with command line, Collaborating with Git",
        imgPath: Developer_foundation,
        Link: "https://certificates.ccbp.in/intensive/developer-foundations?id=WBMMUSRLRG",
      },
      {
        title: "Introduction to Databases",
        description:"Key Topics Covered: Querying with SQL, Aggregations and Group By, Modelling Database, Joins, Views and Subqueries",
        imgPath: SQl,
        Link: "https://certificates.ccbp.in/intensive/introduction-to-databases?id=FWZNWXXPTV",
      },
      {
        title: "React JS",
        description:"Key Topics Covered: Introducing JSX, Components and Props, Lists and Keys, Handling Events, Conditional Rendering, Routing using React Router, Authentication & Authorization, React Context, Styled Components, Third-Party Packages",
        imgPath: ReactJs,
        Link: "https://certificates.ccbp.in/intensive/react-js?id=SJOEANONUA",
      },
      {
        title: "Node.js",
        description:"Key Topics Covered: Modules in Node.js, HTTP Server, ExpressJS Server Framework, CRUD API's, ExpressJS Middlewares, JSON Web Token, Secure API's",
        imgPath: nodeJs,
        Link: "https://certificates.ccbp.in/intensive/node-js?id=JRJMMDIBKD",
      },
  ]
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My  <strong className="purple">Certificates </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few Certificates I've gained recently.
        </p>
        <hr/>
        <br/>
        
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

           {Certificates.map((Certificate)=>{
            return(
                <Col md={4} className="project-card">
                  <CertificatesCard imgPath={Certificate.imgPath} title={Certificate.title} description={Certificate.description} Link={Certificate.Link} />
                </Col>
            )
           })}
        
          
        </Row>
      </Container>
    </Container>
  );
}

export default Certificates;
