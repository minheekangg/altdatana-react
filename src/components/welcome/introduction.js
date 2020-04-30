import React from 'react';
import tempimg from '../../images/temp.png';
import styled from "styled-components";

const IntroductionWrapper = styled.section`
    height: calc(100vh - 80px);
    width: 100vw;
    .flex-box {
        align-items: center;
        flex-direction: row-reverse;
        height: 100%;
        margin: auto;
    }

    .left {
        text-align: left;
        color: $primary-blue;    
    }

    .right {
        img { width: 100%}
        flex-basis: 40%;
    }

    @media screen and (max-width: 900px) {
        .item.left {
            flex-basis: 60%;
        }
        .item.right {
            margin-left: 0;
        }
    }

    @media screen and (max-width: 600px) {
        padding-top: 0;

        .flex-box {
            display: block!important;
        }

        .item {
            margin: 0;
        }

        .item.right {
            margin: auto;

            img {
                max-width: 300px;
                margin-top: 50px;
            }
        }

        .item.left {
            text-align: center;
        }
    }

    @media screen and (max-width: 320px) {
        padding-top: calc(50vh - 200px);

        img { display: none;}
    }
`;

export default class Intro extends React.Component {
    render() {
        return (
            <IntroductionWrapper>
                <div className="flex-box two-items container">
                    <div className="item right">
                        <img src={tempimg} alt="temporary img" />
                    </div>
                    <div className="item left">
                        <h2>
                            We Are Underwriting The Future
                        </h2>
                        <p>Introducing alternative data to lenders small or large.</p>
                    </div>
                </div>
            </IntroductionWrapper>
        );
    }
}

