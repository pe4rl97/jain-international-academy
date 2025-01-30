import { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';
import { MdEmail, MdPhone } from 'react-icons/md';
import { Link } from 'react-scroll';
import logo from '../../assets/logo-transparentbg.png';
import './footer.scss';

const Footer = () => {
    const [showScrollButton, setShowScrollButton] = useState(false);
    const { t } = useTranslation(["common", "footer", "contact-us"]);

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
                            <h2 className='heading-school'>{t("contactDetailsTitle", { ns: "footer" })}</h2>
                            <Row className='align-items-center'>
                                <Col xs='1' className='me-2 mb-3'>
                                    <FaLocationDot className='text-footer contact-details-icon'/>
                                </Col>
                                <Col>
                                    <div className='text-footer mb-2' style={{lineHeight:'1.6'}}>{t("address", { ns: "contact-us"})}</div>
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
                                    <div className='text-footer'>
                                        +91 99256 51745
                                    </div>
                                    <div className='text-footer'>
                                        +91 99207 57191
                                    </div>
                                </Col>
                            </Row>
                            <div>
                                
                            </div>
                        </Col>
                        <Col md='3' xs='11' className='text-start mb-4'>
                            <h2 className='heading-school'>{t("ourSchoolTitle", { ns: "footer"})}</h2>
                            <div>
                                <Link to='/' onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className='text-footer menu-links'>{'>'} {t("homeTitle")}</Link>
                            </div>
                            <div>
                                <Link to='about-us' smooth={true} duration={500} className='text-footer menu-links'>{'>'} {t("aboutUsTitle")}</Link>
                            </div>
                            <div>
                                <Link to='certificates' smooth={true} duration={500} offset={-40} className='text-footer menu-links'> {'>'} {t("certificatesTitle")}</Link>
                            </div>
                            <div>
                                <Link to='gallery-images' smooth={true} duration={500} className='text-footer menu-links'> {'>'} {t("galleryTitle")}</Link>
                            </div>
                            <div>
                                <Link to='contact-us' smooth={true} duration={500} className='text-footer menu-links'> {'>'} {t("contactUsTitle")}</Link>
                            </div>
                        </Col>
                    </Row>
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