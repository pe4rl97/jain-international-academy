import { Fancybox } from "@fancyapps/ui"
import { useEffect } from "react"
import { Col, Container, Row } from "react-bootstrap"
import { IoSearch } from "react-icons/io5"
import { musicPhoto1, musicPhoto2 } from "../../assets/facilities/music"
import '../../components/gallery/gallery.scss'
import './facilities.scss'

const MathsLab = () => {
    useEffect(() => {
        Fancybox.bind('[data-fancybox="gallery"]', {});
    }, []);
    useEffect(() => {
        window.scrollTo(0,0);
    }, [])
    return (
        <Container className="facility-paragraph main-content">
            <h1 data-aos='fade-in' data-aos-delay='200'>Music Room: A Harmonious Journey of Creativity and Expression</h1>
            <div className="my-4 mb-5">
                <p data-aos='fade-in' data-aos-delay='400'>
                    Music plays a vital role in a school, providing students with an outlet to explore and nurture their creative abilities. It serves as a powerful form of self-expression, allowing students to communicate emotions and ideas through sound. Music encourages both individual and collective creativity, fostering an environment where students can develop a deeper understanding of rhythm, melody, and harmony. It helps build discipline, focus, and teamwork, particularly through group performances and collaborative projects.
                </p>
                <p data-aos='fade-in'>
                    Beyond technical knowledge, music cultivates emotional intelligence and critical thinking, enriching students' lives and expanding their ability to connect with the world around them in a meaningful way. Through music, students embark on a journey of artistic exploration and personal growth.
                </p>
            </div>
            
            <Container className="photos">
                <Row className="align-items-center justify-content-center">
                    <Col xs='6' data-aos='fade-up'>
                        <a href={musicPhoto1} className='d-block photo-item' data-fancybox='gallery'>
                            <img src={musicPhoto1} alt='Image' className='img-fluid'/>
                            <div className='photo-text-more'>
                                <div className='photo-text-more'>
                                    <h3 className='heading'><IoSearch /></h3>
                                </div>
                            </div>
                        </a>
                    </Col>
                    <Col xs='6' data-aos='fade-up' data-aos-delay='100'>
                        <a href={musicPhoto2} className='d-block photo-item' data-fancybox='gallery'>
                            <img src={musicPhoto2} alt='Image' className='img-fluid'/>
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

export default MathsLab