import React from 'react';
import styled from 'styled-components'
import gsap from 'gsap'
import { useInView } from 'react-intersection-observer'


const TextBox = styled.div`
 margin: auto; 
 padding: 0 8%;
 width: 600px;
`

const TextBoxContainer = () => {

    const [textBox, inView, entry] = useInView({
        threshold: 1,
    })

    if (inView) {
        gsap.from('.fade-box', 1, { opacity: 0, y: 60, ease: 'power4.out' })
    }
    return (
        <TextBox className="text-box" ref={textBox} >
            <div className="fade-box">
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
