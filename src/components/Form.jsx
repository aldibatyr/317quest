import React, { useState } from 'react'
import styled from 'styled-components';

const Form = styled.form`
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

function encode(data) {
    return Object.keys(data)
        .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
        .join('&')
}

const FormComponent = () => {

    const [state, setState] = useState({});

    const handleChange = (e) => {
        setState({ ...state, [e.target.name]: e.target.value })
    }


    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target
        fetch('/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: encode({
                'form-name': form.getAttribute('name'),
                ...state,
            }),
        })
            .then(() => alert('Sent'))
            .catch((error) => alert(error))
    }

    return (
        <>
            <Form name="contact" method="POST" data-netlify="true" data-netlify-honeypot="bot-field" onSubmit={e => handleSubmit(e)}>
                <input type="hidden" name="form-name" value="contact" />
                <p hidden>
                    <label>
                        Don’t fill this out: <input name="bot-field" onChange={handleChange} />
                    </label>
                </p>
                <Input width="full">
                    <input type="text" name="name" id="name" placeholder="Your Name" onChange={e => handleChange(e)} />
                </Input>
                <Input>
                    <input type="email" name="email" id="email" placeholder="Your Email" onChange={e => handleChange(e)} />
                </Input>
                <Input>
                    <input type="tel" name="phone" id="phone" placeholder="Your Phone" onChange={e => handleChange(e)} />
                </Input>
                <Input width="full">
                    <textarea name="message" id="message" rows="6" spellCheck="true" placeholder="Your Message" onChange={e => handleChange(e)}>
                    </textarea>
                </Input>
                <Controls>
                    <Button>
                        <span style={{ fontWeight: '700', color: 'white', lineHeight: '0' }}>SEND A MESSAGE</span>
                    </Button>
                </Controls>
            </Form>
        </>
    )
}

export default FormComponent;
