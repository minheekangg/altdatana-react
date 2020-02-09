import React from 'react';

import CallToAction from '../call-to-action';

const About = () => (
    <div id="about" >
        <div className="container tight">
            <section id="mission">
                <p className="section-tag">Our mission</p >
                <h2>Challenging <br/> Consumer Finance</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </section>
        </div>
        <div className="bg-grey">
            <div className="container tight">
                <section className="about-list">
                    <div className="flex-box two-items container">
                        <div className="item right">
                            <h3 >
                                Word from Our Leadership
                            </h3>
                        </div>
                        <div className="item left">
                            <div className="mission-list">
                                <div className="mission-card">
                                    <p className="section-tag bold">Accessible Financing</p>
                                    <p>We position ourselves as an alternative option to the payday or personal loan industry. Affluent provides simple financing options with quick access to cash.</p>
                                </div>
                                <div className="mission-card">
                                    <p className="section-tag bold">Accessible Financing</p>
                                    <p>We position ourselves as an alternative option to the payday or personal loan industry. Affluent provides simple financing options with quick access to cash.</p>
                                </div>
                                <div className="mission-card">
                                    <p className="section-tag bold">Accessible Financing</p>
                                    <p>We position ourselves as an alternative option to the payday or personal loan industry. Affluent provides simple financing options with quick access to cash.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
        <CallToAction type="question"/>
    </div>
);

export default About;