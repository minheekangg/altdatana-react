import React from 'react';
import tempimg from '../../images/temp.png';
import { Button } from 'semantic-ui-react';

export default class WelcomeIntroduction extends React.Component {
    render() {
        return (
            <section class="flex-box two-items header introduction container">
                <div class="item right">
                    <img src={tempimg} alt="temporary img" />
                    {/* TODO: replace image later */}
                </div>
                <div class="item left">
                    <h2>
                        <span style={{ padding: 0 }}>Short Term Loans</span>
                        <span style={{ padding: 0 }}>Reinvented</span>
                    </h2>
                    <p>We understand.</p>
                    <p>Everyone has emergencies</p>
                    <Button className="primary-button">Apply Now</Button>
                </div>
            </section>
        );
    }
}

