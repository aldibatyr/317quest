import React from 'react'
import styled from 'styled-components'
import background from '../images/videoPreviewBack.jpg'
import start from '../images/start.svg'

const VideoPreviewContainer = styled.section`
    background: linear-gradient(#ffffffE6, #ffffffE6), url(${background}) center center;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
`;

const PlayButton = styled.a`
    margin: auto;
    margin-top: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
    width: 50px;
    border-radius: 100%;
    background: linear-gradient(270deg, #1e80dc, #c61590);
    &:hover {
        cursor: pointer;
    }
`;



const VideoPreview = () => {
    return (
        <VideoPreviewContainer>
            <div className="content-wrapper" style={{ marginTop: '50px', marginBottom: '120px' }}>
                <h2>See What's up for grabs!</h2>
                <span style={{ fontSize: '1.2rem' }}>Your task is to travel to the locations! Our's is to find best rewards!</span>
                <div className="button-wrapper">
                    <PlayButton href="http://youtube.com" target="_blank" rel="noopener noreferrer">
                        <svg style={{transform: 'translatex(4px)'}} xmlns="http://www.w3.org/2000/svg" width="25" height="29" viewBox="0 0 25 29">
                            <g id="Polygon_1" data-name="Polygon 1" transform="translate(25) rotate(90)" fill="#000">
                                <path d="M 28.13198280334473 24.5 L 0.8680197596549988 24.5 L 14.50000095367432 0.9965841174125671 L 28.13198280334473 24.5 Z" stroke="none" />
                                <path d="M 14.50000095367432 1.99315071105957 L 1.736028671264648 24 L 27.26397323608398 24 L 14.50000095367432 1.99315071105957 M 14.50000095367432 0 L 29 25 L 1.9073486328125e-06 25 L 14.50000095367432 0 Z" stroke="none" fill="#707070" />
                            </g>
                        </svg>
                    </PlayButton>
                </div>
            </div>
        </VideoPreviewContainer>
    )
}

export default VideoPreview
