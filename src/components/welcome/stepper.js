import React from 'react';

import dollarPicture from '../../images/lock.png';

export default class Stepper extends React.Component {
    render() {
        return (
            <section id="stepper">
                <div className="container">
                    <h2>Why we're better</h2>
                    <div className="flex-box four-items">
                        <div className="step item">
                            <div className="stepper-img">
                                <img src={dollarPicture} alt="item1 temp" />
                            </div>

                            <h5>Low rates</h5>
                            <p>
                                Machine-learning underwriting allows us to cap
                                our maximum rate at [48]% APR.
                            </p>
                        </div>
                        <div className="step item">
                            <div className="stepper-img">
                                <img src={dollarPicture} alt="item1 temp" />
                            </div>

                            <h5>Low rates</h5>
                            <p>
                                Machine-learning underwriting allows us to cap
                                our maximum rate at [48]% APR.
                            </p>
                        </div>
                        <div className="step item">
                            <div className="stepper-img">
                                <img src={dollarPicture} alt="item1 temp" />
                            </div>

                            <h5>Low rates</h5>
                            <p>
                                Machine-learning underwriting allows us to cap
                                our maximum rate at [48]% APR.
                            </p>
                        </div>
                        <div className="step item">
                            <div className="stepper-img">
                                <img src={dollarPicture} alt="item1 temp" />
                            </div>

                            <h5>Low rates</h5>
                            <p>
                                Machine-learning underwriting allows us to cap
                                our maximum rate at [48]% APR.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

