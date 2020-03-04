import React, { useRef, useEffect } from 'react';
import styled from 'styled-components'
import gsap from 'gsap'
import { useInView } from 'react-intersection-observer'


const TextBox = styled.div`
 margin: auto; 
 padding: 0 8%;
 max-width: 600px;
`

const TextBoxContainer = () => {


    const [textBox, inView] = useInView({
        /* Optional options */
        triggerOnce: true,
        threshold: 1,
    })

    if (inView) {
        gsap.to('.fade-box', 1,
        {
            opacity: 1,
            y: 0,
            ease: "power4.out"
        })
    }
        
    return (
        <TextBox className="text-box" ref={textBox}>
            <div className="fade-box" style={{opacity: 0, transform: 'translate(0px, 60px)'}}>
                <h2 style={{ textAlign: 'center' }}>
                    <span>Explore the city.</span>
                    <br />
                    <span>Earn Points.</span>
                </h2>
                <p style={{ fontSize: '1.2rem' }}>There are million and one things to do in the city. Explore the city and participate in mini quizes to earn points. So why not get rewarded?</p>
            </div>
        </TextBox>
    )
}

export default TextBoxContainer
