import React from 'react'
import styled from 'styled-components'
import { Container, Row, Col } from 'react-bootstrap'
import loginScreen from '../images/login.png';
import contactScreen from '../images/contact.png';
import newsScreen from '../images/news.png';
import storeScreen from '../images/store.png';
import missionScreen from '../images/mission.png';
import '../styles/Overview.scss';



const OverviewSection = styled.section`
    padding: 100px 0px;
`

const Overview = () => {
  return (
    <OverviewSection id="overview">
      <Container>
        <Col style={{ textAlign: 'center' }}>
          <h2>See Some Cool Stuff</h2>
          <span style={{ fontSize: '1.2rem' }}>We worked hard for these images, so at least admire them</span>
        </Col>
        <div className="gallery">
          <div className="screen-box">
            <div className="screenshot-holder">
              <img src={loginScreen} alt="" />
            </div>
            <div className="screen-info">
              <h2>Log In</h2>
              <span>Once you are logged in you will have an access to all of the features of the application.</span>
            </div>
          </div>
          <div className="screen-box">
            <div className="screenshot-holder">
              <img src={contactScreen} alt="" />
            </div>
            <div className="screen-info">
            <h2>Contact Us</h2>
            <span>You can always count on us and get the required support. Or if you have any sponsorship inquiries this would be a perfect place to contact us.</span>
            </div>
          </div>
          <div className="screen-box">
            <div className="screenshot-holder">
              <img src={newsScreen} alt="" />
            </div>
            <div className="screen-info">
              <h2>News Feed</h2>
              <span>Our news feed would be the perfect place for you to follow all the quizes we'll have for you to try!</span>
            </div>
          </div>
          <div className="screen-box">
            <div className="screenshot-holder">
              <img src={storeScreen} alt="" />
            </div>
            <div className="screen-info">
              <h2>Store</h2>
              <span>Our store is filled with cool stuff for you to claim! Just make sure to log in and earn enough points to redeem cool prizes!</span>
            </div>
          </div>
          <div className="screen-box">
            <div className="screenshot-holder">
              <img src={missionScreen} alt="" />
            </div>
            <div className="screen-info">
              <h2>Missions</h2>
              <span>Our team is working hard to populate the map with various activities! Make sure to check them out!</span>
            </div>
          </div>
        </div>
      </Container>
    </OverviewSection>
  )
}

export default Overview
