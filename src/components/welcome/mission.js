import React from 'react';
import { Icon } from 'semantic-ui-react';
import styled from "styled-components";

const IntroMissionSection = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: black;

    .mission {
        height: 100vh;
        width: 100%;
        text-align: left;

        h2 { font-size: 42px; }

        .left {
            align-self: center;
            margin-bottom: 30px;
        }

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
        background-image: url("../../images/list-icon.png");
        background-size: cover;
        background-position: center;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
    }

    h6 {
        margin-bottom: 10px;
    }

    li.open p {
        opacity: 1;
        height: auto;
        pointer-events: all;
    }
    // li.closed p {
    //     opacity: 0;
    //     height: 0;
    //     pointer-events: none;
    // }
`;

export default class Mission extends React.Component {
    state = { openOne: false, openTwo: false, openThree : false }
    
    render() {
        const { openOne, openTwo, openThree } = this.state
        return (
            <IntroMissionSection class="mission">
                <div className="flex-box container">
                    <div className="item left">
                        <StyledList>
                            <li
                                onClick={() =>
                                    this.setState({
                                        openOne: !openOne,
                                    })
                                }
                                className={openOne ? "open" : "closed"}
                            >
                                <h6>
                                    Borrower Behavioral Analysis
                                </h6>
                                <p>
                                    Analyze your borrower’s payment history to
                                    predict their creditworthiness.
                                </p>
                            </li>
                            <li
                                onClick={() =>
                                    this.setState({
                                        openTwo: !openTwo,
                                    })
                                }
                                className={openTwo ? "open" : "closed"}
                            >
                                <h6>
                                    Seamless Integration
                                </h6>
                                <p>
                                    We stay behind the scenes, so you can build
                                    the client relationship directly
                                </p>
                            </li>
                            <li
                                onClick={() =>
                                    this.setState({
                                        openThree: !openThree,
                                    })
                                }
                                className={openThree ? "open" : "closed"}
                            >
                                <h6>
                                    Stochastic Simulations
                                </h6>
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
                    </div>
                </div>
            </IntroMissionSection>
        );
    }
}

