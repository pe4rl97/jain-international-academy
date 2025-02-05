import { useEffect, useState } from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import video from '../../assets/JIPS.mp4'
import './certificate.scss';

const Certificate = () => {
  const location = useLocation();
  const [pdfName, setPdfName] = useState("");
  const [imageLink, setImageLink] = useState("");
  const [pdfLink, setPdfLink] = useState("");
  const [isMandatoryDisclosure, setIsMandatoryDisclosure] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);

    // Extract query parameters from the URL
    const params = new URLSearchParams(location.search);
    const name = params.get("name") || "";
    const imagelink = params.get("imageLink") || "";
    const pdflink = params.get("pdfLink") || "";

    setPdfName(name);
    setImageLink(imagelink);
    setPdfLink(pdflink);

    if (name === "Mandatory Disclosure Details") {
      setIsMandatoryDisclosure(true);
    }
  }, [location.search]);

  return (
    <div className="certificate-wrapper">

      {/* Main Section */}
      <main>
        {/* PDF Section */}
        <Container className="text-center my-5">
          <h1 className="mb-4 pdf-name-title"><span className="bg-white">{pdfName}</span></h1>
          <Row className="justify-content-center">
            <Col md={6}>
              <a href={pdfLink} target="_blank" rel="noopener noreferrer">
                <Image src={imageLink} alt={pdfName} fluid className={`shadow certificate-img ${isMandatoryDisclosure ? "mb-4" : ""}`}/>
              </a>
              <p className="text-muted mt-3">*Click the image to open/download the PDF file.</p>
            </Col>
          </Row>
        </Container>

        {/* Mandatory Disclosure Section */}
        {isMandatoryDisclosure && (
          <Container className="my-5">
            <h2 className="text-center my-4">School Video</h2>
            <Row className="justify-content-center">
              <Col md={8}>
                <video controls className="w-100">
                  <source src={video} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </Col>
            </Row>
          </Container>
        )}
      </main>
    </div>
  );
};

export default Certificate;
