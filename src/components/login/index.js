import React from 'react';
import styled from "styled-components";

import CallToAction from '../call-to-action';

import tempimg from '../../images/temp.png';
import blob from '../../images/how-blob.png';
import circle from '../../images/how-circle.png';

const LoginWrapper = styled.div`
    width: 100%;
    height: 100vh;
    background-color: grey;
`;

const LoginSection = styled.div`
    width: 100%;
`;

const Login = () => (
    <LoginWrapper id="login">
        <div className="container">
            <LoginSection>
                <div className="flex-box two-items container">
                    <div className="item left">
                        <h2>How It Works</h2>
                    </div>
                    <div className="item right">
                        <img src={tempimg} alt="temporary img" />
                    </div>
                </div>
            </LoginSection>
        </div>
    </LoginWrapper>
);

export default Login;