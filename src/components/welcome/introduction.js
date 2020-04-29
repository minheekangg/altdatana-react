import React from 'react';
import tempimg from '../../images/temp.png';
import styled from "styled-components";

export default class Intro extends React.Component {
    render() {
        return (
            <section className="introduction">
                <div className="flex-box two-items container">
                    <div className="item right">
                        <img src={tempimg} alt="temporary img" />
                    </div>
                    <div className="item left">
                        <h2>
                            <div style={{ padding: 0 }}>We Are</div>
                            <div style={{ padding: 0 }}>Underwriting The Future</div>
                        </h2>
                        <p>Introducing alternative data </p>
                        <p>to lenders small or large.</p>
                    </div>
                </div>
            </section>
        );
    }
}

