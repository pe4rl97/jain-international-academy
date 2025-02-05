import { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';
import { MdEmail, MdPhone } from 'react-icons/md';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo-transparentbg.png';
import './footer.scss';

const Footer = () => {
    const [showScrollButton, setShowScrollButton] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrolled = window.scrollY > window.innerHeight * 0.25;
            setShowScrollButton(scrolled);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <>
            <footer className="footer pb-2">
                <Container className='footer-container'>
                    <Row className='justify-content-between align-content-center g-5'>
                        {/* main cols */}
                        <Col md='5' xs='11' className='mb-4'>
                            <Row className='justify-content-center g-0'>
                                <Col md='8' xs='8' className='ms-3'>
                                    <Row className='justify-content-center'>
                                        <Col xs='3'>
                                            <img src={logo} alt='logo' className='img-fluid'/>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col className='text-center'>
                                            <h2 className='text-footer footer-logo-heading '>Jain International Public School</h2>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col xs='8'>
                                    <Row className='text-footer justify-content-around mt-3 d-md-none d-flex '>
                                        <Col xs='2' className='text-center me-3'>
                                            <span>
                                                <a href="https://www.facebook.com/profile.php?id=61550552925561" target='_blank' className='text-footer'>
                                                    <FaFacebook className='social-media-logo'/>
                                                </a>
                                            </span>
                                        </Col>
                                        <Col xs='2' className='text-center me-3'>
                                            <span>
                                                <a href="https://www.instagram.com/jips.123schoolvalsad/" target='_blank' className='text-footer '>
                                                    <FaInstagram className='social-media-logo'/>
                                                </a>
                                            </span>
                                        </Col>
                                        <Col xs='2' className='text-center'>
                                            <span>
                                                <a href="https://www.youtube.com/@JIPSSCHOOL" target='_blank' className='text-footer'>
                                                    <FaYoutube className='social-media-logo'/>
                                                </a>
                                            </span>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                            <Row className='text-footer justify-content-center mt-2 d-md-flex d-none'>
                                <Col xs='1' className='text-start me-3'>
                                    <span>
                                        <a href="https://www.facebook.com/profile.php?id=61550552925561" target='_blank' className='text-footer'>
                                            <FaFacebook className='social-media-logo'/>
                                        </a>
                                    </span>
                                </Col>
                                <Col xs='1' className='text-start me-3'>
                                    <span>
                                        <a href="https://www.instagram.com/jips.123schoolvalsad/" target='_blank' className='text-footer '>
                                            <FaInstagram className='social-media-logo'/>
                                        </a>
                                    </span>
                                </Col>
                                <Col xs='1' className='text-start'>
                                    <span>
                                        <a href="https://www.youtube.com/@JIPSSCHOOL" target='_blank' className='text-footer'>
                                            <FaYoutube className='social-media-logo'/>
                                        </a>
                                    </span>
                                </Col>
                            </Row>

                        </Col>
                        <Col lg='3' md='4' xs='11' className='text-start mb-4 contact-details-col'>
                            <h2 className='heading-school'>Contact Details</h2>
                            <Row className='align-items-center'>
                                <Col xs='1' className='me-2 mb-3'>
                                    <FaLocationDot className='text-footer contact-details-icon'/>
                                </Col>
                                <Col>
                                    <div className='text-footer mb-2' style={{lineHeight:'1.6'}}>Near Dutt Temple, Dharampur road, Pathri, Chanvai, Valsad-396001, Gujarat</div>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs='1' className='me-2'>
                                    <MdEmail className='text-footer contact-details-icon' />
                                </Col>
                                <Col xs='10'>
                                    <a href= "mailto:jipsschoolvalsad@gmail.com" className='text-footer'>jipsschoolvalsad@gmail.com</a>
                                </Col>
                            </Row>
                            <Row className='align-items-center mt-2'>
                                <Col xs='1' className='me-2'>
                                    <MdPhone className='text-footer contact-details-icon' />
                                </Col>
                                <Col>
                                    <a href="tel:+919925651745" className='text-footer text-decoration-none'>
                                        +91 99256 51745
                                    </a>
                                    <div>
                                        <a href="tel:+919920757191" className='text-footer text-decoration-none'>
                                            +91 99207 57191
                                        </a>
                                    </div>
                                </Col>
                            </Row>
                            <div>
                                
                            </div>
                        </Col>
                        <Col md='3' xs='11' className='text-start mb-4'>
                            <h2 className='heading-school'>Our School</h2>
                            <div>
                                <Link to='/' onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className='text-footer menu-links'>{'>'} Home</Link>
                            </div>
                            <div>
                                <Link to='/#about-us' className='text-footer menu-links'>{'>'} About us</Link>
                            </div>
                            <div>
                                <Link to='/staff' className='text-footer menu-links'> {'>'} Staff</Link>
                            </div>
                            <div>
                                <Link to='/#certificates' className='text-footer menu-links'> {'>'} Certificates</Link>
                            </div>
                            <div>
                                <Link to='/#gallery-images' className='text-footer menu-links'> {'>'} Gallery</Link>
                            </div>
                            <div>
                                <Link to='/#contact-us' className='text-footer menu-links'> {'>'} Contact Us</Link>
                            </div>
                        </Col>
                    </Row>
                    <hr className='text-white'/>
                    <p className='text-footer'>Designed & Maintained by 
                        <a href="https://www.tag97.com/" target='_blank' className='text-decoration-none'>
                            <span className='fw-bold tag-97-orange'>{' <TAG'}</span><span className='fw-bold tag-97-blue'>{' 97>'}</span>
                        </a>
                    </p>
                </Container>
            </footer>

            {showScrollButton && (
                <button
                    onClick={() =>
                        window.scrollTo({ top: 0, behavior: 'smooth' })
                    }
                    className="scroll-to-top-btn back-to-top"
                >
                    <svg viewBox="0 0 384 512" className="svgIcon">
                        <path
                            d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"
                        ></path>
                    </svg>
                </button>
            )}
        </>
    )
}

export default Footer