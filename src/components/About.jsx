import React from "react"
import { Container } from "react-bootstrap"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { useEffect } from "react"
import gsap from "gsap"

import TextBoxContainer from "./TextBoxContainer"
import StaggeringSteps from "./StaggeringSteps"

const AboutSection = styled.section`
  position: relative;
`

const ImageBox = styled.div`
  display: flex;
  justify-content: center;
  margin-top: -300px;
`

const About = () => {
  useEffect(() => {
    gsap.from(".slideUp", {
      y: 200,
      transform: "scale(0.8)",
      opacity: 0,
      duration: 2,
      ease: "power4.out",
      delay: 1.2,
    })
  }, [])

  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "phone.png" }) {
        childImageSharp {
          fixed(width: 600) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <AboutSection id="about">
      <ImageBox className="slideUp">
        <Img fixed={data.placeholderImage.childImageSharp.fixed} />
      </ImageBox>
      <Container>
        <TextBoxContainer />
        <StaggeringSteps />
      </Container>
    </AboutSection>
  )
}

export default About
