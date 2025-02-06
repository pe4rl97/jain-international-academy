import { useEffect } from "react"
import { Col, Container, Row } from "react-bootstrap"
import { IoSearch } from "react-icons/io5"
import { karatePhoto1, karatePhoto2, karatePhoto3 } from "../../assets/facilities/karate"
import '../../components/gallery/gallery.scss'
import './facilities.scss'
import { Fancybox } from "@fancyapps/ui"

const Karate = () => { 
    useEffect(() => {
        Fancybox.bind('[data-fancybox="gallery"]', {});
    }, [])
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);
    return (
        <Container className="facility-paragraph main-content">
            <h1 data-aos='fade-in' data-aos-delay='200'>Karate: Building Strength and Discipline</h1>
            <div className="my-4 mb-5">
                <p data-aos='fade-in' data-aos-delay='300'>
                    Karate is more than just a martial art; it is a way to instill discipline, confidence, and physical fitness in students. Practicing karate in school helps students develop self-defense skills while enhancing their focus, coordination, and mental resilience. It fosters a sense of respect, perseverance, and responsibility, shaping a strong and confident personality.
                </p>
                <p data-aos='fade-in' data-aos-delay='400'>
                    Our school provides a well-structured karate training program under the guidance of experienced instructors. Training sessions focus on fundamental techniques, strength-building exercises, and self-defense strategies. Students are encouraged to participate in belt examinations and competitions, boosting their motivation and commitment to continuous improvement.
                </p>
                <p data-aos='fade-in'>
                    Karate not only enhances physical fitness but also promotes self-discipline and concentration. It teaches students the values of patience, respect, and perseverance—qualities that benefit them in all aspects of life. Through regular practice, students gain the confidence to face challenges, both in academics and in daily life.
                </p>
            </div>
            
            <Container className="photos">
                <Row className="align-items-center justify-content-center">
                    <Col xs='6' md='6' lg='4' data-aos='fade-up'>
                        <a href={karatePhoto1} className='d-block photo-item' data-fancybox='gallery'>
                            <img src={karatePhoto1} alt='Image' className='img-fluid'/>
                            <div className='photo-text-more'>
                                <div className='photo-text-more'>
                                    <h3 className='heading'><IoSearch /></h3>
                                </div>
                            </div>
                        </a>
                    </Col>
                    <Col xs='6' md='6' lg='4' data-aos='fade-up' data-aos-delay='100'>
                        <a href={karatePhoto2} className='d-block photo-item' data-fancybox='gallery'>
                            <img src={karatePhoto2} alt='Image' className='img-fluid'/>
                            <div className='photo-text-more'>
                                <div className='photo-text-more'>
                                    <h3 className='heading'><IoSearch /></h3>
                                </div>
                            </div>
                        </a>
                    </Col>
                    <Col xs='6' md='6' lg='4' data-aos='fade-up' data-aos-delay='200'>
                        <a href={karatePhoto3} className='d-block photo-item' data-fancybox='gallery'>
                            <img src={karatePhoto3} alt='Image' className='img-fluid'/>
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

export default Karate