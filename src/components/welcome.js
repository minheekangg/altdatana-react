import React from 'react';
import { Button } from 'semantic-ui-react';

export default class Welcome extends React.Component {
    render() {
        return (
            <div class="container" id="welcome" >
                <section class="flex-box two-items header introduction">
                    <div class="item left">
                        <h2>Short Term Loans Reinvented</h2>
                        <p>We understand.</p>
                        <p>Everyone has emergencies</p>
                        <Button className="primary-button">Get a quote</Button>
                    </div>
                    <div class="item right">

                    </div>
                </section>

            </div>
        )
    }
}