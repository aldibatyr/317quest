import React from 'react';
import styled from 'styled-components';
import { Container } from 'react-bootstrap';


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
    return (
        <SignupSection>
            <Container>
                <div className="text" style={{ textAlign: 'center', marginBottom: '20px' }}>
                    <h3>Sign Up to Newsletter</h3>
                    <span style={{ fontSize: '1.2rem' }}>We have cool givaways and useful information available for our subscribers.</span>
                </div>
                <div className="input-wrapper">
                    <Form>
                        <input type="text" name="subscribe" id="subscribe" placeholder="Enter email address" />
                        <button>
                            <span>SIGN UP</span>
                        </button>
                    </Form>
                </div>
            </Container>
        </SignupSection>
    )
}

export default SignUp
