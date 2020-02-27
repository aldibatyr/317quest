import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import FormComponent from './Form'



const ContactContainer = () => {
    return (
        <Container style={{ marginTop: '200px' }}>
            <Row>
                <Col xs={12}>
                    <div className="info-text" style={{ textAlign: "center", margin: 'auto', marginBottom: '20px' }}>
                        <h2>Connect with us!</h2>
                        <span style={{ fontSize: '1.2rem' }}>We are cool people to talk to :D</span>
                    </div>
                </Col>
                <Col md={{span: 8, offset: 2}}>
                    <FormComponent />
                </Col>
            </Row>
        </Container>
    )
}

export default ContactContainer
