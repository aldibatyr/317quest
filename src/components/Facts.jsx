import React from 'react'
import { Parallax } from 'react-scroll-parallax';
import background from '../images/factsBackground.jpg';
import styled from 'styled-components';
import { Container, Row } from 'react-bootstrap';
import gamepad from '../images/gamepad.svg';
import prize from '../images/prize.svg';
import heart from '../images/heart.svg';
import head from '../images/head.svg';

const FactsSection = styled.section`
    position: relative;
`


const Background = styled.div`
    height: 100%;
    width: 100%;
    position: absolute;
    z-index: 10;
    background: url(${background}) no-repeat center center;
    background-size: cover;
    filter: opacity(0.2);

`

const ContentRow = styled.div`
    margin-top: 50px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
`

const FactsContent = styled.div`
    padding: 100px 0;
`

const FactCard = styled.div`

    height: 250px;
    width: 200px;
    text-align: center;
    img {
        display: block;
        margin: auto;
        margin-bottom: 20px;
    }
    @media (max-width: 1024px) {
        width: 50%;
        padding: 0 5%;
    }
    @media (max-width: 424px) {
        width: 100%;
        padding: 0 10%;
    })

`


const Facts = () => {
    const content = [
        {
            logo: gamepad,
            text: "We love exploring the world! making the experience intaractive and engaging makes us want to explore more. We hope would share our passion."
        },
        {
            logo: prize,
            text: "Who doesn't like rewards? We thought the same thing. By participating in our quizes and exploring the surroundings you'll get rewarded. Cool right?"
        },
        {
            logo: heart,
            text: "Our mission is to create a community of explorers, curious innovators, and educated individuals. We promise to provide as much content as possible. SO SHARE SOME LOVE :D"
        },
        {
            logo: head,
            text: "If you share our interest and passion, you know what to do! Scroll down and download!"
        }
    ]
    return (
        <FactsSection>

            <Background className="background">
            </Background>

            <Parallax y={[-10, 10]}>
            <FactsContent className="content">
                <Container>
                    <h3 style={{ textAlign: 'center' }}>Some Facts About Us</h3>
                    <ContentRow>
                        {content.map((item, i) => {
                            return (
                                <FactCard key={i}>
                                    <img src={item.logo} alt='fact logo' />
                                    <div className="text">
                                        <p>{item.text}</p>
                                    </div>
                                </FactCard>
                            )
                        })}
                    </ContentRow>
                </Container>

            </FactsContent>
            </Parallax>
        </FactsSection >
    )
}

export default Facts
