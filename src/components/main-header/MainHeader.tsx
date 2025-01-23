import { Col, Container, Row } from 'react-bootstrap'
import './main-header.scss'
import { Link } from 'react-scroll'

const MainHeader = () => {
    return (
        <Container style={{height: '89vh'}}>
            <Row className='h-100 justify-content-center align-items-center'>
                <Col xs='12'>
                    <Row>
                        <Col xs='11'>
                            <h1 className='text-center jumbo-header'>JAIN&nbsp;&nbsp;INTERNATIONAL</h1>
                        </Col>

                    </Row>
                    <Row className='justify-content-end'>
                        <Col xs='9'>
                            <h1 className='text-end jumbo-header'>PUBLIC&nbsp;&nbsp;SCHOOL</h1>
                        </Col>
                    </Row>
                    <Row className='justify-content-center mt-3'>
                        <Col md='6' xs='10'>
                            <p className='paragraph-hero-subtext'>Jain International Public School, Valsad – Inspiring young minds since 2013 with exceptional education in a vibrant, modern, and inclusive environment.</p>
                            <Row className='justify-content-end mt-3'>
                                <Col md='6' xs='10' className='btn-col'>
                                    <Link to='contact-us' smooth={true} duration={500}><button className='get-in-touch-button'>Get In Touch</button></Link>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    
                </Col>
            </Row>
        </Container>
    )
}

export default MainHeader