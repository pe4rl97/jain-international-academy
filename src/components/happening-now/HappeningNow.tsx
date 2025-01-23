import { Col, Container, Row } from "react-bootstrap"
import './happening-now.scss'
import HappeningNowCards from "../happening-now-cards/HappeningNowCards"
import { useInView } from "react-intersection-observer"

const cardsData = {
    data: [{
        id: 1,
        heading: 'Group Activities in School',
        image_url: '/src/assets/indian-teacher-uses-laptop.png',
        text: "Group activities in school foster teamwork, creativity, learning, and friendships.",
    }, {
        id: 2,
        heading: 'Individual Education Plan',
        image_url: '/src/assets/individual-education-plan.jpg',
        text: "Individual Education Plan supports personalized learning for students.",
    }, {
        id: 3,
        heading: 'Experienced Coaches',
        image_url: '/src/assets/karate-students.jpg',
        text: "Experienced coaches for Sports, Karate, Music and Co-curricular Activities",
    }, {
        id: 4,
        heading: 'Interactive Classroom',
        image_url: '/src/assets/teacher-with-children-interaction.png',
        text: "Guidance through interactive role play and meaningful conversation between teacher and students.",
    }]
}

const HappeningNow = () => {
    const { ref: Ref, inView } = useInView({
        threshold: 0.1, // Trigger when 10% of the element is visible
        triggerOnce: true, // Trigger only once when it comes into view
    });
    return (
        <div className="happening-now-wrapper-div">
            <Container ref={Ref} className={`happening-now-wrapper ${inView ? "in-view" : ""}`}>
                <Row className="justify-content-around">
                    <Col md='6' xs='10'>
                        <h1 className="happening-now-title">Happening Now</h1>
                    </Col>
                    <Col md='6' xs='10'>
                        <p className="happening-p">
                            At Jain International Public School’s beautiful campus, you’ll find a diverse and welcoming community that will teach you life skills along with having fun.
                        </p>
                    </Col>
                </Row>
                <Row>
                    {cardsData.data.map((cardData) => (
                        <Col lg='3' md='6' sm='6' xs='12' key={cardData.id} className="mb-3 card-wrapper">
                            <HappeningNowCards key={cardData.id} id={cardData.id} heading={cardData.heading} image_url={cardData.image_url} text={cardData.text}/> 
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    )
}

export default HappeningNow