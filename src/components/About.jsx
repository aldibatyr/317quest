import React, { useRef } from 'react'
import { Container, Row } from 'react-bootstrap'
import styled from 'styled-components'
import { useStaticQuery, graphql } from "gatsby"
import Img from 'gatsby-image'
import { useEffect } from 'react'
import gsap from 'gsap'
import { useIntersection } from 'react-use'
import { useInView } from 'react-intersection-observer'

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
    opacity: 0;
    @media (max-width: 425px) {
        width: 100%;
    }

`



const About = () => {


    const intersectionRef = useRef(null);
    const intersection = useIntersection(intersectionRef, {
        root: null,
        rootMargin: '0px',
        threshold: 1
    });

    useEffect(() => {
        gsap.from('.slideUp', { y: 200, transform: 'scale(0.8)', opacity: 0, duration: 2, ease: 'power4.out', delay: 1.2 })
    }, [])

    const fadeOut = element => {
        console.log('fadeout')
        gsap.to(element, { opacity: 0, duration: 0.5, ease: 'power4.out' })
    }

    const fadeIn = element => {
        console.log('fadein')
        gsap.to(element, { opacity: 1, duration: 0.5, ease: 'power4.out' })
    }



    intersection && intersection.intersectionRatio < 1 ?
        fadeOut('.fade-box')
        : fadeIn('.fade-box')


    const [element, inView, entry] = useInView({
        /* Optional options */
        threshold: 1,
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
                <Img fixed={data.placeholderImage.childImageSharp.fixed} />
            </ImageBox>
            <Container>
                <Row>
                    <TextBox className="text-box" ref={intersectionRef} >
                        <div className="fade-box" style={{ opacity: '0' }}>
                            <h2 style={{ textAlign: 'center' }}>
                                <span>Explore the city.</span>
                                <br />
                                <span>Earn Points.</span>
                            </h2>
                            <p style={{ fontSize: '1.2rem' }}>There are million and one things to do in the city. Explore the city and participate in mini quizes to earn points. So why not get rewarded?</p>
                        </div>
                    </TextBox>
                </Row>
                <Row ref={element} style={{marginTop: '100px'}}>
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
            </Container>
        </AboutSection>
    )
}

export default About
