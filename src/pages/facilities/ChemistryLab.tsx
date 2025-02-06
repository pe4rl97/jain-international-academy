import { useEffect } from "react"
import { Col, Container, Row } from "react-bootstrap"
import { IoSearch } from "react-icons/io5"
import { chemistryPhoto1, chemistryPhoto2, chemistryPhoto3, chemistryPhoto4, chemistryPhoto5 } from "../../assets/facilities/chemistry-lab"
import '../../components/gallery/gallery.scss'
import './facilities.scss'
import { Fancybox } from "@fancyapps/ui"

const ChemistryLab = () => {
    useEffect(() => {
        Fancybox.bind('[data-fancybox="gallery"]', {});
    }, [])
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);
    return (
        <Container className="facility-paragraph main-content">
            <h1 data-aos='fade-in' data-aos-delay='200'>Chemistry Lab: A Hub for Scientific Exploration</h1>
            <div className="my-4">
                <p data-aos='fade-in' data-aos-delay='300'>
                    Our Chemistry Lab is designed to meet all safety regulations and statutory norms, ensuring a secure and well-ventilated environment for students. The spacious lab is equipped with precise digital measuring instruments essential for handling chemicals accurately. It nurtures a scientific temperament, fostering analytical thinking, problem-solving, and practical application of concepts.                </p>
                <p data-aos='fade-in' data-aos-delay='400'>
                    Learning chemistry in our lab is both engaging and interactive. It provides students with an opportunity to experiment, explore, and develop a responsible approach towards handling equipment and chemicals. Our experienced faculty, along with trained lab assistants, create an environment that makes learning chemistry enjoyable and easy to understand through hands-on experimentation.
                </p>
            </div>
            <h3 className="facility-subheading my-3" data-aos='fade-in'>Instruments in our Chemistry Lab</h3>
            <ol className="my-3">
                <li data-aos='fade-in' data-aos-delay='100' className="mb-1">
                    High-quality and durable glass beakers and flasks
                </li>
                <li data-aos='fade-in' data-aos-delay='200' className="mb-1">
                    Alcohol lamps with sturdy stands
                </li>
                <li data-aos='fade-in' data-aos-delay='300' className="mb-1">
                    Test tables and racks for conducting experiments
                </li>
                <li data-aos='fade-in' data-aos-delay='400' className="mb-1">
                    Precision thermometers and pH papers for accurate readings
                </li>
                <li data-aos='fade-in' data-aos-delay='500' className="mb-1">
                    A well-stocked collection of safely stored chemicals
                </li>
                <li data-aos='fade-in' data-aos-delay='600' className="mb-1">
                    Fire safety equipment for emergencies
                </li>
                <li data-aos='fade-in' data-aos-delay='700' className="mb-1">
                    A fully equipped first aid kit
                </li>
            </ol>
            <p className="mb-4" data-aos='fade-in' data-aos-delay='800'>
            Our Chemistry Lab encourages students to connect theoretical knowledge with practical application, making science a fascinating and enriching experience.
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

export default ChemistryLab