import { Col, Container, Row } from "react-bootstrap"
import { useInView } from "react-intersection-observer"
import HappeningNowCards from "../happening-now-cards/HappeningNowCards"
import photo1 from '../../assets/indian-teacher-uses-laptop.png'
import photo2 from '../../assets/individual-education-plan.jpg'
import photo3 from '../../assets/karate-students.jpg'
import photo4 from '../../assets/teacher-with-children-interaction.png'
import './happening-now.scss'

const cardsData = {
    data: [{
        id: 1,
        heading: 'Group Activities in School',
        image_url: photo1,
        text: "Group activities in school foster teamwork, creativity, learning, and friendships.",
    }, {
        id: 2,
        heading: 'Individual Education Plan',
        image_url: photo2,
        text: "Individual Education Plan supports personalized learning for students.",
    }, {
        id: 3,
        heading: 'Experienced Coaches',
        image_url: photo3,
        text: "Experienced coaches for Sports, Karate, Music and Co-curricular Activities",
    }, {
        id: 4,
        heading: 'Interactive Classroom',
        image_url: photo4,
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