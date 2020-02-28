import React from 'react'
import { Container, Row } from 'react-bootstrap'
import styled from 'styled-components'
import { useStaticQuery, graphql } from "gatsby"
import Img from 'gatsby-image'
import { useEffect } from 'react'
import gsap from 'gsap'

const AboutSection = styled.section`
    position: relative;
`

const ImageBox = styled.div`
    display: flex;
    justify-content: center;
    margin-top: -300px;

`


const TextBox = styled.div`
 margin: auto; 
 padding: 0 8%;
 width: 600px;
`

const StepBox = styled.div`
    width: 33%;
    padding: 5%;
    text-align: center;
    @media (max-width: 425px) {
        width: 100%;
    }

`



const About = () => {


    useEffect(() => {
        gsap.from('.slideUp', {y: 200, transform: 'scale(0.8)', opacity: 0, duration: 2, ease: 'power4.out', delay: 1.2})
    })

    const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "phone.png" }) {
          childImageSharp {
              fixed(width: 300) {
                  ...GatsbyImageSharpFixed
              }
          }
      }
    }
    `)

    return (
        <AboutSection id="about">
            <ImageBox className='slideUp'>
                <Img fixed={data.placeholderImage.childImageSharp.fixed}/>
            </ImageBox>
            <Container>
                <Row>
                    <TextBox className="text-box">
                        <h2 style={{ textAlign: 'center' }}>
                            <span>Explore the city.</span>
                            <br />
                            <span>Earn Points.</span>
                        </h2>
                        <p style={{fontSize: '1.2rem'}}>There are million and one things to do in the city. Explore the city and participate in mini quizes to earn points. So why not get rewarded?</p>
                    </TextBox>
                </Row>
                <Row>
                    <StepBox>
                        <h4>Travel</h4>
                        <p style={{textAlign: 'left'}}>Our team is working hard to create interesting and engaging quizes for you. Travel to the pinpoints where you`ll find quizes.</p>
                    </StepBox>
                    <StepBox>
                        <h4>Answer</h4>
                        <p style={{textAlign: 'left'}}>Our quizes are related to the locations. So make sure to know your surroundings and be ready for engaging experience.</p>
                    </StepBox>
                    <StepBox>
                        <h4>Get Points</h4>
                        <p style={{textAlign: 'left'}}>Get Rewarded for right answers! Points can be exchanged for tangible and intangible goods! Our sponsors are generous so expect only the best!</p>
                    </StepBox>
                </Row>
            </Container>
            <p>{console.log(data)}</p>
        </AboutSection>
    )
}

export default About
