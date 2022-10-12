import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { AiFillGithub } from 'react-icons/ai';
import { SiLeetcode } from 'react-icons/si';

function Profile(props) {
    return (
        <Row style={{justifyContent:"center",paddingBottom:"50px",height:"auto"}}>
            <Col xs={4} md={2} className="tech-icons ">
                <a href='https://github.com/Harshs-125'><AiFillGithub /></a>
            </Col>
            <Col xs={4} md={2} className="tech-icons ">
                <a href='https://leetcode.com/Harshs125/'><SiLeetcode /></a>
            </Col>
        </Row>
    );
}

export default Profile;