import React from 'react';
import styled from "styled-components";

import CallToAction from '../call-to-action';

import tempimg from '../../images/temp.png';

const AboutSectionTitle = styled.section`
    .flex-box { align-items: center; }
    .item.right {
        flex-basis: 50%;
        img {
            width: 100%;
        }
    }
`;
const AboutSectionMid = styled.section`
    max-width: 700px;
    margin: auto;

    h3 { font-size: 48px;}
`;
const AboutSectionContent = styled.section`
    text-align: left;
    .flex-box {
        justify-content: space-between;
        align-items: center;
    }
    .item { 
        flex-basis: 50%;
        padding: 20px;
    }
    .content-header {
        font-size: 30px;
    }
    img {
        width: 100%;
    }

    &last-child {
     margin-bottom: 100px;   
    }
`;

const About = () => (
    <div id="about">
        <div className="container">

            <AboutSectionTitle>
                <div className="flex-box two-items container">
                    <div className="item left">
                        <h2> About us</h2>
                    </div>
                    <div className="item right">
                        <img src={tempimg} alt="temporary img" />
                    </div>
                </div>
            </AboutSectionTitle>
            <AboutSectionMid>
                <h3> We love data, and we think the world should too.</h3>
            </AboutSectionMid>
            <AboutSectionContent>
                <div className="flex-box">
                    <div className="item left">
                        <h3 className="content-header">Our Goals</h3>
                        <p>While large institutions spend millions of dollars on development and underwriting technology, small lenders and credit unions are left to continue using credit scores, W2s, and pay stubs, to understand a borrower’s financial risk.</p>
                        <p>We are here to provide a solution to modernize underwriting in a big way, without needing to develop an R&D department, for every institution that faces lending risk.</p>
                    </div>
                    <div className="item right">
                        <img src={tempimg} alt="temporary img" />
                    </div>
                </div>
            </AboutSectionContent>
            <AboutSectionContent>
                <div className="flex-box">
                    <div className="item right">
                        <img src={tempimg} alt="temporary img" />
                    </div>
                    <div className="item left">
                        <h3 className="content-header">Our Experience</h3>
                        <p>We are a team made up of credit analysts, risk managers, actuaries, attorneys, data scientists, and investment bankers. We’ve been at the forefront of institutional risk management on all sides of the street. </p>
                    </div>
                </div>
            </AboutSectionContent>
        </div>
        <CallToAction type="question"/>
    </div>
);

export default About;