import React, { useEffect } from "react"
import "../styles/hero.scss"
import heroBack from "../images/heroBack.jpg"
import styled from "styled-components"
import gsap from "gsap"

const Section = styled.section`
  height: 100vh;
  background: linear-gradient(#ffffffe6, #ffffffe6),
    url(${heroBack}) no-repeat center center fixed;
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
  font-weight: 700;
  @media (max-width: 768px) {
    font-size: 50px;
  }
`

const SubText = styled.span`
  font-size: 1.4rem;
  margin-bottom: 50px;
`

const CTAButton = styled.button`
  background: linear-gradient(270deg, #1e80dc, #c61590);
  border: none;
  height: 50px;
  padding: 0px 25px;
  border-radius: 25px;
  color: white;
  text-transform: uppercase;
  font-weight: 500;
`

const Hero = () => {
  let tl = gsap.timeline({ defaults: { duration: 0.5, ease: "power4.out " } })

  useEffect(() => {
    tl.from(".title-text-up", { y: 50, opacity: 0 })
    tl.from(".text-wrapper span", { y: -50, opacity: 0 }, "-=0.2")
    tl.from(".animate-down", { y: -100, opacity: 0 })
  }, [])
  return (
    <Section className="hero-section" id="home">
      <Foreground>
        <div
          className="text-wrapper"
          style={{
            textAlign: "center",
            marginTop: "200px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Title className="title-text-up">317Quest.</Title>
          <SubText>Get rewarder for exploring your surroundings.</SubText>
          <a
            href="https://apps.apple.com/us/app/317-quest/id1523964170"
            target="_blank"
            rel="noopener noreferrer"
          >
            <CTAButton className="animate-down">Start the Quest</CTAButton>
          </a>
        </div>
      </Foreground>
    </Section>
  )
}

export default Hero
