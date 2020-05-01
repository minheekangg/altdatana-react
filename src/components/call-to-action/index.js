import React from "react";
import styled from "styled-components";

import { Button } from "semantic-ui-react";

import { Controller, Scene } from "react-scrollmagic";
import { Tween } from "react-gsap";

const CallToActionSection = styled.section`
    background-color: $background-grey;
    color: $primary-blue;
    margin: auto;

    padding: 25vh 0;

    h3 {
        margin-bottom: 40px;
    }
`;

export default class CTA extends React.Component {
    render() {

        return (
            <CallToActionSection id="call-to-action">
                <div className="container">
                    <Controller>
                        <Scene triggerElement="#call-to-action" duration={200}>
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
                                <h3>Have more questions?</h3>
                                </Tween>
                            )}
                        </Scene>
                        <Scene triggerElement="#call-to-action" duration={200}>
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
            </CallToActionSection>
        );
    }
}
