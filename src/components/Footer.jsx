import React from "react"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faInstagram,
  faTwitter,
  faFacebook,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons"
import { withPrefix } from "gatsby"

const FooterSection = styled.footer`
  margin-top: 100px;
  background: #111111;
  /* width: 100vw; */
  padding: 50px 0;
`

const FooterContent = styled.div`
  width: 300px;
  margin: auto;
  text-align: center;
  a {
    margin-bottom: 50px;
    span {
      font-family: "Montserrat";
      font-weight: 700;
      font-size: 2rem;
    }
  }
`

const SocialLinks = styled.div`
  display: flex;
  margin-bottom: 2.5rem;
  justify-content: space-evenly;
`

const SocialLink = styled.div`
  height: 2rem;
  width: 2rem;
`

const Footer = () => {
  return (
    <FooterSection>
      <FooterContent>
        <div className="link-wrapper" style={{ marginBottom: "25px" }}>
          <a href="#">
            <span>317Quest</span>
          </a>
        </div>
        <SocialLinks>
          <SocialLink>
            <a
              href="http://instagram.com/317quest"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </SocialLink>
          <SocialLink>
            <a
              href="http://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          </SocialLink>
          <SocialLink>
            <a
              href="http://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faFacebook} />
            </a>
          </SocialLink>
          <SocialLink>
            <a
              href="https://www.youtube.com/channel/UCYZttGjz_xhBCWl8_YNMoOQ"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faYoutube} />
            </a>
          </SocialLink>
        </SocialLinks>
        <div className="additional-text">
          <span>All rights reserved The 317, LLC 2020</span>
        </div>
        <div className="developed">
          <span>
            Developed By{" "}
            <a
              href="http://creativecircle.dev"
              target="_blank"
              rel="noopener noreferrer"
            >
              Aldiyar Batyrbekov
            </a>{" "}
          </span>
          <br />
          <a
            href={withPrefix("./PP317Quest.pdf")}
            target="_blank"
            rel="noopener noreferrer"
          >
            Privacy Policy
          </a>
        </div>
      </FooterContent>
    </FooterSection>
  )
}

export default Footer
