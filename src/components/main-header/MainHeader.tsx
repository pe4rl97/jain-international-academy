import { Col, Container, Row } from 'react-bootstrap'
import './main-header.scss'
import { Link } from 'react-scroll'
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { useTranslation } from 'react-i18next';

const MainHeader = () => {
    const { t } = useTranslation("main-header");
    return (
        <Container style={{height: '89vh'}}>
            <Row className='h-100 justify-content-center align-items-center'>
                <Col xs='12'>
                    <Row>
                        <Col xs='12'>
                            <motion.h1 
                                initial={{ opacity: 0, y: -50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1 }}
                                className='text-center'
                            >
                                <TypeAnimation
                                    sequence={[
                                        'Jain International', 1000
                                    ]}
                                    speed={50}
                                    repeat={0}
                                    className='jumbo-header'
                                    cursor={false}
                                />
                            </motion.h1>
                        </Col>
                        <Col xs='12'>
                            <motion.h1 
                                initial={{ opacity: 0, y: -50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1 }}
                                className='text-center'
                            >
                                <TypeAnimation
                                    sequence={[
                                        '', 1000,
                                        'Public School', 1000
                                    ]}
                                    speed={50}
                                    repeat={0}
                                    className='jumbo-header'
                                    cursor={false}
                                />
                            </motion.h1>
                        </Col>
                    </Row>
                    <Row className='justify-content-center mt-3'>
                        <Col md='5' xs='9'>
                            <p className='paragraph-hero-subtext text-center'>{t("heroSubtext")}</p>
                        </Col>
                    </Row>
                    <Row className='justify-content-center'>
                        <Col md='12' xs='12' className='btn-col text-center'>
                            <Link to='contact-us' smooth={true} duration={500}><button className='get-in-touch-button'>{t("getInTouchBtn")}</button></Link>
                        </Col>
                    </Row>
                    
                </Col>
            </Row>
        </Container>
    )
}

export default MainHeader