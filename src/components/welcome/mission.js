import React from 'react';

import { Controller, Scene } from "react-scrollmagic";
import { Tween, Timeline } from "react-gsap";

export default class Mission extends React.Component {
    render() {
        return (
            <section className="mission container">
                <div className="mission-header">
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
                                    <h2>The End of Predatory Finance.</h2>
                                </Tween>
                            )}
                        </Scene>
                        <Scene triggerElement=".mission" duration={300}>
                            {progress => (
                                <Tween
                                    from={{
                                        scaleX: 0,
                                        transformOrigin: "left"
                                    }}
                                    to={{
                                        scaleX: 1
                                    }}
                                    ease="Linear.ease"
                                    totalProgress={progress}
                                    paused
                                >
                                    <hr />
                                </Tween>
                            )}
                        </Scene>
                    </Controller>
                </div>
                <Controller>

                    <Scene triggerElement=".mission h2" duration={500}>
                        {progress => (
                            <Tween
                                from={{
                                    opacity: 0,
                                }}
                                to={{
                                    opacity: 1
                                }}
                                ease="Back.easeOut"
                                totalProgress={progress}
                                paused
                            >
                                <h3>Moral Lending</h3>
                                <p>
                                    No more triple-digit APR for emergency advances
                                    and financing. Everyone faces cash flow issues,
                                    and we are here to provide support without
                                    impossible commitments.
                                </p>
                                <h3>Fostering Stability</h3>
                                <p>
                                    Your financial troubles are our problem to
                                    solve. We are here to put you on the path to
                                    financial freedom. We promise transparent terms,
                                    no hard credit checks, and support to enhance
                                    your financial well-being
                                </p>
                            </Tween>
                        )}
                    </Scene>
                </Controller>
            </section>
        );
    }
}

