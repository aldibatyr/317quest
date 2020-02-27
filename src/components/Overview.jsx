import React from 'react'
import styled from 'styled-components'
import { Container, Row, Col } from 'react-bootstrap'



const OverviewSection = styled.section `
    padding: 100px 0px;
`

const Overview = () => {
    return (
        <OverviewSection id="overview">
            <Container>
                <Col style={{textAlign: 'center'}}>
                    <h2>See Some Cool Stuff</h2>
                    <span style={{fontSize: '1.2rem'}}>We worked hard for these images, so at least admire these</span>
                </Col>
                <div className="placeholder" style={{height: '50vh'}}>
                    You will see some screenshots here
                </div>
            </Container>
        </OverviewSection>
    )
}

export default Overview
