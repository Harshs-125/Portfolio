import React from "react";
import { Col, Row } from "react-bootstrap";
import {CgGames} from 'react-icons/cg'
import {MdLocalMovies,MdTravelExplore} from 'react-icons/md'
import {BsMusicNoteBeamed} from 'react-icons/bs'

import img from '../../Assets/aboutsection.png';
import './About.css';
import TechStack from "./TechStack";
import ToolStack from "./ToolStack";
import Profile from "./Profile";
function About() {
  return (
    <div className="about-section">
      <div className="about-container">
        <Row>
          <Col >
          <h1>Know Who <span className="purple">I'M</span></h1>
          <div className="intro-decription">
            <p className="i-p">Hi EveryOne I am <span className="purple">Harsh Soni</span> from <span className="purple">Ashoknagar (MP) India</span>
            I am a Undergraduate Student in IET DAVV Indore in Computer 
            Engineering 
            <br/><br/>
            Apart from coding , some other activities that i love to do!
            <ul>
              <li>
                <CgGames/> Playing Games
              </li>
              <li>
                <MdLocalMovies/> Watching Movies/Series
              </li>
              <li>
                <MdTravelExplore/> Travelling
              </li>
              <li>
               <BsMusicNoteBeamed/> Listening Music
              </li>
            </ul>
            </p>
          </div>
          </Col>
          <Col>
            <img src={img} alt="aboutsection-img" style={{width:"80%",height:"70%"}}/>
          </Col>
        </Row>
        <br/>
        <h1> Professional <span className="purple">Skillset</span></h1>
        <TechStack />
        <h1><strong className="purple">Tools</strong> I use</h1>
        <ToolStack />
        <h1>checkout my <strong className="purple">Coding Profiles</strong></h1>
        <Profile />
      </div>
    </div>
  );
}

export default About;
