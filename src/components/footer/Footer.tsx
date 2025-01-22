import { Col, Container, Row } from 'react-bootstrap';
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';
import logo from '../../assets/logo-transparentbg.png';
import './footer.scss';
import { Link } from 'react-scroll'

const Footer = () => {
    
    return (
        <>
            <footer className="footer pb-2">
                <div className='ctu-container'>
                    <Container>
                        <h1 className='ctu-container-text p-5' data-aos='fade-up' data-aos-delay='100'>We’re here to help you shape the future.</h1>
                    </Container>
                </div>
                <Container className='footer-container'>
                    <Row className='justify-content-between align-content-center'>
                        <Col md='5' xs='11' className='mb-4'>
                            <Row className='justify-content-around g-0'>
                                <Col md='2' xs='4' className='ms-3'>
                                    <a href='#'>
                                        <img src={logo} alt='logo' className='img-fluid'/>
                                    </a>
                                </Col>
                                <Col xs='8'>
                                    <h2 className='text-white footer-logo-heading '>Jain International Public School</h2>
                                    <Row className='text-white justify-content-center mt-3 d-md-none d-flex '>
                                        <Col xs='1' className='text-start me-3'>
                                            <span>
                                                <a href="https://www.facebook.com/profile.php?id=61550552925561" target='_blank' className='text-white'>
                                                    <FaFacebook className='social-media-logo'/>
                                                </a>
                                            </span>
                                        </Col>
                                        <Col xs='1' className='text-start me-3'>
                                            <span>
                                                <a href="https://www.instagram.com/jips.123schoolvalsad/" target='_blank' className='text-white '>
                                                    <FaInstagram className='social-media-logo'/>
                                                </a>
                                            </span>
                                        </Col>
                                        <Col xs='1' className='text-start'>
                                            <span>
                                                <a href="https://www.youtube.com/@JIPSSCHOOL" target='_blank' className='text-white'>
                                                    <FaYoutube className='social-media-logo'/>
                                                </a>
                                            </span>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                            <Row className='text-white justify-content-start mt-2 d-md-flex d-none'>
                                <Col xs='1' className='text-start me-3'>
                                    <span>
                                        <a href="https://www.facebook.com/profile.php?id=61550552925561" target='_blank' className='text-white'>
                                            <FaFacebook className='social-media-logo'/>
                                        </a>
                                    </span>
                                </Col>
                                <Col xs='1' className='text-start me-3'>
                                    <span>
                                        <a href="https://www.instagram.com/jips.123schoolvalsad/" target='_blank' className='text-white '>
                                            <FaInstagram className='social-media-logo'/>
                                        </a>
                                    </span>
                                </Col>
                                <Col xs='1' className='text-start'>
                                    <span>
                                        <a href="https://www.youtube.com/@JIPSSCHOOL" target='_blank' className='text-white'>
                                            <FaYoutube className='social-media-logo'/>
                                        </a>
                                    </span>
                                </Col>
                            </Row>

                        </Col>
                        <Col md='3' xs='11' className='text-start mb-4'>
                            <h2 className='heading-school'>Our School</h2>
                            <div>
                                <Link to='/' onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className='text-white menu-links'>Home</Link>
                            </div>
                            <div>
                                <Link to='about-us' smooth={true} duration={500} className='text-white menu-links'>About us</Link>
                            </div>
                            <div>
                                <Link to='certificates' smooth={true} duration={500} offset={-40} className='text-white menu-links'>Certificates</Link>
                            </div>
                            <div>
                                <Link to='gallery-images' smooth={true} duration={500} className='text-white menu-links'>Gallery</Link>
                            </div>
                            <div>
                                <Link to='contact-us' smooth={true} duration={500} className='text-white menu-links'>Contact Us</Link>
                            </div>
                        </Col>
                        <Col md='3' xs='11' className='text-start mb-4 contact-details-col'>
                            <h2 className='heading-school'>Contact Details</h2>
                            <div>
                                <div className='text-white mb-2' style={{lineHeight:'1.6'}}>Near Dutt Temple, Dharampur road, Pathri, Chanvai, Valsad-396001, Gujarat</div>
                                <a href= "mailto:jipsschoolvalsad@gmail.com" className='text-white'>jipsschoolvalsad@gmail.com</a>
                                <div className='text-white mt-3'>
                                    99256 51745
                                </div>
                                <div className='text-white'>
                                    99207 57191
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </footer>
        </>
    )
}

export default Footer