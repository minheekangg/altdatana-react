import React from 'react';

import dollarPicture from '../../images/lock.png';

export default class Stepper extends React.Component {
    render() {
        return (
            <section id="stepper" className="bg-grey">
                <div className="container">
                    <h2>Smarter Decisions,</h2>
                    <h2>Backed By Powerful Data</h2>
                    <div className="flex-box four-items">
                        <div className="step item">
                            <div className="stepper-img">
                                <img src={dollarPicture} alt="item1 temp" />
                            </div>

                            <h5>Easy Setup and Onboarding</h5>
                            <p>
                                Whether you integrate our API into your business ecosystem, or use our interface to face your client, our onboarding team is here for you.
                            </p>
                        </div>
                        <div className="step item">
                            <div className="stepper-img">
                                <img src={dollarPicture} alt="item1 temp" />
                            </div>

                            <h5>Encryption and Security</h5>
                            <p>
                                We don’t keep the borrower’s data, and we encrypt everything to ensure only your team has access. 
                            </p>
                        </div>
                        <div className="step item">
                            <div className="stepper-img">
                                <img src={dollarPicture} alt="item1 temp" />
                            </div>

                            <h5>Complete Customization</h5>
                            <p>
                                Create a credit application through us, or simply use our analyticals for your underwriting 
                            </p>
                        </div>
                        {/* <div className="step item">
                            <div className="stepper-img">
                                <img src={dollarPicture} alt="item1 temp" />
                            </div>

                            <h5>Low rates</h5>
                            <p>
                                Machine-learning underwriting allows us to cap
                                our maximum rate at [48]% APR.
                            </p>
                        </div> */}
                    </div>
                </div>
            </section>
        );
    }
}

