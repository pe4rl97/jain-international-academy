import { Col, Container, Row } from "react-bootstrap";
import { useInView } from "react-intersection-observer";
import "./stats.scss";

const Stats = () => {
  const { ref: statsRef, inView } = useInView({
    threshold: 0.1, // Trigger when 10% of the element is visible
    triggerOnce: true, // Trigger only once when it comes into view
  });

  return (
    <div className="stats-wrapper-container">
        <Container >
            <Row className="justify-content-center">
                <Col xs="12">
                    <Container
                        ref={statsRef}
                        className={`text-center stats-wrapper ${inView ? "in-view" : ""}`}
                    >
                        <Row className="rounded-4 p-3 py-5 justify-content-between align-items-center">
                            <Col md="3" xs="12" className="mb-4">
                                <h1 className="title-h1">300+</h1>
                                <div className="subtitle-div">Students</div>
                            </Col>
                            <Col md="3" xs="12" className="mb-4">
                                <h1 className="title-h1">1 to 8</h1>
                                <div className="subtitle-div">Class</div>
                            </Col>
                            <Col md="3" xs="12" className="mb-4">
                                <h1 className="title-h1">12+</h1>
                                <div className="subtitle-div">Teachers</div>
                            </Col>
                        </Row>
                    </Container>
                </Col>
            </Row>
        </Container>
    </div>
  );
};

export default Stats;
