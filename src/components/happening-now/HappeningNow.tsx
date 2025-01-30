import { Col, Container, Row } from "react-bootstrap"
import { useInView } from "react-intersection-observer"
import HappeningNowCards from "../happening-now-cards/HappeningNowCards"
import './happening-now.scss'
import { useTranslation } from "react-i18next"


const HappeningNow = () => {
    const { ref: Ref, inView } = useInView({
        threshold: 0.1, // Trigger when 10% of the element is visible
        triggerOnce: true, // Trigger only once when it comes into view
    });
    const { t } = useTranslation("about-us");
    const { card1, card2, card3, card4 } = t("cards");
    const cardsData = {
        data: [{
            id: 1,
            heading: card1.heading,
            image_url: '/src/assets/indian-teacher-uses-laptop.png',
            text: card1.text,
        }, {
            id: 2,
            heading: card2.heading,
            image_url: '/src/assets/individual-education-plan.jpg',
            text: card2.text,
        }, {
            id: 3,
            heading: card3.heading,
            image_url: '/src/assets/karate-students.jpg',
            text: card3.text,
        }, {
            id: 4,
            heading: card4.heading,
            image_url: '/src/assets/teacher-with-children-interaction.png',
            text: card4.text,
        }]
    }
    return (
        <div className="happening-now-wrapper-div">
            <Container ref={Ref} className={`happening-now-wrapper ${inView ? "in-view" : ""}`}>
                <Row className="justify-content-around">
                    <Col md='6' xs='10'>
                        <h1 className="happening-now-title">{t("happeningNowTitle")}</h1>
                    </Col>
                    <Col md='6' xs='10'>
                        <p className="happening-p">
                            {t("happeningNowDescription")}
                        </p>
                    </Col>
                </Row>
                <Row className="justify-content-center mt-3">
                    {cardsData.data.map((cardData) => (
                        <Col lg='3' md='6' sm='6' xs='12' key={cardData.id} className="mb-3 card-wrapper">
                            <HappeningNowCards key={cardData.id} heading={cardData.heading} image_url={cardData.image_url} text={cardData.text}/> 
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    )
}

export default HappeningNow