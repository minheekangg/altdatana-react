import React from "react";
import styled from "styled-components";
import { Controller, Scene } from "react-scrollmagic";
import { Tween, Timeline } from "react-gsap";

const TweenStyled = styled.div`
    // .section {
    //     height: 100vh;
    // }

    .tween {
        width: 100%;
        height: 100vh;
        // margin: 0 !important;
        // position: relative;
        left: 0;
    }

    .stagger {
        width: 50px;
        height: 50px;
        left: 700px;
        background-color: green;
        position: relative;
    }
`;

const TweenComponent = () => (
    <TweenStyled>
        <div className="section" />
        <div id="trigger" />
        <Controller>
            <Scene triggerElement="#trigger" duration={600}>
                {progress => (
                    <Tween
                        from={{
                            top: '100vh',
                            opacity: 0,
                        }}
                        to={{
                            top: 0,
                            opacity:1,
                            backgroundColor: 'blue',
                        }}
                        ease="Strong.easeOut"
                        totalProgress={progress}
                        paused
                    >
                        <div className="tween">Pin Test</div>
                    </Tween>
                )}
            </Scene>
        </Controller>
        <div className="section" />
    </TweenStyled>
);

export default TweenComponent;
