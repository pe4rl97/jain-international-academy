import { Fancybox } from "@fancyapps/ui"
import { useEffect } from "react"
import { Col, Container, Row } from "react-bootstrap"
import { IoSearch } from "react-icons/io5"
import { mathsPhoto1, mathsPhoto2, mathsPhoto3 } from "../../assets/facilities/maths-lab"
import '../../components/gallery/gallery.scss'
import './facilities.scss'

const MathsLab = () => {
    useEffect(() => {
        Fancybox.bind('[data-fancybox="gallery"]', {});
    }, []);
    useEffect(() => {
        window.scrollTo(0,0);
    }, [])
    return (
        <Container className="facility-paragraph main-content">
            <h1 data-aos='fade-in' data-aos-delay='200'>Math Lab: A Gateway to Mathematical Exploration</h1>
            <div className="my-4">
                <p data-aos='fade-in' data-aos-delay='400'>
                    A math lab serves as an essential space in schools, offering students the opportunity to explore mathematical concepts beyond textbooks and lectures. It acts as a dynamic environment where theoretical ideas come to life through practical application. 
                </p>
                <p data-aos='fade-in'>
                Equipped with tools such as measuring instruments, geometrical models, and interactive software, the math lab enables students to visualize and manipulate mathematical problems, helping them develop a deeper understanding of the subject. It fosters an engaging, hands-on approach that not only simplifies complex concepts but also cultivates critical thinking and problem-solving skills. The math lab encourages collaborative work, allowing students to experiment and learn together, making math an enjoyable and interactive experience.
                </p>
            </div>
            
            <Container className="photos">
                <Row className="align-items-center justify-content-center">
                    <Col xs='6' md='6' lg='4' data-aos='fade-up'>
                        <a href={mathsPhoto1} className='d-block photo-item' data-fancybox='gallery'>
                            <img src={mathsPhoto1} alt='Image' className='img-fluid'/>
                            <div className='photo-text-more'>
                                <div className='photo-text-more'>
                                    <h3 className='heading'><IoSearch /></h3>
                                </div>
                            </div>
                        </a>
                    </Col>
                    <Col xs='6' md='6' lg='4' data-aos='fade-up' data-aos-delay='100'>
                        <a href={mathsPhoto2} className='d-block photo-item' data-fancybox='gallery'>
                            <img src={mathsPhoto2} alt='Image' className='img-fluid'/>
                            <div className='photo-text-more'>
                                <div className='photo-text-more'>
                                    <h3 className='heading'><IoSearch /></h3>
                                </div>
                            </div>
                        </a>
                    </Col>
                    <Col xs='6' md='6' lg='4' data-aos='fade-up' data-aos-delay='200'>
                        <a href={mathsPhoto3} className='d-block photo-item' data-fancybox='gallery'>
                            <img src={mathsPhoto3} alt='Image' className='img-fluid'/>
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

export default MathsLab