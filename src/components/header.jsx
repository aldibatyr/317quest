import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Container, Row, Navbar, Nav, NavDropdown, Form, FormControl, Button } from "react-bootstrap"
import LogoFacebook from 'react-ionicons/lib/LogoFacebook'
import LogoTwitter from 'react-ionicons/lib/LogoTwitter'
import LogoInstagram from 'react-ionicons/lib/LogoInstagram'
import logo from '../images/logo.png'
import '../styles/header.scss'

const Header = ({ siteTitle }) => (

  <header>
    <nav className="navigation">
      <Navbar bg="white" expand="lg" style={{ boxShadow: '0 0 50px 0 rgba(0, 0, 0, 0.1)', position: 'relative'}} fixed="top">
        <Link to="/">
          <img src={logo} alt="logo" style={{ height: '36px', width: '36px', margin: 'auto', display: 'block' }} />
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto" style={{ fontFamily: 'Montserrat', fontSize: '0.8rem', textTransform: 'uppercase' }}>
            <Link className='nav-link' to="/">Home</Link>
            <Link className='nav-link' to="/store">store</Link>
            <Link to='/contact' className='nav-link'>contact</Link>
            <span className='nav-seperator'></span>
            <div className="social-links">
              <Nav.Link href='https://facebook.com' target='blank'><LogoFacebook /></Nav.Link>
              <Nav.Link href='https://twitter.com' target='blank'><LogoTwitter /></Nav.Link>
              <Nav.Link href='https://instagram.com/317quest' target='blank'><LogoInstagram /></Nav.Link>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
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
