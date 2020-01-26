import React from 'react';

import { Button } from "semantic-ui-react";

export default class CallToAction extends React.Component {
    render() {
        return (
            <section className="call-to-action">
                <div className="container tightest">
                    <h2>Ready to get started?</h2>
                    <p>
                        Give us a try and check your rate. No credit
                        score checks.
                    </p>
                    <p>
                        No commitments until you accept the loan
                        terms.
                    </p>
                    <Button className="primary-button bigger">
                        Apply Now
                    </Button>
                </div>
            </section>
        );
    }
}

