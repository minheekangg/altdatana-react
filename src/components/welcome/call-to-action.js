import React from 'react';

import { Controller, Scene } from "react-scrollmagic";
import { Tween } from "react-gsap";

import { Button } from "semantic-ui-react";

export default class CallToAction extends React.Component {
    render() {
        return (
            <section className="call-to-action">
                <Controller>
                    <Scene triggerElement=".mission" duration={500}>
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
                                <h2>Ready to get started?</h2>
                                <p>
                                    Give us a try and check your rate. No credit
                                    score checks.
                                </p>
                                <p>
                                    No commitments until you accept the loan
                                    terms.
                                </p>
                                <Button className="primary-button bigger">
                                    Apply Now
                                </Button>
                            </Tween>
                        )}
                    </Scene>
                </Controller>
            </section>
        );
    }
}

