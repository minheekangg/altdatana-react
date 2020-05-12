import React from 'react';
import styled from "styled-components";

import { Button, Checkbox, Form } from 'semantic-ui-react'

const LoginWrapper = styled.div`
    width: 100%;
    min-height: 60vh;
    max-height: 100%;
    // background-color: grey;
`;

const LoginSection = styled.div`
    max-width: 300px;
    margin: 10% auto 0;    
    width: 100%;
`;

const Login = () => (
    <LoginWrapper id="login">
        <LoginSection>
            <Form>
                <p>Login</p>
                <Form.Field>
                    <label>First Name</label>
                    <input placeholder='First Name' />
                </Form.Field>
                <Form.Field>
                    <label>Last Name</label>
                    <input placeholder='Last Name' />
                </Form.Field>
                <Form.Field>
                    <Checkbox label='I agree to the Terms and Conditions' />
                </Form.Field>
                <Button type='submit'>Submit</Button>
            </Form> 
        </LoginSection>
    </LoginWrapper>
);

export default Login;