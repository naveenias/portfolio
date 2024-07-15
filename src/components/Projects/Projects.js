import React from "react";
import Card from "react-bootstrap/Card";
import { BsGithub } from "react-icons/bs";
import { Container, Row, Col, Carousel } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import wekipedia from "../../Assets/Projects/wekipedia.png";
import next_trendz from "../../Assets/Projects/next_trendz.png";
import joby_app from "../../Assets/Projects/joby_app.png";
import prime from "../../Assets/Projects/prime.png";
import ipl_dashboard from "../../Assets/Projects/ipl_dashboard.png";
import todo from "../../Assets/Projects/todo.png";
import timg1 from "../../Assets/Projects/timg1.png";
import timg2 from "../../Assets/Projects/timg2.png";
import timg3 from "../../Assets/Projects/timg3.png";
import timg4 from "../../Assets/Projects/timg4.png";
import timg5 from "../../Assets/Projects/timg5.png";
import timg6 from "../../Assets/Projects/timg6.png";
import timg7 from "../../Assets/Projects/timg7.png";
import timg8 from "../../Assets/Projects/timg8.png";
import timg9 from "../../Assets/Projects/timg9.png";
import timg10 from "../../Assets/Projects/timg10.png";
import ccbp_timeline from "../../Assets/Projects/ccbp_timeline.png"
import money_manager from "../../Assets/Projects/money_manager.png"
import match_game from "../../Assets/Projects/match_game.png"

function Projects() {
  const projects = [
    {
      title: "Nxt Trendz ( ECommerce Clone - Amazon, Flipkart)",
      description: "Created a modern e-commerce experience with a design inspired by Amazon and Flipkart.Implemented pages for Login, Products, and Product details with React Router, React components, and form inputs. Secured user data with JWT tokens, REST API calls, and local storage. Technologies used: React JS, JS, CSS, Bootstrap, Routing, REST API Calls, Local Storage, JWT Token,Authorization, Authentication {username: rahul, password: rahul@2021} ",
      imgPath: next_trendz,
      ghLink: "https://github.com/naveenias/naveensnexttrends.git",
      demoLink: "https://naveensnxtrendz.ccbp.tech",
    },
    {
      title: "Jobby App",
      description:"Brought to life an all-encompassing job search platform, Jobby App. Created pages for Login, Home, Jobs, and Job item details with React components. Secured user information with JWT tokens, REST API calls, and local storage. Utilized React Router for protected routes and persisted login state. Technologies used: React JS, JS, CSS, Bootstrap, Routing, REST API Calls, Local Storage, JWT Token, Authorization, Authentication {username: rahul, password: rahul@2021}",
      imgPath: joby_app,
      ghLink: "https://github.com/naveenias/jobby-app.git",
      demoLink: "https://naveensjobyapp.ccbp.tech",
    },
    {
      title: "Movies App (Netflix/Amazon Prime Clone)",
      description:"Designed and developed a robust OTT platform for movie aficionados. Enhanced user experience with smooth navigation using React Router, dynamic scrolling using React Slick, and eye-catching UI using Figma.Integrated with TMDb APIs for movie database and authentication, and ensured secure login with client storage.",
      imgPath: prime,
      ghLink: "https://github.com/naveenias/prime-video.git",
      demoLink: "https://naveensprime.ccbp.tech",
    },
    {
      title: "IPL Dashboard",
      description:"Created a comprehensive dashboard for IPL teams and matches. Used React Router for smooth navigation, displaying team information and matches with REST API calls Implemented a 404 page for invalid routes. Technologies used: React JS, Routing, REST API Calls, CSS, Bootstrap",
      imgPath: ipl_dashboard,
      ghLink: "https://github.com/naveenias/ipl-dashboard.git",
      demoLink: "https://nipldashboard.ccbp.tech",
    },
    {
      title: "Match Game",
      description:"Developed a matching game application with score tracking, timer management, and tab navigation functionalities. Initial setup includes a score of 0 and a timer set to 60 seconds, displaying the first imageUrl from imagesList as the image to be matched.  Score increments upon matching a clicked thumbnail with the image to be matched. Game ends and displays the Scorecard view if a clicked thumbnail doesn't match the image. Implemented with React components and state management for interactive gameplay.",
      imgPath: match_game,
      ghLink: "https://github.com/naveenias/match-game.git",
      demoLink: " nsmatchinggame.ccbp.tech",
    },
    {
      title: "Money Manager",
      description: "Developed a money management application to track balance, income, and expenses through transaction management. Implemented functionalities to add transactions, calculate balances dynamically, and update transaction history. Initial setup with Balance, Income, and Expenses set to 0. Updated dynamically based on transaction inputs.Added features to add and delete transactions, updating total balance, income, and expenses accordingly. Technologies used: HTML, CSS, JavaScript, React JS",
      imgPath: money_manager,
      ghLink: "https://github.com/naveenias/moneymanager.git",
      demoLink: " nsmoneymanager.ccbp.tech",
    },
    {
      title: "Wikipedia Search Application",
      description:"Developed custom wikipedia search application where user can search and view curated results and can see detailed explanation in wikipedia by clicking on the specific result. Technologies used: HTML, CSS, JS, REST API Calls, Bootstrap",
      imgPath: wekipedia,
      ghLink: "https://github.com/naveenias/naveenswiki.git",
      demoLink: "https://naveenswiki.ccbp.tech",
    },
    {
      title: "Nxt Trendz ( ECommerce Clone - Amazon, Flipkart)",
      description:"Developed persistent todo application with CRUD operations to track list of tasks. Technologies used: HTML, CSS, JS, Bootstrap",
      imgPath: todo,
      ghLink: "https://github.com/naveenias/naveenstodo.git",
      demoLink: "https://naveenstodo.ccbp.tech",
    },
    {
      title: "CCBP Timeline",
      description: "Implemented a dynamic timeline application using React Chrono to render timeline items categorized as COURSE or PROJECT. Technologies Used: React JS, React Chrono, React Icons",
      imgPath: ccbp_timeline,
      ghLink: "https://github.com/naveenias/ccbp-timeline.git",
      demoLink: "nsccbptimeline.ccbp.tech",
    },
  ]
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <hr/>
        <br/>
        <h1 className="project-heading" style={{ textAlign: "start",}}>
          Projects For <strong className="purple">Clients </strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={12} className="project-card">
        <Card className="project-card-view" id="clientproject">
         <div>
         <Carousel className="carousolmain"  interval={3000}>
            <Carousel.Item className="carousel" > 
              <img className="d-block w-100" src={timg1} alt="slide1"/>
            </Carousel.Item>
            <Carousel.Item className="carousel" > 
              <img className="d-block w-100" src={timg2} alt=" slide2"/>
            </Carousel.Item>
            <Carousel.Item className="carousel" > 
              <img className="d-block w-100" src={timg3} alt=" slide3"/>
            </Carousel.Item>
            <Carousel.Item className="carousel" > 
              <img className="d-block w-100" src={timg4} alt=" slide4"/>
            </Carousel.Item>
            <Carousel.Item className="carousel" > 
              <img className="d-block w-100" src={timg5} alt=" slide5"/>
            </Carousel.Item>
            <Carousel.Item className="carousel" > 
              <img className="d-block w-100" src={timg6} alt=" slide6"/>
            </Carousel.Item>
            <Carousel.Item className="carousel" > 
              <img className="d-block w-100" src={timg7} alt=" slide7"/>
            </Carousel.Item>
            <Carousel.Item className="carousel" > 
              <img className="d-block w-100" src={timg8} alt=" slide8"/>
            </Carousel.Item>
            <Carousel.Item className="carousel" > 
              <img className="d-block w-100" src={timg9} alt=" slide9"/>
            </Carousel.Item>
            <Carousel.Item className="carousel" > 
              <img className="d-block w-100" src={timg10} alt=" slide10"/>
            </Carousel.Item>
            
          </Carousel>
         </div>
         <div>
         <Card.Body>
        <h1 className="project-heading" id="clientheading">Vjs Mukyaprana Study Zone</h1>
        <h1 className="project-heading" id="clientheading" style={{ textAlign: "start",}}>
          Client Name: <strong className="purple">Vijay K </strong>
        </h1>
        <Card.Text style={{ textAlign: "justify" }}>
        Developed a comprehensive tuition management system for a client. Implemented admin and student login functionalities. Admin functionalities included student registration, teacher registration, adding attendance, adding marks. Integrated feature for sending absent messages to parents using Twilio API. Provided student functionalities to view personal details, marks, and attendance. Technologies used: MongoDB, Express.js, React.js, Node.js, Twilio API.
        </Card.Text>
        
     
      </Card.Body>
      </div>
         </Card>
        </Col>

        <br/>
        <h1 className="project-heading" style={{ textAlign: "start",}}>
           <strong className="purple">personal </strong> Projects
        </h1>
           {projects.map((project)=>{
            return(
                <Col md={4} className="project-card">
                  <ProjectCard imgPath={project.imgPath} title={project.title} description={project.description} ghLink={project.ghLink} demoLink={project.demoLink}/>
                </Col>
            )
           })}
        
        <h1 className="project-heading" style={{ textAlign: "start",}} >
           Other <strong className="purple">Projects </strong> on  <strong className="purple">GitHub  </strong>
           <a
                href="https://github.com/naveenias"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <BsGithub />
              </a>
        </h1>
        
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
