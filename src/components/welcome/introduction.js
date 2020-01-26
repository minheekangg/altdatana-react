import React from 'react';
import tempimg from '../../images/temp.png';
import { Button } from 'semantic-ui-react';

export default class Intro extends React.Component {
    render() {
        return (
            <section className="introduction">
                <div className="flex-box two-items container">
                    <div class="item right">
                        <img src={tempimg} alt="temporary img" />
                        {/* TODO: replace image later */}
                    </div>
                    <div class="item left">
                        <h2>
                            <div style={{ padding: 0 }}>Short Term Loans</div>
                            <div style={{ padding: 0 }}>Reinvented</div>
                        </h2>
                        <p>We understand.</p>
                        <p>Everyone has emergencies</p>
                        <Button className="primary-button bigger">Apply Now</Button>
                    </div>
                </div>
            </section>
        );
    }
}

