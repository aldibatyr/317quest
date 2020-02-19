import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Container, Row } from "react-bootstrap"
import logo from '../images/gatsby-icon.png'
import '../styles/header.scss'

const Header = ({ siteTitle }) => (

  <header>
    {/* <div className="pre-loader"><div></div></div> */}
    <nav className="navigation">
      <Container className='nav-container'>
        <Row className='nav-wrapper'>
          <Link to='/'>
            <img src={logo} alt="logo" style={{height: '36px', width: '36px', margin: 'auto', display: 'block'}}/>
          </Link>
          <div className="nav-links">
            <ul>
              <li>
                <a href="#home">
                  HOME
                </a>
              </li>
              <li>
                <a href="#about">
                  ABOUT
                </a>
              </li>
              <li>
                <a href="#overview">
                  OVERVIEW
                </a>
              </li>
              <li>
                <a href="#store">
                  STORE
                </a>
              </li>
            </ul>
          </div>
        </Row>
      </Container>
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
