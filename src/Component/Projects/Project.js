import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import gst from "../../Assets/gst.png";
import movieapp from "../../Assets/movieapp.png";
import codeial from "../../Assets/codeial.png";
import "./Project.css";

function Project(props) {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>

        <Row
          style={{
            justifyContent: "center",
            paddingBottom: "10px",
            paddingTop: "10px",
          }}
        >
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gst}
              title="GST(Giving & Sharing Trust) website"
              description="fully functional web site for donation and and for admin so that he can update information single handlely through the web site itself There is a special route(/admin) for Admin access with USERNAME : GSTADMIN, PASSWORD : GST1234 
                        Technologies used - Nodejs , Mongodb , Expressjs , Razorpay(for payment gateway)"
              ghLink="https://github.com/Harshs-125/GST-website-project-"
              demolink="https://gstnodeproject.herokuapp.com/donate"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={movieapp}
              title="MovieList App"
              description="its a simple web app to organise list of movie user watch and to mark them as favourite or unfavourite including searching of movie across internet using OMDB api.
                        Technologies used - React , Redux"
              glink="https://github.com/Harshs-125/Movieapp"
              demolink="https://movieappreactproject.herokuapp.com/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={codeial}
              title="Codeial"
              description="It is a WebApp which serves the following purposes: The user can create his/her account using local auth. Users can create a post. Users can comment, like on other posts. Users can chat with other users in group. The Backend was made on Node js and Frontend Fetch all info from backend using REST APIs Technologies used:React, Nodejs , MongoDB,Sockte.IO,Redux (StateManagement)"
              glink="https://github.com/Harshs-125/Codeialfinal"
              demolink="https://codeialfinal.herokuapp.com/   "
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Project;
