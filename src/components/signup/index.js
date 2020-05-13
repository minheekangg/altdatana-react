import React from 'react';
import styled from "styled-components";

import { Button, Checkbox, Form, Input, Select, TextArea } from 'semantic-ui-react';

const genderOptions = [
    { key: 'm', text: 'Male', value: 'male' },
    { key: 'f', text: 'Female', value: 'female' },
    { key: 'o', text: 'Other', value: 'other' },
]

const SignUpWrapper = styled.div`
    width: 100%;
    // background-color: grey;
`;

const SignUpSection = styled.div`
    max-width: 600px;
    margin: 10% auto 0;    
    width: 100%;
    padding: 50px;
    // border: 1px solid;
    box-shadow: -2px 18px 50px -19px rgba(107,107,107,1);
    border-radius: 16px;

    h4 { 
        font-size: 30px;
        margin-bottom: 30px;
    }

    .ui.form .field>label {
        font-weight: normal;
        text-align: left;
    }

    .ui.button.primary-button {
        margin: 20px auto 0;
        padding: 15px;
        font-size: 14px;
        width: 100%;
        position: relative;
    }

    @media screen and (max-width: 450px) {
        box-shadow: none;
        border: none;
        padding: 10% 10px;
    }
`;

const SignUp = () => (
    <SignUpWrapper id="sign-up">
        <SignUpSection>
            <Form>
                <h4>Sign Up</h4>
                <Form.Group widths='equal'>
                    <Form.Field
                        id='form-input-control-first-name'
                        control={Input}
                        label='First name'
                        placeholder='First name'
                    />
                    <Form.Field
                        id='form-input-control-last-name'
                        control={Input}
                        label='Last name'
                        placeholder='Last name'
                    />
                </Form.Group>
                <Form.Field
                    control={Select}
                    options={genderOptions}
                    label={{ children: 'Gender', htmlFor: 'form-select-control-gender' }}
                    placeholder='Gender'
                    search
                    searchInput={{ id: 'form-select-control-gender' }}
                />
                <Form.Field
                    id='form-textarea-control-opinion'
                    control={TextArea}
                    label='Opinion'
                    placeholder='Opinion'
                />
                <Form.Field
                    id='form-input-control-error-email'
                    control={Input}
                    label='Email'
                    placeholder='joe@schmoe.com'
                    error={{
                        content: 'Please enter a valid email address',
                        pointing: 'below',
                    }}
                />
                <Form.Checkbox
                    label='I agree to the Terms and Conditions'
                    // error={{
                    //     content: 'You must agree to the terms and conditions',
                    //     pointing: 'left',
                    // }}
                />
                <Form.Field
                    id='form-button-control-public'
                    className="primary-btn"
                    control={Button}
                    content='Confirm'
                    label='Label with htmlFor'
                />
            </Form>
            <Form.Checkbox
      label='I agree to the Terms and Conditions'
      error={{
        content: 'You must agree to the terms and conditions',
        pointing: 'left',
      }}
    />
        </SignUpSection>
    </SignUpWrapper>
);

export default SignUp;