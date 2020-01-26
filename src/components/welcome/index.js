import React from 'react';

import Intro from './introduction';
import Mission from './mission';
import CallToAction from './call-to-action';


const Welcome = () => (
        <div id="welcome">
                <Intro />
                <Mission />
                <CallToAction />
        </div>
);

export default Welcome;