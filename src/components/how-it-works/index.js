import React from 'react';
import styled from "styled-components";

import CallToAction from '../call-to-action';

import tempimg from '../../images/temp.png';
import blob from '../../images/how-blob.png';

const HowItWorksWrapper = styled.div`
    position: relative;
    overflow: hidden;
    margin-top: -70px;

    .blob-bump {
        width: 100%;
        height: 150px;
        position: absolute;
        top: 0;
        background-color: #FEE6D4;
    }

    .blob {
        position: absolute;
        top: 150px;
        right: 0;
        z-index: -1;
        width: 100%;
    }

    @media screen and (max-width: 750px) {
        margin-top: 0;
    }
`;

const HowItWorksSectionTitle = styled.section`
    .flex-box { align-items: center; }

    .item.right {
        flex-basis: 50%;
        img {
            width: 100%;
        }
    }

    @media screen and (max-width: 750px) {
        text-align: center;

        .flex-box {
            flex-wrap: wrap;
        }

        .item { 
            flex-basis: 100%;

            img { display: none; }
        }
    }
`;

const HowItWorksSectionContent = styled.section`
    text-align: left;

    .flex-box {
        justify-content: space-between;
        align-items: center;
    }
    .item { 
        flex-basis: 50%;
        padding: 20px;
    }

    .content-header { font-size: 30px; }

    img { width: 100%;}

    @media screen and (max-width: 900px) {
        .content-header { font-size: 2em; }
    }
    @media screen and (max-width: 750px) {
        text-align: center;

        &~& {
            padding-top: 0;
        }
        
        .flex-box {
            flex-wrap: wrap;

            &.flip { flex-wrap: wrap-reverse; }
        }

        .item { 
            flex-basis: 100%;

            img { max-width: 300px;}
        }
    }
`;

const HowItWorks = () => (
    <HowItWorksWrapper id="how-it-works">
        <div className="blob-bump"></div>
        <img src={blob} className="blob" />
        <div className="container">
            <HowItWorksSectionTitle>
                <div className="flex-box two-items container">
                    <div className="item left">
                        <h2>How It Works</h2>
                    </div>
                    <div className="item right">
                        <img src={tempimg} alt="temporary img" />
                    </div>
                </div>
            </HowItWorksSectionTitle>
            <HowItWorksSectionContent>
                <div className="flex-box flip">
                    <div className="item left">
                        <h3 className="content-header">Our Goals</h3>
                        <p>While large institutions spend millions of dollars on development and underwriting technology, small lenders and credit unions are left to continue using credit scores, W2s, and pay stubs, to understand a borrower’s financial risk.</p>
                        <p>We are here to provide a solution to modernize underwriting in a big way, without needing to develop an R&D department, for every institution that faces lending risk.</p>
                    </div>
                    <div className="item right">
                        <img src={tempimg} alt="temporary img" />
                    </div>
                </div>
            </HowItWorksSectionContent>
            <HowItWorksSectionContent>
                <div className="flex-box">
                    <div className="item right">
                        <img src={tempimg} alt="temporary img" />
                    </div>
                    <div className="item left">
                        <h3 className="content-header">Our Experience</h3>
                        <p>We are a team made up of credit analysts, risk managers, actuaries, attorneys, data scientists, and investment bankers. We’ve been at the forefront of institutional risk management on all sides of the street. </p>
                    </div>
                </div>
            </HowItWorksSectionContent>
        </div>
        <CallToAction type="question"/>
    </HowItWorksWrapper>
);

export default HowItWorks;