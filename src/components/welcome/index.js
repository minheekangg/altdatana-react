import React from 'react';
import styled from 'styled-components';
import { Controller, Scene } from 'react-scrollmagic';

import WelcomeIntroduction from './introduction';

const SectionWipesStyled = styled.div`
    overflow: hidden;

    .panel {
        height: 100vh;
        width: 100vw;
        text-align: center;
        margin: 0 !important;
    }

    .panel span {
        position: relative;
        display: block;
        overflow: visible;
        padding: 80px 0;
    }

    .panel.first-section {
        height: calc(100vh - 75px);
    }

    .panel.blue {
        background-color: #3883d8;
    }

    .panel.purple {
        background-color: #524582;
    }

    .panel.green {
        background-color: #22d659;
        margin-bottom: 800px;
    }

    .panel.bordeaux {
        background-color: #953543;
    }
`;


const Welcome = () => (
        <SectionWipesStyled id="welcome">
                <Controller globalSceneOptions={{ triggerHook: 'onLeave' }}>
                        <Scene pin>
                                <div className="panel first-section">
                                        <span>
                                                <WelcomeIntroduction />        
                                        </span>
                                </div>
                        </Scene>
                        <Scene pin>
                                <div className="panel purple"><span>Panel</span></div>
                        </Scene>
                        <Scene pin>
                                <div className="panel green"><span>Panel</span></div>
                        </Scene>
                        <Scene pin>
                                <div className="panel bordeaux"><span>Panel</span></div>
                        </Scene>
                </Controller>
        </SectionWipesStyled>
);

export default Welcome;