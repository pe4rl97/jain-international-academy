import { useEffect } from "react"
import { Col, Container, Row } from "react-bootstrap"
import { IoSearch } from "react-icons/io5"
import { biologyPhoto1, biologyPhoto2, biologyPhoto3, biologyPhoto4 } from "../../assets/facilities/biology-lab"
import '../../components/gallery/gallery.scss'
import './facilities.scss'
import { Fancybox } from "@fancyapps/ui"

const BiologyLab = () => {
    useEffect(() => {
        const gallerySelector = '[data-fancybox="gallery"]';
        Fancybox.bind(gallerySelector, {});
        return () => {
            Fancybox.close();
            Fancybox.unbind(gallerySelector);
        }
    }, [])
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);
    return (
        <Container className="facility-paragraph main-content">
            <h1 data-aos='fade-in' data-aos-delay='200'>Biology Lab: A Window to the Natural World</h1>
            <div className="my-4 mb-5">
                <p data-aos='fade-in' data-aos-delay='300'>
                    The Biology Lab offers students a hands-on experience to explore the diversity of life. It serves as a gateway to understanding microorganisms, plant specimens, and animal specimens. As students step into this vibrant learning space, they familiarize themselves with biodiversity, scientific classifications, and the role of each organism in the environment, reinforcing the need for conservation.
                </p>
                <p data-aos='fade-in' data-aos-delay='400'>
                    Our well-equipped and well-lit lab, allowing them to perform various experiments simultaneously. It features preserved specimens, permanent slides, microscopes, chemicals, charts, and essential glassware for experiments and demonstrations. The lab also houses models of the human torso, skeleton, and organs, sparking students' curiosity about the human body. Additionally, students have the freedom to create models and projects using lab facilities, enhancing their practical understanding of biology.                </p>
            </div>
            <Container className="photos">
                <Row className="align-items-center justify-content-center">
                    <Col xs='6' md='6' lg='4' data-aos='fade-up'>
                        <a href={biologyPhoto4} className='d-block photo-item' data-fancybox='gallery'>
                            <img src={biologyPhoto4} alt='Image' className='img-fluid'/>
                            <div className='photo-text-more'>
                                <div className='photo-text-more'>
                                    <h3 className='heading'><IoSearch /></h3>
                                </div>
                            </div>
                        </a>
                    </Col>
                    <Col xs='6' md='6' lg='8' data-aos='fade-up' data-aos-delay='100'>
                        <a href={biologyPhoto3} className='d-block photo-item' data-fancybox='gallery'>
                            <img src={biologyPhoto3} alt='Image' className='img-fluid'/>
                            <div className='photo-text-more'>
                                <div className='photo-text-more'>
                                    <h3 className='heading'><IoSearch /></h3>
                                </div>
                            </div>
                        </a>
                    </Col>
                    <Col xs='6' md='6' lg='6' data-aos='fade-up'>
                        <a href={biologyPhoto1} className='d-block photo-item' data-fancybox='gallery'>
                            <img src={biologyPhoto1} alt='Image' className='img-fluid'/>
                            <div className='photo-text-more'>
                                <div className='photo-text-more'>
                                    <h3 className='heading'><IoSearch /></h3>
                                </div>
                            </div>
                        </a>
                    </Col>
                    <Col xs='6' md='6' lg='6' data-aos='fade-up' data-aos-delay='100'>
                        <a href={biologyPhoto2} className='d-block photo-item' data-fancybox='gallery'>
                            <img src={biologyPhoto2} alt='Image' className='img-fluid'/>
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

export default BiologyLab