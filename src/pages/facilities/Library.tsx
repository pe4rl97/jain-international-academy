import { useEffect } from "react"
import { Col, Container, Row } from "react-bootstrap"
import { IoSearch } from "react-icons/io5"
import { libraryPhoto1, libraryPhoto2, libraryPhoto3, libraryPhoto4, libraryPhoto5, libraryPhoto6 } from "../../assets/facilities/library"
import '../../components/gallery/gallery.scss'
import './facilities.scss'
import { Fancybox } from "@fancyapps/ui"

const Library = () => {
    useEffect(() => {
        Fancybox.bind('[data-fancybox="gallery"]', {});
    }, [])
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);
    return (
        <Container className="facility-paragraph main-content">
            <h1 data-aos='fade-in' data-aos-delay='200'>Library: A Gateway to Knowledge and Learning</h1>
            <div className="my-4">
                <p data-aos='fade-in' data-aos-delay='300'>
                    A library holds immense significance in a school, serving as a crucial hub for students to explore and expand their knowledge. It is often considered the lifeblood of an institution, offering a vast array of resources essential for academic growth. Whether it's a small storybook, detailed reference material, biographies, magazines, or even specialized books on subjects like cooking or crafts, a library houses them all in well-organized sections, making it easy to find exactly what is needed.
                </p>
                <p data-aos='fade-in' data-aos-delay='400'>
                    Our library provides students with access to essential learning tools, fostering a smooth and effective learning environment. As times evolve, so does the design and technology incorporated into school libraries. These spaces allow students to freely explore a wealth of information while maintaining an atmosphere of silence and focus.
                </p>
            </div>
            <Row className="justify-content-center mb-4">
                <Col xs='12'>
                    <h4 className="facility-subheading text-center" data-aos='fade-in'>“The only thing you absolutely have to know is the location of the library.”</h4>
                </Col>
                <Col md='5' xs='12' data-aos='fade-in'>
                    <p className="text-end" > - Albert Einstein</p>
                </Col>
            </Row>
            
            <Container className="photos">
                <Row className="align-items-center justify-content-center">
                    <Col xs='6' md='6' lg='4' data-aos='fade-up'>
                        <a href={libraryPhoto1} className='d-block photo-item' data-fancybox='gallery'>
                            <img src={libraryPhoto1} alt='Image' className='img-fluid'/>
                            <div className='photo-text-more'>
                                <div className='photo-text-more'>
                                    <h3 className='heading'><IoSearch /></h3>
                                </div>
                            </div>
                        </a>
                    </Col>
                    <Col xs='6' md='6' lg='4' data-aos='fade-up' data-aos-delay='100'>
                        <a href={libraryPhoto2} className='d-block photo-item' data-fancybox='gallery'>
                            <img src={libraryPhoto2} alt='Image' className='img-fluid'/>
                            <div className='photo-text-more'>
                                <div className='photo-text-more'>
                                    <h3 className='heading'><IoSearch /></h3>
                                </div>
                            </div>
                        </a>
                    </Col>
                    <Col xs='6' md='6' lg='4' data-aos='fade-up' data-aos-delay='200'>
                        <a href={libraryPhoto3} className='d-block photo-item' data-fancybox='gallery'>
                            <img src={libraryPhoto3} alt='Image' className='img-fluid'/>
                            <div className='photo-text-more'>
                                <div className='photo-text-more'>
                                    <h3 className='heading'><IoSearch /></h3>
                                </div>
                            </div>
                        </a>
                    </Col>
                    <Col xs='6' md='6' lg='4' data-aos='fade-up'>
                        <a href={libraryPhoto4} className='d-block photo-item' data-fancybox='gallery'>
                            <img src={libraryPhoto4} alt='Image' className='img-fluid'/>
                            <div className='photo-text-more'>
                                <div className='photo-text-more'>
                                    <h3 className='heading'><IoSearch /></h3>
                                </div>
                            </div>
                        </a>
                    </Col>
                    <Col xs='6' md='6' lg='4' data-aos='fade-up' data-aos-delay='100'>
                        <a href={libraryPhoto5} className='d-block photo-item' data-fancybox='gallery'>
                            <img src={libraryPhoto5} alt='Image' className='img-fluid'/>
                            <div className='photo-text-more'>
                                <div className='photo-text-more'>
                                    <h3 className='heading'><IoSearch /></h3>
                                </div>
                            </div>
                        </a>
                    </Col>
                    <Col xs='6' md='6' lg='4' data-aos='fade-up' data-aos-delay='200'>
                        <a href={libraryPhoto6} className='d-block photo-item' data-fancybox='gallery'>
                            <img src={libraryPhoto6} alt='Image' className='img-fluid'/>
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

export default Library