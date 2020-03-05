import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faTwitter, faFacebook, faYoutube } from '@fortawesome/free-brands-svg-icons'


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
        font-family: 'Montserrat';
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

const Link = styled.div`
    height: 2rem;
    width: 2rem;
`

const Footer = () => {
    return (
        <FooterSection>
            <FooterContent>
                <div className="link-wrapper" style={{ marginBottom: '25px' }}>
                    <a href="#">
                        <span>317Quest</span>
                    </a>
                </div>
                <SocialLinks>
                    <Link>
                        <a href="http://instagram.com/317quest" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faInstagram} />
                        </a>
                    </Link>
                    <Link>
                        <a href="http://twitter.com/" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faTwitter} />
                        </a>
                    </Link>
                    <Link>
                        <a href="http://facebook.com" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faFacebook} />
                        </a>
                    </Link>
                    <Link>
                        <a href="https://www.youtube.com/channel/UCYZttGjz_xhBCWl8_YNMoOQ" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faYoutube} />
                        </a>
                    </Link>
                </SocialLinks>
                <div className="additional-text">
                    <span>All rights reserved The 317, LLC 2020</span>
                </div>
                <div className="developed">
                    <span>Developed By <a href="http://aldibacreates.now.sh" target="_blank" rel="noopener noreferrer">Aldiyar Batyrbekov</a>  </span>
                </div>
            </FooterContent>
        </FooterSection>
    )
}

export default Footer
