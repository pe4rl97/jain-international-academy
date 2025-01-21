import './gallery.scss'
import photo1 from '../../assets/gallery-photos/mainSchool.jpeg'
import photo2 from '../../assets/gallery-photos/WhatsApp Image 2024-06-05 at 2.49.08 PM.jpeg'
import photo3 from '../../assets/gallery-photos/WhatsApp Image 2024-06-05 at 2.49.09 PM (1).jpeg'
import photo4 from '../../assets/gallery-photos/WhatsApp Image 2024-06-05 at 2.49.09 PM (2).jpeg'
import photo5 from '../../assets/gallery-photos/WhatsApp Image 2024-06-05 at 2.49.09 PM.jpeg'
import photo6 from '../../assets/gallery-photos/WhatsApp Image 2024-06-05 at 2.49.10 PM.jpeg'
import photo7 from '../../assets/gallery-photos/WhatsApp Image 2024-06-05 at 3.09.34 PM.jpeg'
import { Col, Container, Row } from 'react-bootstrap'
import { IoSearch } from 'react-icons/io5'
import { Fancybox } from '@fancyapps/ui';
import AOS from 'aos';
import { useEffect } from 'react'

const Gallery = () => {
    useEffect(() => {
        Fancybox.bind('[data-fancybox="gallery"]', {});
    }, []);

    useEffect(() => {
        AOS.init({
            duration: 500, // Animation duration (in ms)
            easing: 'ease-in-out', // Animation easing
            once: true,
            mirror: true, // Whether elements should animate out while scrolling past them
        });
    }, []);
    return (
        <section id='gallery-images' className='main-content'>
            <Container>
                <h1 className='text-center gallery-title '>Gallery</h1>
                <Container className='photos'>
                    <Row className='align-items-stretch'>
                        <Col xs='6' md='6' lg='8' data-aos='fade-up' >
                            <a href={photo1} className='d-block photo-item' data-fancybox='gallery'>
                                <img src={photo1} alt='Image' className='img-fluid'/>
                                <div className='photo-text-more'>
                                    <div className='photo-text-more'>
                                        <h3 className='heading'><IoSearch /></h3>   
                                        {/* <span className='meta'><IoSearch /> </span> */}
                                    </div>
                                    
                                </div>
                            </a>
                        </Col>
                        <Col xs='6' md='6' lg='4' data-aos='fade-up' data-aos-delay='100'>
                            <a href={photo2} className='d-block photo-item' data-fancybox='gallery'>
                                <img src={photo2} alt='Image' className='img-fluid'/>
                                <div className='photo-text-more'>
                                    <div className='photo-text-more'>
                                        <h3 className='heading'><IoSearch /></h3>   
                                        {/* <span className='meta'><IoSearch /> </span> */}
                                    </div>
                                    
                                </div>
                            </a>
                        </Col>
                        <Col xs='6' md='6' lg='4' data-aos='fade-up' >
                            <a href={photo3} className='d-block photo-item' data-fancybox='gallery'>
                                <img src={photo3} alt='Image' className='img-fluid'/>
                                <div className='photo-text-more'>
                                    <div className='photo-text-more'>
                                        <h3 className='heading'><IoSearch /></h3>   
                                        {/* <span className='meta'><IoSearch /> </span> */}
                                    </div>
                                    
                                </div>
                            </a>
                        </Col>
                        <Col xs='6' md='6' lg='4' data-aos='fade-up' data-aos-delay='100'>
                            <a href={photo4} className='d-block photo-item' data-fancybox='gallery'>
                                <img src={photo4} alt='Image' className='img-fluid'/>
                                <div className='photo-text-more'>
                                    <div className='photo-text-more'>
                                        <h3 className='heading'><IoSearch /></h3>   
                                        {/* <span className='meta'><IoSearch /> </span> */}
                                    </div>
                                    
                                </div>
                            </a>
                        </Col>
                        <Col xs='6' md='6' lg='4' data-aos='fade-up' data-aos-delay='200'>
                            <a href={photo5} className='d-block photo-item' data-fancybox='gallery'>
                                <img src={photo5} alt='Image' className='img-fluid'/>
                                <div className='photo-text-more'>
                                    <div className='photo-text-more'>
                                        <h3 className='heading'><IoSearch /></h3>   
                                        {/* <span className='meta'><IoSearch /> </span> */}
                                    </div>
                                    
                                </div>
                            </a>
                        </Col>
                        <Col xs='6' md='6' lg='4' data-aos='fade-up' >
                            <a href={photo6} className='d-block photo-item' data-fancybox='gallery'>
                                <img src={photo6} alt='Image' className='img-fluid'/>
                                <div className='photo-text-more'>
                                    <div className='photo-text-more'>
                                        <h3 className='heading'><IoSearch /></h3>   
                                        {/* <span className='meta'><IoSearch /> </span> */}
                                    </div>
                                    
                                </div>
                            </a>
                        </Col>
                        <Col xs='6' md='6' lg='8' data-aos='fade-up' data-aos-delay='100'>
                            <a href={photo7} className='d-block photo-item' data-fancybox='gallery'>
                                <img src={photo7} alt='Image' className='img-fluid'/>
                                <div className='photo-text-more'>
                                    <div className='photo-text-more'>
                                        <h3 className='heading'><IoSearch /></h3>   
                                        {/* <span className='meta'><IoSearch /> </span> */}
                                    </div>
                                    
                                </div>
                            </a>
                        </Col>
                    </Row>
                </Container>
                <Container className='video-container'>
                    <h2 className="text-center my-4 gallery-title">School Video</h2>
                    <Row className="justify-content-center">
                        <Col md={8}>
                        <video controls className="w-100">
                            <source src="https://jaininternationalacademy.com/assets/JIPS.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                        </Col>
                    </Row>
                </Container>
            </Container>

        </section>
    )
}

export default Gallery