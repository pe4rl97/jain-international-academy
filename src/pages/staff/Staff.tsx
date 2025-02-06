import { Col, Container, Row } from 'react-bootstrap'
import StaffCard from '../../components/staffcard/StaffCard'
import { StaffDetails } from '../../constants'
import './staff.scss'
import { useEffect } from 'react'

const Staff = () => {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);
    return (
        <div className='staff-wrapper-div'>
            <Container className='staff-wrapper'>
                <Row className='justify-content-center mt-2 g-4'>
                    {StaffDetails.map((staff) => (
                        <Col lg='3' md='6' sm='6' xs='12' key={staff.name} className='mb-3 staff-card-wrapper'>
                            <StaffCard key={staff.name} {...staff}/>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    )
}

export default Staff