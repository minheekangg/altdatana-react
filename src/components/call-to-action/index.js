import React from "react";

import { Button } from "semantic-ui-react";

import { Controller, Scene } from "react-scrollmagic";
import { Tween } from "react-gsap";

const header = {
    'apply': 'Ready to get started?',
    'question': 'Questions?'
}

const content = {
    'apply': [`Give us a try and check your rate. No credit score checks.`, `No commitments until you accept the loan terms.`],
    'question': [`If you have questions about applying for a cash advance or what else we offer, please get in touch with us!`]
}

const action = {
    'apply': (
        <Button className="primary-button bigger">
            Apply Now
        </Button>
    ),
    'question': (
        <Button className="primary-button bigger">
            Email Now
        </Button>
    )
}

export default class CTA extends React.Component {
    render() {
        const { type } = this.props;

        if ( !type ) {
            return null;
        }

        return (
            <section className="call-to-action">
                <div className="container tighter">
                    <Controller>
                        <Scene triggerElement=".call-to-action " duration={200}>
                            {progress => (
                                <Tween
                                    from={{
                                        opacity: 0,
                                        yPercent: 50
                                    }}
                                    to={{
                                        yPercent:0,
                                        opacity: 1
                                    }}
                                    ease="Back.easeOut"
                                    totalProgress={progress}
                                    paused
                                >
                                <h2>{!!header[type] && header[type]}</h2>
                                </Tween>
                            )}
                        </Scene>
                        <Scene triggerElement=".call-to-action " duration={400} pin={false}>
                            {progress => (
                                <Tween
                                    from={{
                                        opacity: 0,
                                        yPercent: 50
                                    }}
                                    to={{
                                        yPercent:0,
                                        opacity: 1
                                    }}
                                    ease="Back.easeOut"
                                    totalProgress={progress}
                                    paused
                                >
                                    {!!content[type] && content[type].map(t=> {
                                        return <p>{t}</p>
                                    })}
                                </Tween>
                            )}
                        </Scene>
                        <Scene duration={200}>
                            {progress => (
                                <Tween
                                    from={{
                                        opacity: 0,
                                        yPercent: 50
                                    }}
                                    to={{
                                        yPercent:0,
                                        opacity: 1
                                    }}
                                    ease="Back.easeOut"
                                    totalProgress={progress}
                                    paused
                                >
                                   {!!action[type] && action[type]}
                                </Tween>
                            )}
                        </Scene>
                        
                    </Controller>
                </div>
            </section>
        );
    }
}
