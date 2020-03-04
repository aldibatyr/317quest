import React from 'react'
import { Col, Row } from 'react-bootstrap';
import styled from 'styled-components';

const Form = styled.form `
    width: 100%;
    display: flex;
    flex-wrap: wrap;
`

const Input = styled.div`
    width: ${props => props.width === 'full' ? '100%' : '50%'};
    padding: 5px 2.5px;
    input {
        width: 100%;
        border-radius: 5px;
        border: 1px #f2f2f2 solid;
        height: 50px;
        background: #f2f2f2;
        padding-left: 10px;
    }
    textarea {
        width: 100%;
        border-radius: 5px;
        border: 1px #f2f2f2 solid;
        background: #f2f2f2;
        padding-left: 10px;
    }
`

const Controls = styled.div`
    margin-top: 20px;
    width: 100%;
    text-align: center;
`

export const Button = styled.button`
    margin: auto;
    background: #000000;
    border-radius: 5px;
    border: none;
    padding: 18px 32px;
`


const FormComponent = () => {
    return (
        <Form name="contact" method="POST" data-netlify="true">
            <Input width="full">
                <input type="text" name="name" id="name" placeholder="Your Name" />
            </Input>
            <Input>
                <input type="email" name="email" id="email" placeholder="Your Email"/>
            </Input>
            <Input>
                <input type="tel" name="phone" id="phone" placeholder="Your Phone"/>
            </Input> 
            <Input width="full">
                <textarea name="message" id="message" rows="6" spellCheck="true" placeholder="Your Message">
                </textarea>
            </Input>
            <Controls>
                <Button>
                    <span style={{fontWeight: '700', color: 'white', lineHeight: '0'}}>SEND A MESSAGE</span>
                </Button>
            </Controls>
        </Form>
    )
}

export default FormComponent;
