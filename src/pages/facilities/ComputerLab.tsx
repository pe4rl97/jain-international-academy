import { useEffect } from "react"
import { Col, Container, Row } from "react-bootstrap"
import { IoSearch } from "react-icons/io5"
import { computerPhoto1, computerPhoto2, computerPhoto3 } from "../../assets/facilities/computer-lab"
import '../../components/gallery/gallery.scss'
import './facilities.scss'
import { Fancybox } from "@fancyapps/ui"

const ComputerLab = () => {
    useEffect(() => {
        Fancybox.bind('[data-fancybox="gallery"]', {});
    }, [])
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);
    return (
        <Container className="facility-paragraph main-content">
            <h1 data-aos='fade-in' data-aos-delay='200'>Computer Lab: Empowering Digital Learning</h1>
            <div className="my-4 mb-5">
                <p data-aos='fade-in' data-aos-delay='300'>
                    In the era of IT and AI, technology has become an integral part of education. Computers play a crucial role in various fields, making digital literacy essential for students. With rapid advancements, integrating technology into learning is no longer optional but a necessity.
                </p>
                <p data-aos='fade-in' data-aos-delay='400'>
                    Our school’s Computer Lab is designed to offer students hands-on experience with the latest technology. It houses advanced computers, all connected through a dedicated LAN network, ensuring seamless accessibility and efficient learning. We take pride in maintaining a 1:1 student-to-computer ratio, allowing personalized interaction with technology.
                </p>
                <p data-aos='fade-in'>
                A well-ventilated and properly maintained lab ensures both the safety of computer hardware and the comfort of students. By providing a structured digital learning environment, our lab fosters computer literacy and prepares students for the ever-evolving technological world.
                </p>
            </div>
            <Container className="photos">
                <Row className="align-items-center justify-content-center">
                <Col xs='6' md='6' lg='4' data-aos='fade-up'>
                        <a href={computerPhoto1} className='d-block photo-item' data-fancybox='gallery'>
                            <img src={computerPhoto1} alt='Image' className='img-fluid'/>
                            <div className='photo-text-more'>
                                <div className='photo-text-more'>
                                    <h3 className='heading'><IoSearch /></h3>
                                </div>
                            </div>
                        </a>
                    </Col>
                    <Col xs='6' md='6' lg='4' data-aos='fade-up' data-aos-delay='100'>
                        <a href={computerPhoto2} className='d-block photo-item' data-fancybox='gallery'>
                            <img src={computerPhoto2} alt='Image' className='img-fluid'/>
                            <div className='photo-text-more'>
                                <div className='photo-text-more'>
                                    <h3 className='heading'><IoSearch /></h3>
                                </div>
                            </div>
                        </a>
                    </Col>
                    <Col xs='6' md='6' lg='4' data-aos='fade-up' data-aos-delay='200'>
                        <a href={computerPhoto3} className='d-block photo-item' data-fancybox='gallery'>
                            <img src={computerPhoto3} alt='Image' className='img-fluid'/>
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

export default ComputerLab