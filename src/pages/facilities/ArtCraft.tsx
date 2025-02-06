import { useEffect } from "react"
import { Col, Container, Row } from "react-bootstrap"
import { IoSearch } from "react-icons/io5"
import { artPhoto1, artPhoto10, artPhoto11, artPhoto12, artPhoto13, artPhoto2, artPhoto3, artPhoto4, artPhoto5, artPhoto6, artPhoto7, artPhoto8, artPhoto9 } from "../../assets/facilities/art-craft"
import '../../components/gallery/gallery.scss'
import './facilities.scss'

const ArtCraft = () => {
    useEffect(() => {
        window.scrollTo(0,0);
    }, [])
    return (
        <Container className="facility-paragraph main-content">
            <h1 data-aos='fade-in' data-aos-delay='200'>Art & Craft: A Space for Creativity</h1>
            <div className="my-4">
                <p data-aos='fade-in' data-aos-delay='300'>
                    Art & Craft provides learners with a platform to express creativity and develop imagination. It fosters innovation, positive thinking, and appreciation for cultural heritage. Our Art & Craft section offers activities like painting, sketching, origami, clay modeling, fabric painting, and decorative arts, guided by experienced mentors.
                </p>
                <p data-aos='fade-in' data-aos-delay='400'>
                    Art education enhances aesthetic sensibility and cultural appreciation while promoting sustainability through eco-friendly projects. Engaging in Art & Craft makes learning interactive and enjoyable, building confidence and fostering self-expression.
                </p>
            </div>
            <h3 className="facility-subheading my-3" data-aos='fade-in'>Importance of Art & Craft in Student Life</h3>
            <ol className="my-3">
                <li data-aos='fade-in' data-aos-delay='100' className="mb-1">
                    <strong>Enhances Motor Skills: </strong>Develops fine motor skills and hand-eye coordination, crucial for writing.
                </li>
                <li data-aos='fade-in' data-aos-delay='200' className="mb-1">
                    <strong>Encourages Problem-Solving: </strong>Strengthens decision-making through creative choices.
                </li>
                <li data-aos='fade-in' data-aos-delay='300' className="mb-1">
                    <strong>Fosters Emotional Expression: </strong>Provides a creative outlet for thoughts and feelings.
                </li>
                <li data-aos='fade-in' data-aos-delay='400' className="mb-1">
                    <strong>Develops Focus and Patience: </strong>Teaches perseverance and attention to detail.
                </li>
            </ol>
            <p className="mb-4" data-aos='fade-in' data-aos-delay='500'>
                Art & Craft is more than a subject; it nurtures creativity, self-expression, and cultural awareness, helping students grow holistically while making meaningful contributions to society.
            </p>
            <Container className="photos">
                <Row className="align-items-center justify-content-center">
                    <Col xs='6' md='6' lg='4' data-aos='fade-up'>
                        <a href={artPhoto1} className='d-block photo-item' data-fancybox='gallery'>
                            <img src={artPhoto1} alt='Image' className='img-fluid'/>
                            <div className='photo-text-more'>
                                <div className='photo-text-more'>
                                    <h3 className='heading'><IoSearch /></h3>
                                </div>
                            </div>
                        </a>
                    </Col>
                    <Col xs='6' md='6' lg='4' data-aos='fade-up' data-aos-delay='100'>
                        <a href={artPhoto2} className='d-block photo-item' data-fancybox='gallery'>
                            <img src={artPhoto2} alt='Image' className='img-fluid'/>
                            <div className='photo-text-more'>
                                <div className='photo-text-more'>
                                    <h3 className='heading'><IoSearch /></h3>
                                </div>
                            </div>
                        </a>
                    </Col>
                    <Col xs='6' md='6' lg='4' data-aos='fade-up' data-aos-delay='200'>
                        <a href={artPhoto3} className='d-block photo-item' data-fancybox='gallery'>
                            <img src={artPhoto3} alt='Image' className='img-fluid'/>
                            <div className='photo-text-more'>
                                <div className='photo-text-more'>
                                    <h3 className='heading'><IoSearch /></h3>
                                </div>
                            </div>
                        </a>
                    </Col>
                    <Col xs='6' md='6' lg='8' data-aos='fade-up'>
                        <a href={artPhoto4} className='d-block photo-item' data-fancybox='gallery'>
                            <img src={artPhoto4} alt='Image' className='img-fluid'/>
                            <div className='photo-text-more'>
                                <div className='photo-text-more'>
                                    <h3 className='heading'><IoSearch /></h3>
                                </div>
                            </div>
                        </a>
                    </Col>
                    <Col xs='6' md='6' lg='4' data-aos='fade-up' data-aos-delay='100'>
                        <a href={artPhoto5} className='d-block photo-item' data-fancybox='gallery'>
                            <img src={artPhoto5} alt='Image' className='img-fluid'/>
                            <div className='photo-text-more'>
                                <div className='photo-text-more'>
                                    <h3 className='heading'><IoSearch /></h3>
                                </div>
                            </div>
                        </a>
                    </Col>
                    <Col xs='6' md='6' lg='4' data-aos='fade-up'>
                        <a href={artPhoto13} className='d-block photo-item' data-fancybox='gallery'>
                            <img src={artPhoto13} alt='Image' className='img-fluid'/>
                            <div className='photo-text-more'>
                                <div className='photo-text-more'>
                                    <h3 className='heading'><IoSearch /></h3>
                                </div>
                            </div>
                        </a>
                    </Col>
                    <Col xs='6' md='6' lg='4' data-aos='fade-up' data-aos-delay='100'>
                        <a href={artPhoto7} className='d-block photo-item' data-fancybox='gallery'>
                            <img src={artPhoto7} alt='Image' className='img-fluid'/>
                            <div className='photo-text-more'>
                                <div className='photo-text-more'>
                                    <h3 className='heading'><IoSearch /></h3>
                                </div>
                            </div>
                        </a>
                    </Col>
                    <Col xs='6' md='6' lg='4' data-aos='fade-up' data-aos-delay='200'>
                        <a href={artPhoto8} className='d-block photo-item' data-fancybox='gallery'>
                            <img src={artPhoto8} alt='Image' className='img-fluid'/>
                            <div className='photo-text-more'>
                                <div className='photo-text-more'>
                                    <h3 className='heading'><IoSearch /></h3>
                                </div>
                            </div>
                        </a>
                    </Col>
                    <Col xs='6' md='6' lg='4' data-aos='fade-up'>
                        <a href={artPhoto9} className='d-block photo-item' data-fancybox='gallery'>
                            <img src={artPhoto9} alt='Image' className='img-fluid'/>
                            <div className='photo-text-more'>
                                <div className='photo-text-more'>
                                    <h3 className='heading'><IoSearch /></h3>
                                </div>
                            </div>
                        </a>
                    </Col>
                    <Col xs='6' md='6' lg='8' data-aos='fade-up' data-aos-delay='100'>
                        <a href={artPhoto6} className='d-block photo-item' data-fancybox='gallery'>
                            <img src={artPhoto6} alt='Image' className='img-fluid'/>
                            <div className='photo-text-more'>
                                <div className='photo-text-more'>
                                    <h3 className='heading'><IoSearch /></h3>
                                </div>
                            </div>
                        </a>
                    </Col>
                    <Col xs='6' md='6' lg='4' data-aos='fade-up'>
                        <a href={artPhoto10} className='d-block photo-item' data-fancybox='gallery'>
                            <img src={artPhoto10} alt='Image' className='img-fluid'/>
                            <div className='photo-text-more'>
                                <div className='photo-text-more'>
                                    <h3 className='heading'><IoSearch /></h3>
                                </div>
                            </div>
                        </a>
                    </Col>
                    <Col xs='6' md='6' lg='4' data-aos='fade-up' data-aos-delay='100'>
                        <a href={artPhoto11} className='d-block photo-item' data-fancybox='gallery'>
                            <img src={artPhoto11} alt='Image' className='img-fluid'/>
                            <div className='photo-text-more'>
                                <div className='photo-text-more'>
                                    <h3 className='heading'><IoSearch /></h3>
                                </div>
                            </div>
                        </a>
                    </Col>
                    <Col xs='6' md='6' lg='4' data-aos='fade-up' data-aos-delay='100'>
                        <a href={artPhoto12} className='d-block photo-item' data-fancybox='gallery'>
                            <img src={artPhoto12} alt='Image' className='img-fluid'/>
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

export default ArtCraft