import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { DiGitMerge, DiHeroku, DiVisualstudio } from 'react-icons/di';
import { SiPostman } from 'react-icons/si';
function ToolStack(props) {
    return (
        <Row style={{justifyContent:"center" , paddingBottom:"50px",height:"auto"}}>
           <Col xs={4} md={2} className="tech-icons">
            <DiHeroku />
           </Col>
           <Col xs={4} md={2} className="tech-icons">
            <SiPostman/>
           </Col>
           <Col xs={4} md={2} className="tech-icons">
            <DiGitMerge/>
           </Col>
           <Col xs={4} md={2} className="tech-icons">
            <DiVisualstudio/>
           </Col>
        </Row>
    );
}

export default ToolStack;