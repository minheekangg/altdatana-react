import React from 'react';

import { Controller, Scene } from "react-scrollmagic";
import { Tween } from "react-gsap";

import TempImg2 from '../../images/temp.png';

export default class ProductSteps extends React.Component {

    render() {
        return (
            <div className="step-by-step">
                <div className="container tight">
                    <p className="section-tag" style={{ marginTop: "60px", color: 'white' }}>start here</p>
                    <h2 style={{ color: "white", marginBottom: '60px' }}>I am looking to finance...</h2>
                    <section className="steps">
                        <Controller>
                            <Scene triggerElement=".steps" duration={500} >
                                {progress => (
                                    <Tween
                                        from={{
                                            opacity: 0,
                                            yPercent: 10
                                        }}
                                        to={{
                                            opacity: 1
                                        }}
                                        ease="Back.easeOut"
                                        totalProgress={progress}
                                        paused
                                    >
                                        <div className="step-one">
                                            <h4 className="number">01</h4>
                                            <h3 ><strong>Where do I start?&nbsp;</strong></h3>
                                            <p className="center-align">It only takes moments to see your new rate. No commitment, no documents, no impact on your credit score.
                                            </p>
                                        </div>
                                       

                                    </Tween>
                                )}
                            </Scene>
                            <Scene triggerElement=".step-one" duration={500} offset={300} >
                                {progress => (
                                    <Tween
                                        from={{
                                            opacity: 0,
                                            yPercent: 10
                                        }}
                                        to={{
                                            opacity: 1
                                        }}
                                        ease="Back.easeOut"
                                        totalProgress={progress}
                                        paused
                                    >
                                        <div className="step-two">
                                            <h4 className="number">02</h4>
                                            <h3 ><strong>Where do I start?&nbsp;</strong></h3>
                                            <p className="center-align">It only takes moments to see your new rate. No commitment, no documents, no impact on your credit score.
                                            </p>
                                        </div>
                                    </Tween>
                                )}
                            </Scene>
                        </Controller>
                        <div className="timeline-dotted-line">
                            <div className="line">
                                <div className="dots">
                                    <div className="dot-wrapper-2">
                                        <div className="dot dot-top"></div>
                                    </div>
                                    <div className="dot-wrapper-2">
                                        <div className="dot dot-middle"></div>
                                    </div>
                                    <div className="dot-wrapper-2">
                                        <div className="dot dot-bottom"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Controller>
                            <Scene triggerElement=".step-two" duration={500} offset={300}>
                                {progress => (
                                    <Tween
                                        from={{
                                            opacity: 0,
                                            yPercent: 10
                                        }}
                                        to={{
                                            opacity: 1
                                        }}
                                        ease="Back.easeOut"
                                        totalProgress={progress}
                                        paused
                                    >
                                        <div className="step-three">
                                            <h4 className="number">03</h4>
                                            <h3 ><strong>Where do I start?&nbsp;</strong></h3>
                                            <p className="center-align">It only takes moments to see your new rate. No commitment, no documents, no impact on your credit score.
                                            </p>
                                        </div>
                                    </Tween>
                                )}
                            </Scene>
                        </Controller>
                    </section>

                    <section className="product-deeper">

                        <div className="img-wrapper">
                            <img src={TempImg2} alt='phone in hand' />
                            <p className="img-tag">Photo by Balázs Kétyi on Unsplash</p>
                        </div>
                        <h3 className="desc">
                            Our home equity line allows you to consolidate debt
                                    at a lower rate compared to credit cards and
                                    personal loans.
                        </h3>

                    </section>
                </div>
            </div>
        )
    } 
}
