import React from 'react';

import dollarPicture from '../../images/dollar.png';

export default class Stepper extends React.Component {
    render() {
        return (
            <section className="stepper">
                <div className="container">
                    <div className="flex-box four-items">
                        <div className="step item">
                            <div className="stepper-img">
                                <img src={dollarPicture} alt="item1 temp"/>
                            </div>
                            hi
                        </div>
                        <div className="step item">
                            second
                        </div>
                        <div className="step item">
                            hi
                        </div>
                        <div className="step item">
                           fourth
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

