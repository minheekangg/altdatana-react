import React from 'react';

// import dollarPicture from '../../images/lock.png';

export default class Stepper extends React.Component {
    render() {
        return (
            <section id="stepper" className="bg-navy">
                <div className="container">
                    <h3>Smarter Decisions, Backed By Powerful Data</h3>
                    <div className="flex-box four-items">
                        <div className="step item">
                            <div className="stepper-img">
                            </div>

                            <h5>Easy Setup and Onboarding</h5>
                            <p>
                                Whether you integrate our API into your business ecosystem, or use our interface to face your client, our onboarding team is here for you.
                            </p>
                        </div>
                        <div className="step item">
                            <div className="stepper-img">
                            </div>

                            <h5>Encryption and Security</h5>
                            <p>
                                We don’t keep the borrower’s data, and we encrypt everything to ensure only your team has access. 
                            </p>
                        </div>
                        <div className="step item">
                            <div className="stepper-img">
                            </div>

                            <h5>Complete Customization</h5>
                            <p>
                                Create a credit application through us, or simply use our analyticals for your underwriting 
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

