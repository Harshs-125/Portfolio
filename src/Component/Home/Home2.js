import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn, FaFacebook } from "react-icons/fa";
import { Link } from "react-router-dom";
import me from "../../Assets/me.jpg";
function Home2() {
  return (
    <div fluid className="home-about-section" id="about">
      <div className="home-about-div">
        <Row>
          <Col className="home-about-description">
            <div className="home-about-heading">
              <h1>
                LET ME <span className="purple">INTRODUCE </span> MYSELF
              </h1>
            </div>
            <p className="home-about-body">
              I fell in love with Programming and I have atleast learnt
              Somethink ✌🏻
              <br />
              <br />I am fluent in classics like&nbsp;
              <i>
                <b className="purple">
                  JavaSE , DataStructures & Algorithms and DBMS
                </b>
              </i>
              <br />
              <br />
              My field of intrest are building WebSites and whenever possible ,
              I also apply my passion for developing websites with{" "}
              <span className="purple">Nodejs</span> and{" "}
              <span className="purple">
                Modern javascript Library and Frameworks
              </span>{" "}
              like <span className="purple">Reactjs</span>
            </p>
          </Col>
          <Col>
            <div className="profile-picture">
              <div className="profile-picture-background"></div>
            </div>
          </Col>
        </Row>
      </div>
      <div className="home-about-footer">
        <h1>FIND ME ON</h1>
        <p>
          Feel Free to <span className="purple">connect</span> with me
        </p>
        <div className="social-media-handles">
            <div className="icons">
              <a href="#">
                <AiFillGithub />
              </a>
            </div>
            <div className="icons">
              <a href="#">
              <AiFillInstagram />
              </a>
            </div>
            <div className="icons">
              <a href="#">
              <FaLinkedinIn />
              </a>
            </div>
            <div className="icons">
              <a href="#">
              <FaFacebook />
              </a>
            </div>
          </div>
        </div>
      </div>
  );
}

export default Home2;
