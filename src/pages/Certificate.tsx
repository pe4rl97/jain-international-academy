import React, { useEffect, useState } from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import NavBar from "../components/dark-navbar/NavBar";

const Certificate: React.FC = () => {
  const location = useLocation();
  const [pdfName, setPdfName] = useState("");
  const [imageLink, setImageLink] = useState("");
  const [pdfLink, setPdfLink] = useState("");
  const [isMandatoryDisclosure, setIsMandatoryDisclosure] = useState(false);

  useEffect(() => {
    // Extract query parameters from the URL
    const params = new URLSearchParams(location.search);
    const name = params.get("name") || "";
    const imagelink = params.get("imageLink") || "";
    const pdflink = params.get("pdfLink") || "";
    console.log(params.get('imageLink'));
    setPdfName(name);
    setImageLink(imagelink);
    setPdfLink(pdflink);

    if (name === "Mandatory Disclosure Details") {
      setIsMandatoryDisclosure(true);
    }
  }, [location.search]);

  return (
    <div className="p-0 m-0">
      {/* Background */}
      <div className="fixed inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>

      {/* Header */}
      <header className="bg-white sticky top-0 shadow-sm">
        <NavBar/>
      </header>

      {/* Main Section */}
      <main>
        {/* PDF Section */}
        <Container className="text-center my-5">
          <h2 className="my-4">{pdfName}</h2>
          <Row className="justify-content-center">
            <Col md={6}>
              <a href={pdfLink} target="_blank" rel="noopener noreferrer">
                <Image src={imageLink} alt={pdfName} fluid className={`shadow ${isMandatoryDisclosure ? "mb-4" : ""}`} />
              </a>
              <p className="text-muted">*Click the image to open/download the PDF file.</p>
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
                  <source src="https://jaininternationalacademy.com/assets/JIPS.mp4" type="video/mp4" />
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
