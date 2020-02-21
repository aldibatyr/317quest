import React from 'react'
import '../styles/hero.scss';
import heroBack from '../images/heroBack.jpg';
import { ParallaxBanner } from 'react-scroll-parallax';
import styled from 'styled-components';

const Section = styled.section`
    height: 100vh;
    background: linear-gradient(#ffffffE6, #ffffffE6), url(${heroBack}) no-repeat center center fixed;
    background-size: cover;
    position: relative;
`

const Foreground = styled.div`
    height: 100%;
    width: 100%;
    background: none;
    display: flex;
    justify-content: center;
    
`
const Title = styled.h1`
    font-size: 110px;
    letter-spacing: -6px;
    margin: 0;
    font-weight: bolder;
    @media (max-width: 768px) {
        font-size: 50px;
        
    }
`



const SubText = styled.span`
    font-size: 1.4rem;
    margin-bottom: 100px;
`

const CTAButton = styled.button`
    
`


const Hero = () => {
    return (
        <Section className='hero-section' id='home'>
            <Foreground>
                <div className="text-wrapper" style={{textAlign: 'center', marginTop: '120px'}}>
                    <Title>317 Quest.</Title>
                    <SubText>Get rewarder for exploring your surroundings.</SubText>
                </div>
            </Foreground>
        </Section>
    )
}

export default Hero
