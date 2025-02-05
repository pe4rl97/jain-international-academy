import { Fancybox } from "@fancyapps/ui"
import { useEffect } from "react"
import { Col, Container, Row } from "react-bootstrap"
import { IoSearch } from "react-icons/io5"
import { chemistryPhoto1, chemistryPhoto2, chemistryPhoto3, chemistryPhoto4, chemistryPhoto5 } from "../../assets/facilities/chemistry-lab"
import '../../components/gallery/gallery.scss'
import './facilities.scss'

const PhysicsLab = () => {
    useEffect(() => {
        Fancybox.bind('[data-fancybox="gallery"]', {});
    }, []);
    useEffect(() => {
        window.scrollTo(0,0);
    }, [])
    return (
        <Container className="facility-paragraph main-content">
            <h1 data-aos='fade-in' data-aos-delay='200'>Physics Lab: Bridging Theory and Practical Application</h1>
            <div className="my-4">
                <p data-aos='fade-in' data-aos-delay='300'>
                    A physics lab plays a crucial role in helping students connect theoretical knowledge with real-world applications. It provides clarity on fundamental concepts and allows students to differentiate between theory and practice. Through hands-on experiments, students refine their understanding of physics, enabling them to develop a practical approach to the subject.
                </p>
                <p data-aos='fade-in' data-aos-delay='400'>
                    Our lab focuses not just on obtaining the "correct answer," but on fostering a deeper understanding of the scientific process—learning how to observe, analyze, and interpret results. Emphasizing the importance of experimentation and modern technology, our lab is equipped with advanced tools and computers to enhance the learning experience.
                </p>
            </div>
            <h3 className="facility-subheading my-3" data-aos='fade-in'>Lab Ethics:</h3>
            <ol className="my-3">
                <li data-aos='fade-in' data-aos-delay='100' className="mb-1">
                    Experiments are conducted only under the guidance of a teacher.
                </li>
                <li data-aos='fade-in' data-aos-delay='200' className="mb-1">
                    The lab is equipped with the latest technology.
                </li>
                <li data-aos='fade-in' data-aos-delay='300' className="mb-1">
                    The experiments align closely with the curriculum to reinforce learning objectives.
                </li>
                <li data-aos='fade-in' data-aos-delay='400' className="mb-1">
                    A wide array of equipment is available, ranging from basic tools such as magnets, pulleys, pendulums, and beakers, to more sophisticated instruments like spectrometers, microscopes, and voltmeters.
                </li>
            </ol>
            <p className="mb-4" data-aos='fade-in' data-aos-delay='500'>
                By offering a hands-on approach to learning, our lab helps students gain a deeper, more meaningful understanding of physics.
            </p>
            <Container className="photos">
                <Row className="align-items-center justify-content-center">
                <Col xs='6' md='6' lg='8' data-aos='fade-up'>
                        <a href={chemistryPhoto3} className='d-block photo-item' data-fancybox='gallery'>
                            <img src={chemistryPhoto3} alt='Image' className='img-fluid'/>
                            <div className='photo-text-more'>
                                <div className='photo-text-more'>
                                    <h3 className='heading'><IoSearch /></h3>
                                </div>
                            </div>
                        </a>
                    </Col>
                    <Col xs='6' md='6' lg='4' data-aos='fade-up' data-aos-delay='100'>
                        <a href={chemistryPhoto5} className='d-block photo-item' data-fancybox='gallery'>
                            <img src={chemistryPhoto5} alt='Image' className='img-fluid'/>
                            <div className='photo-text-more'>
                                <div className='photo-text-more'>
                                    <h3 className='heading'><IoSearch /></h3>
                                </div>
                            </div>
                        </a>
                    </Col>
                    <Col xs='6' md='6' lg='4' data-aos='fade-up'>
                        <a href={chemistryPhoto1} className='d-block photo-item' data-fancybox='gallery'>
                            <img src={chemistryPhoto1} alt='Image' className='img-fluid'/>
                            <div className='photo-text-more'>
                                <div className='photo-text-more'>
                                    <h3 className='heading'><IoSearch /></h3>
                                </div>
                            </div>
                        </a>
                    </Col>
                    <Col xs='6' md='6' lg='4' data-aos='fade-up' data-aos-delay='100'>
                        <a href={chemistryPhoto2} className='d-block photo-item' data-fancybox='gallery'>
                            <img src={chemistryPhoto2} alt='Image' className='img-fluid'/>
                            <div className='photo-text-more'>
                                <div className='photo-text-more'>
                                    <h3 className='heading'><IoSearch /></h3>
                                </div>
                            </div>
                        </a>
                    </Col>
                    <Col xs='6' md='6' lg='4' data-aos='fade-up' data-aos-delay='200'>
                        <a href={chemistryPhoto4} className='d-block photo-item' data-fancybox='gallery'>
                            <img src={chemistryPhoto4} alt='Image' className='img-fluid'/>
                            <div className='photo-text-more'>
                                <div className='photo-text-more'>
                                    <h3 className='heading'><IoSearch /></h3>
                                </div>
                            </div>
                        </a>
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}

export default PhysicsLab