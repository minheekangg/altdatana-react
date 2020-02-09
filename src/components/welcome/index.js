import React from 'react';

import Intro from './introduction';
import Mission from './mission';
import CallToAction from '../call-to-action';
import Stepper from './stepper';

const Welcome = () => (
        <div id="welcome">
                <Intro />
                <Mission />
                <Stepper />
                <CallToAction type="apply" />
        </div>
);

export default Welcome;