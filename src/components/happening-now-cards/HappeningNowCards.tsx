import { Card, Col, Row } from 'react-bootstrap'
import './happening-now-cards.scss'

interface PropsType {
    heading: string,
    image_url: string,
    text: string
}

const HappeningNowCards = ({ heading, image_url, text}: PropsType) => {
    return (
        <Card className="happening-now-card h-100 shadow border-0">
            <div className="happening-now-card__img mb-3">
                <img src={image_url} alt={text} className='img-fluid rounded shadow-lg'></img>
            </div>
            <div className="happening-now-card__wrapper">
                <Row>
                    <Col xs='12' className='mb-1'>
                        <div className="happening-now-card__title">{heading}</div>
                    </Col>
                    <Col xs='12'>
                        <div className="happening-now-card__subtitle">{text}</div>
                    </Col>
                </Row>
                <div className="happening-now-card__icon"></div>
            </div>
        </Card>
    )   
}

export default HappeningNowCards