import { Card, Col, Row } from "react-bootstrap"
import './staff-card.scss'
import { StaffMember } from "../../constants"

const StaffCard = ({ imageUrl, name, designation, qualification, experience}: StaffMember) => {
    return (
        <Card className="staff-card h-100 shadow border-0 pb-4">
            <div className="staff-card__img mb-3 rounded-top">
                <img src={imageUrl} alt={name} className='img-fluid rounded shadow-lg'></img>
            </div>
            <Card.Body style={{paddingTop: 0}}>
                <div className="staff-card__wrapper ps-3">
                    <Row className="justify-content-center align-items-center">
                        <Col xs='12' className='mb-3'>
                            <div className="staff-card__title text-center">{name}</div>
                        </Col>
                        <Col xs='12'>
                            <div className="staff-card__subtitle">Designation: <span className="fw-bold">{designation}</span></div>
                        </Col>
                        <Col xs='12'>
                            <div className="staff-card__subtitle ">Qualification: {qualification}</div>
                        </Col>
                        <Col xs='12'>
                            <div className="staff-card__subtitle">Experience: {experience}</div>
                        </Col>

                    </Row>
                </div>

            </Card.Body>
        </Card>
    )
}

export default StaffCard