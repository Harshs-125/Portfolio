import React from "react";
import { Row, Col } from "react-bootstrap";

import Type from "./Type";
import homelogo from "../../Assets/home-main.png";
import Home2 from "./Home2";
import './Home.css';


function Home(props) {
  return (
    <>
      <div className="home-section">
      {/* <Particle /> */}
        <div className="home-content">
          <Row>
            <Col className="home-header">
              <h1 className="heading">
                Hi There!{" "}
                <span className="wave" role="img">
                  👋🏻
                </span>
              </h1>
              <h1 className="heading-name">
                I'M
                <strong className="main-name"> Harsh Soni</strong>
              </h1>
              <div className="type">
                <Type />
              </div>
            </Col>
            <Col>
              <img
                src={homelogo}
                alt="home-pic"
                className="img-fuild"
                id="home-logo"
              />
            </Col>
          </Row>
        </div>
        <Home2 />
      </div>
      </>
  );
}

export default Home;
