import React from 'react'
import { Row } from 'react-bootstrap';
import styled from 'styled-components';
import { useInView } from 'react-intersection-observer'
import gsap from 'gsap'

const StepBox = styled.div`
    width: 33%;
    padding: 5%;
    text-align: center;
    opacity: 0;
    @media (max-width: 425px) {
        width: 100%;
    }

`

const StaggeringSteps = () => {


    const [element, inView] = useInView({
        /* Optional options */
        threshold: 1,
        triggerOnce: true
    })

    if (inView) {
        console.log('stagger')
        gsap.to('.stagger-fade', 1, {
            opacity: 1,
            y: -60,
            ease: "power4.out",
            stagger: {
                amount: 0.3
            }
        });
    }
    return (
        <Row ref={element} style={{ marginTop: '100px' }}>
            <StepBox className='stagger-fade'>
                <h4>Travel</h4>
                <p style={{ textAlign: 'left' }}>Our team is working hard to create interesting and engaging quizes for you. Travel to the pinpoints where you`ll find quizes.</p>
            </StepBox>
            <StepBox className='stagger-fade'>
                <h4>Answer</h4>
                <p style={{ textAlign: 'left' }}>Our quizes are related to the locations. So make sure to know your surroundings and be ready for engaging experience.</p>
            </StepBox>
            <StepBox className='stagger-fade'>
                <h4>Get Points</h4>
                <p style={{ textAlign: 'left' }}>Get Rewarded for right answers! Points can be exchanged for tangible and intangible goods! Our sponsors are generous so expect only the best!</p>
            </StepBox>
        </Row>
    )
}

export default StaggeringSteps
