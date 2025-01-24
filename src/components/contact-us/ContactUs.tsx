import { Col, Container, Row } from "react-bootstrap"
import './contact-us.scss'

const ContactUs = () => {
    return (
        <section id="contact-us" className="contact-us-wrapper">
            <Container className="contact-us-container">
                <h1 className="contact-us-heading" data-aos='fade-in'><span className="bg-white">Get In Touch</span></h1>
                <Row className='justify-content-between mt-5 align-items-center'>
                    <Col md='5' xs='11' data-aos='fade-right' data-aos-delay='100'>
                        <Row>
                            <Col>
                                <div className="mb-4">
                                    <h3>Address</h3>
                                    <div><span className="contact-details-div ">Near Dutt Temple, Dharampur road, Pathri, Chanvai, Valsad-396001, Gujarat</span></div>
                                </div>
                                <div className="mb-4">
                                    <h3>Email</h3>
                                    <div>
                                        <span className="contact-details-div"><a href= "mailto:jipsschoolvalsad@gmail.com">jipsschoolvalsad@gmail.com</a></span>
                                    </div>
                                </div>
                                <div className="mb-4">
                                    <h3>Phone</h3>
                                    <div><span className="contact-details-div">+91 99256 51745</span></div>
                                    <div><span className="contact-details-div">+91 99207 57191</span></div>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <Col md='7' xs='11' data-aos='fade-left' data-aos-delay='300'>
                        <div className="iframe-container">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3735.3823131429494!2d72.97307907509231!3d20.572439080965186!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be0c23387e6abf9%3A0x60fbe9ae2b9b12cb!2sJain%20International%20Public%20School!5e0!3m2!1sen!2sin!4v1737443488102!5m2!1sen!2sin" 
                                width="600" 
                                height="650" 
                                style={{border:0}} 
                                allowFullScreen={false} 
                                loading="lazy"
                                className="contact-us-iframe" 
                                referrerPolicy="no-referrer-when-downgrade">
                            </iframe>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default ContactUs