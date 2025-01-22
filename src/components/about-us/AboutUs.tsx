import { Col, Container, Row } from "react-bootstrap"
import sidePhoto1 from '../../assets/student-teacher-blackboard.png'
import sidePhoto2 from '../../assets/student-with-books.png'
import './about-us.scss'
import HappeningNow from "../happening-now/HappeningNow"

const AboutUs = () => {
    // const { ref: statsRef, inView } = useInView({
    //     threshold: 0.3, // Trigger when 10% of the element is visible
    //     triggerOnce: true, // Trigger only once when it comes into view
    // });
    return (
        <section className="about-us-wrapper" id="about-us">
            <div className="about-us-div">
                <Container className="about-us-container rounded">
                    <h1 className="text-center about-us-title mb-5" data-aos='fade-in'><span className="bg-white">About Us</span></h1>
                    <Row className="g-0 justify-content-around mt-3 align-items-center">
                        <Col md='4' xs='11' className="column bg-white p-4 shadow rounded" data-aos='fade-right'>
                            <img src={sidePhoto1} alt="student teacher with blackboard" className="img-fluid rounded-3"/>
                        </Col>
                        <Col md='6' xs='12' className="column mt-5" data-aos='fade-left ' data-aos-delay='100'>
                            <p className="text-p bg-white rounded p-4">
                            <span className="fw-bold">JAIN INTERNATIONAL PUBLIC SCHOOL</span> was established in 2013 and it is managed by the Pvt. Unaided. It is located in urban area. It is located in <span className="fw-bold">VALSAD</span> block of <span className="fw-bold">VALSAD</span> district of Gujarat. The school consists of grades from 1 to 5. The school is co-educational and it have an attached pre-primary section. The school is N/A in nature and is not using school building as a shift-school. English is the medium of instructions in this school. This school is approachable by all weather road. In this school academic session starts in April.
                            </p>
                        </Col>
                    </Row>
                    <Row className="mt-5 justify-content-around g-5 align-items-center">
                        <Col xs='11' className="h-50 d-md-none d-xs-block column bg-white p-4 shadow rounded"  data-aos='fade-left' data-aos-delay='50' >
                            <img src={sidePhoto2} alt="student teacher with blackboard" className="img-fluid rounded-3"/>
                        </Col>
                        <Col md='7' xs='12' className="column" data-aos='fade-right' >
                            <p className="text-p bg-white rounded p-4">
                            The school has Private building. It has got 6 classrooms for instructional purposes. All the classrooms are in good condition. It has 2 other rooms for non-teaching activities. The school has a separate room for Head master/Teacher. The school has Pucca boundary wall. The school has have electric connection. The source of Drinking Water in the school is Tap Water and it is functional. The school has 1 boys toilet and it is functional. and 1 girls toilet and it is functional. The school has a playground. The school has a library and has 200 books in its library. The school does not need ramp for disabled children to access classrooms. The school has 4 computers for teaching and learning purposes and all are functional. The school is not having a computer aided learning lab. The school is Not Applicable providing mid-day meal.
                            </p>
                        </Col>
                        <Col md='4' className="h-50 d-none d-md-block column bg-white p-4 shadow rounded" data-aos='fade-left' >
                            <img src={sidePhoto2} alt="student teacher with blackboard" className="img-fluid rounded-3"/>
                        </Col>
                    </Row>
                </Container>
            </div>
            <HappeningNow/>
        </section>
    )
}

export default AboutUs