import { Col, Container, Row } from "react-bootstrap";
import { useInView } from "react-intersection-observer";
import "./stats.scss";
import CountUp from "react-countup";
import { useTranslation } from "react-i18next";

const Stats = () => {
  const { ref: statsRef, inView } = useInView({
    threshold: 0.1, // Trigger when 10% of the element is visible
    triggerOnce: true, // Trigger only once when it comes into view
  });

  const { t } = useTranslation("main-header");
  const stats = t("stats");

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
                            <Col md="3" xs="4" className="mb-4">
                                <h1 className="title-h1">{inView && <CountUp start={0} end={300} duration={2} />}+</h1>
                                <div className="subtitle-div">{stats.students}</div>
                            </Col>
                            <Col md="3" xs="4" className="mb-4">
                                <h1 className="title-h1">1 to {inView && <CountUp start={1} end={8} duration={5} />}</h1>
                                <div className="subtitle-div">{stats.class}</div>
                            </Col>
                            <Col md="3" xs="4" className="mb-4">
                                <h1 className="title-h1">{inView && <CountUp start={1} end={12} duration={4} />}+</h1>
                                <div className="subtitle-div">{stats.teachers}</div>
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
