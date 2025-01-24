import { Card, Col, Row } from 'react-bootstrap'
import './happening-now-cards.scss'

interface PropsType {
    id: number,
    heading: string,
    image_url: string,
    text: string
}

const HappeningNowCards = ({ id, heading, image_url, text}: PropsType) => {
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

        // <Card className='border-0 p-3 custom-card mt-4 h-100'>
        //     <Card.Header className='bg-transparent border-bottom-0 mt-3'>
        //         <Card.Subtitle><span className='card-id rounded-1 fw-bold'>0{id}</span></Card.Subtitle>
        //         <Card.Title className='card-title-custom mt-3'>
        //             {heading}
        //             <img src="https://cdn.prod.website-files.com/614823b99e5f8423cb74e3a4/6148806a88c9bce8d1437e21_arrow_icon.svg" 
        //             loading="lazy" 
        //             width="30" alt="" 
        //             className="image-arrow-icon ms-4"/>
        //         </Card.Title>
        //     </Card.Header>
        //     <Card.Body className='py-0'>
        //         <Card.Img src={image_url} alt={text}/>
        //         <p className='my-3'>{text}</p>
        //     </Card.Body>
        // </Card>
    )   
}

export default HappeningNowCards