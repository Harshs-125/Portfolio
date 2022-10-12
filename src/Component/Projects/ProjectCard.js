import React from 'react';
import { Button, Card } from 'react-bootstrap';
import {AiFillGithub} from 'react-icons/ai';
import {CgWebsite} from 'react-icons/cg';
function ProjectCard(props) {
    return (
        <Card className='project-card-view'>
            <Card.Img variant='top' src={props.imgPath} alt="project-img"/>
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text style={{textAlign:"justify",padding:"10px"}}>
                    {props.description}
                </Card.Text>
                <Button className="btn" variant="primary" href={props.ghLink} target="_blank">
                    <AiFillGithub/> &nbsp; {"Github"}
                </Button>
                <Button className="btn" variant="primary" href={props.demolink} target="_blank" style={{marginLeft:"10px"}}>
                    <CgWebsite /> &nbsp; {"Demo"}
                </Button>
            </Card.Body>    
        </Card>
    );
}   

export default ProjectCard;