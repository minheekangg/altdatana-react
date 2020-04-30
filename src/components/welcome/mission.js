import React from 'react';
import styled from "styled-components";

import { Button } from "semantic-ui-react";

const IntroMissionSection = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: black;

    text-align: left;

    height: 100vh;
    width: 100%;
    text-align: left;

    h2 {
        font-size: 42px;
    }

    .left {
        align-self: center;
        margin-bottom: 30px;
        margin-right: 10%;
    }
    .right {
        align-self: center;
    }
`;

const StyledList = styled.ul`
    list-style: none;
    position: relative;
    text-align: left;
    padding-left: 60px;

    li {
        cursor: pointer;
    }

    li:before {
        content: "";
        width: 30px;
        height: 30px;
        position: absolute;
        background-image: url('images/list-icon.png');
        background-size: cover;
        background-position: center;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
    }

    h6 {
        margin-bottom: 10px;
    }

`;

export default class Mission extends React.Component {
    
    render() {
        return (
            <IntroMissionSection class="mission">
                <div className="flex-box container">
                    <div className="item left">
                        <StyledList>
                            <li>
                                <h6>Borrower Behavioral Analysis</h6>
                                <p>
                                    Analyze your borrower’s payment history to
                                    predict their creditworthiness.
                                </p>
                            </li>
                            <li>
                                <h6>Seamless Integration</h6>
                                <p>
                                    We stay behind the scenes, so you can build
                                    the client relationship directly
                                </p>
                            </li>
                            <li>
                                <h6>Stochastic Simulations</h6>
                                <p>
                                    Model a borrower’s behavior against your
                                    loan terms, giving you confidence in your
                                    underwrite
                                </p>
                            </li>
                        </StyledList>
                    </div>
                    <div className="item right">
                        <h3>What we offer</h3>
                        <p>
                            Still underwriting your borrowers with W2s and
                            paystubs? Modernize your business with advanced
                            analytics on your client’s payment behavior.
                        </p>
                        <Button className="primary-button">
                            Get Started
                        </Button>
                    </div>
                </div>
            </IntroMissionSection>
        );
    }
}

