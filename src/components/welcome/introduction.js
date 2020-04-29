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

        p {
            font-size: 20px;
            font-weight: 600;
            line-height: normal;
            margin-bottom: 5px
        }
    
    }

    .right {
        img { width: 100%}
    }

    @media screen and (max-width: 900px) {
        .item.left {
            flex-basis: 60%;

        }
        .item.right {
            margin-left: 0;
        }
    }

    @media screen and (max-width: $mobileBP) {
        padding-top: 0;

        .flex-box {

            display: block;
        }

        .item {
            margin: 0;
        }

        .item.right {
            width: 95%;
            margin: auto;

            img {
                max-width: 300px;
                margin-top: 50px;
            }
        }

        .item.left {
            text-align: center;
            width: 100%;

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
                            <div style={{ padding: 0 }}>We Are</div>
                            <div style={{ padding: 0 }}>
                                Underwriting The Future
                            </div>
                        </h2>
                        <p>Introducing alternative data </p>
                        <p>to lenders small or large.</p>
                    </div>
                </div>
            </IntroductionWrapper>
        );
    }
}

