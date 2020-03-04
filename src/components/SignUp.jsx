import React, { useState } from 'react';
import styled from 'styled-components';
import { Container } from 'react-bootstrap';
import addToMailchimp from 'gatsby-plugin-mailchimp';
import Lottie from 'react-lottie';
import animationData from '../images/success.json';

const SignupSection = styled.section`
    padding: 100px 0;
`

const Form = styled.form`
    display: flex;
    align-items: center;
    width: 90%;
    margin: auto;
    @media (max-width: 425px) {
        width: 95%;
    }
    input {
        width: 80%;
        height: 50px;
        border-radius: 25px 0px 0px 25px;
        border: none;
        box-shadow: 0 0 50px 0 rgba(0,0,0,0.1);
        padding-left: 30px;
        @media (max-width: 425px) {
        width: 75%;
        }
        @media (max-width: 320px) {
        width: 65%;
    }
    }
    button {
        width: 20%;
        height: 50px;
        border-radius: 0px 25px 25px 0px;
        border: none;
        background: linear-gradient(270deg, #1e80dc, #c61590);
        box-shadow: 0 0 50px 0 rgba(0,0,0,0.1);
        color: white;
        font-weight: 500;
        @media (max-width: 425px) {
        width: 25%;
    }
    @media (max-width: 320px) {
        width: 35%;
    }
        &:hover {
            cursor: pointer;
        }
    }
`

const SignUp = () => {

    const animOptions = {
        loop: false,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRation: 'xMidYMid slice'
        }
    };

    const [email, setEmail] = useState('');
    const [result, setResult] = useState({});
    const [success, setSuccess] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        const response = await addToMailchimp(email);
        if (response.result === 'error') {
            const error = response.msg.split('.');
            const formatted = error[0].concat(error[1]);
            console.log(formatted)
            setError(formatted)
        } else {
            setResult(response)
            setError('');
            setSuccess(true);
        }
        setLoading(false);
        setEmail('');

    }
    return (
        <SignupSection>
            <Container>
                <div className="text" style={{ textAlign: 'center', marginBottom: '20px' }}>
                    <h3>Sign Up to Newsletter</h3>
                    <span style={{ fontSize: '1.2rem' }}>We have cool givaways and useful information available for our subscribers.</span>
                </div>
                <div className="input-wrapper">
                    <Form onSubmit={e => handleSubmit(e)}>
                        <input type="text" name="subscribe" id="subscribe" placeholder="Enter email address" value={email} onChange={e => setEmail(e.target.value)} />
                        <button>
                            {success ?
                                (<div className="animation-wrapper" style={{marginTop: '-35px'}}>
                                    <Lottie
                                        options={animOptions}
                                        height={120}
                                    />
                                </div>
                                )
                                : (loading ? (<span>loading</span>) : (<span>SIGN UP</span>))}
                        </button>
                    </Form>
                </div>
                <div className="error-wrapper">
                    <div className="error" style={{ width: '300px', margin: 'auto' }}>
                        {error ? <span style={{ color: 'red' }}>{error}</span> : <></>}

                    </div>
                </div>
            </Container>
        </SignupSection>
    )
}

export default SignUp
