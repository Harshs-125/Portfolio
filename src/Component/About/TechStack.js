import React from 'react';
import {DiNodejs,DiJava,DiReact,DiMongodb,DiJavascript1,DiCss3,DiMysql,DiGitBranch} from 'react-icons/di';
import {AiFillHtml5} from 'react-icons/ai';
import {SiCplusplus,SiRedux} from 'react-icons/si';
import {Row,Col} from 'react-bootstrap';
import './About.css';
function TechStack(props) {
    return (
        <Row style={{justifyContent:"center",paddingBottom:"50px"}}>
            <Col xs={4} md={2} className="tech-icons">
            <SiCplusplus />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
            <DiJava />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
            <DiJavascript1 />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
            <AiFillHtml5 />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
            <DiCss3 />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
            <DiNodejs />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
            <DiReact />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
            <DiMongodb />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
            <DiMysql />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
            <SiRedux />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
            <DiGitBranch />
            </Col>
        </Row>
    );
}

export default TechStack;