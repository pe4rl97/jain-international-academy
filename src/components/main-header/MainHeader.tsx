import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { TypeAnimation } from "react-type-animation";
import './main-header.scss';

const MainHeader = () => {
    return (
        <Container style={{height: '89vh'}}>
            <Row className='h-100 justify-content-center align-items-center'>
                <Col xs='12'>
                    <Row>
                        <Col xs='12' className='text-center' data-aos='fade-down' data-aos-duration='900'>
                            <TypeAnimation
                                sequence={[
                                    '', 100,
                                    'Jain International', 1000
                                ]}
                                speed={50}
                                repeat={0}
                                className='jumbo-header'
                                cursor={false}
                            />
                        </Col>
                        <Col xs='12' className='text-center' data-aos='fade-in' data-aos-delay='800' data-aos-duration='900'>
                            <TypeAnimation
                                sequence={[
                                    ' ', 1000,
                                    'Public School', 1000
                                ]}
                                speed={50}
                                repeat={0}
                                className='jumbo-header'
                                cursor={false}
                            />
                        </Col>
                    </Row>
                    <Row className='justify-content-center mt-3'>
                        <Col md='5' xs='9'>
                            <p className='paragraph-hero-subtext text-center'>Jain International Public School, Valsad – Inspiring young minds since 2013 with exceptional education in a vibrant, modern, and inclusive environment.</p>
                        </Col>
                    </Row>
                    <Row className='justify-content-center'>
                        <Col md='12' xs='12' className='btn-col text-center'>
                            <Link to='/#contact-us'><button className='get-in-touch-button'>Get In Touch</button></Link>
                        </Col>
                    </Row>
                    
                </Col>
            </Row>
        </Container>
    )
}

export default MainHeader