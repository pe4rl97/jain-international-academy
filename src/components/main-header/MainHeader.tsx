import { Col, Container, Row } from 'react-bootstrap'
import './main-header.scss'

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
                </Col>
            </Row>
        </Container>
    )
}

export default MainHeader