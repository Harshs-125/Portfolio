import React from "react";
import { Button, Container, Row } from "react-bootstrap";
import { AiOutlineDownload } from "react-icons/ai";
import pdf from "../../Assets/harsh_resume6.pdf";
import { Document, Page, pdfjs } from "react-pdf/dist/esm/entry.webpack";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const resumeLink =
  "https://raw.githubusercontent.com/soumyajit4419/portfolio/master/src/Assets/Soumyajit_Behera-BIT_MESRA.pdf";

function Resume(props) {
  return (
    <Container fluid className="resume-section">
      <Row
        style={{
          justifyContent: "center",
          position: "relative",
          height: "100px"
        }}
      >
        <Button
          variant="primary"
          href={pdf}
          target="_blank"
          style={{ width: "250px", height: "50px", alignItems: "center" ,position:"absolute",top:"50%",transform: "translateY(-50%)"}}
        >
          <AiOutlineDownload />
          Download CV
        </Button>
      </Row>
      <Row
        className="resume"
        style={{ height: "auto", marginTop: "20px", marginBottom: "20px" }}
      >
        <Document file={resumeLink} className="d-flex justify-content-center">
          <Page pageNumber={1} />
        </Document>
      </Row>
      <Row
        style={{
          justifyContent: "center",
          position: "relative",
          height: "100px",
          margin: "20px",
        }}
      >
        <Button
          variant="primary"
          href={pdf}
          target="_blank"
          style={{ width: "250px", height: "50px", alignItems: "center",position:"absolute",top:"50%",transform: "translateY(-50%)" }}
        >
          <AiOutlineDownload />
          Download CV
        </Button>
      </Row>
    </Container>
  );
}

export default Resume;
