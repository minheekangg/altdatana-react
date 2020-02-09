import React from "react";

import { Button } from "semantic-ui-react";

import { Controller, Scene } from "react-scrollmagic";
import { Tween } from "react-gsap";

export default class CallToAction extends React.Component {
    render() {
        return (
            <section className="call-to-action">
                <div className="container tightest">
                    <Controller>
                        <Scene triggerElement=".call-to-action " duration={200}>
                            {progress => (
                                <Tween
                                    from={{
                                        opacity: 0,
                                        yPercent: 50
                                    }}
                                    to={{
                                        yPercent:0,
                                        opacity: 1
                                    }}
                                    ease="Back.easeOut"
                                    totalProgress={progress}
                                    paused
                                >
                                    <h2>Ready to get started?</h2>
                                </Tween>
                            )}
                        </Scene>
                        <Scene triggerElement=".call-to-action " duration={400} pin={false}>
                            {progress => (
                                <Tween
                                    from={{
                                        opacity: 0,
                                        yPercent: 50
                                    }}
                                    to={{
                                        yPercent:0,
                                        opacity: 1
                                    }}
                                    ease="Back.easeOut"
                                    totalProgress={progress}
                                    paused
                                >
                                    <p>
                                        Give us a try and check your rate. No
                                        credit score checks.
                                    </p>
                                    <p>
                                        No commitments until you accept the loan
                                        terms.
                                    </p>
                                </Tween>
                            )}
                        </Scene>
                        <Scene duration={200}>
                            {progress => (
                                <Tween
                                    from={{
                                        opacity: 0,
                                        yPercent: 50
                                    }}
                                    to={{
                                        yPercent:0,
                                        opacity: 1
                                    }}
                                    ease="Back.easeOut"
                                    totalProgress={progress}
                                    paused
                                >
                                    <Button className="primary-button bigger">
                                        Apply Now
                                    </Button>
                                </Tween>
                            )}
                        </Scene>
                        
                    </Controller>
                </div>
            </section>
        );
    }
}
