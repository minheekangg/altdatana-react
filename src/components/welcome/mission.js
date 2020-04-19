import React from 'react';
import { Icon } from 'semantic-ui-react';

import { Controller, Scene } from "react-scrollmagic";
import { Tween } from "react-gsap";

export default class Mission extends React.Component {
    state = { openOne: false, openTwo: false }
    
    render() {
        const { openOne, openTwo } = this.state
        return (
            <section className="mission" >
                <div className="container tight">
                    <div className="mission-header">
                        <Controller>
                            <Scene triggerElement=".mission-header" duration={500} >
                                {progress => (
                                    <Tween
                                        from={{
                                            opacity: 0,
                                            yPercent: 10
                                        }}
                                        to={{
                                            opacity: 1
                                        }}
                                        ease="Back.easeOut"
                                        totalProgress={progress}
                                        paused
                                    >
                                        <h2 className="white">What we offer</h2>
                                    </Tween>
                                )}
                            </Scene>
                            <Scene triggerElement=".mission" duration={300}>
                                {progress => (
                                    <Tween
                                        from={{
                                            scaleX: 0,
                                            transformOrigin: "left"
                                        }}
                                        to={{
                                            scaleX: 1
                                        }}
                                        ease="Linear.ease"
                                        totalProgress={progress}
                                        paused
                                    >
                                        <hr />
                                    </Tween>
                                )}
                            </Scene>
                        </Controller>
                    </div>
                    <Controller>
                        <Scene triggerElement=".mission h2" duration={500}>
                            {progress => (
                                <Tween
                                    from={{
                                        opacity: 0,
                                    }}
                                    to={{
                                        opacity: 1
                                    }}
                                    ease="Back.easeOut"
                                    totalProgress={progress}
                                    paused
                                >
                                    <p>
                                        Still underwriting your borrowers with W2s and paystubs? Modernize your business with advanced analytics on your client’s payment behavior. 
                                    </p>
                                    <ul>
                                        <li onClick={() => this.setState({openOne: !openOne})} className={openOne ? 'open' : 'closed'}>
                                            <h3>
                                                <Icon name={openOne ? 'minus circle' : 'plus circle'} />
                                                Moral Lending</h3>
                                            <p>
                                                No more triple-digit APR for emergency advances
                                                and financing. Everyone faces cash flow issues,
                                                and we are here to provide support without
                                                impossible commitments.
                                            </p>
                                        </li>
                                        <li onClick={() => this.setState({ openTwo: !openTwo })} className={openTwo ? 'open' : 'closed'}>
                                            
                                            <h3> 
                                                <Icon name={openTwo ? 'minus circle' : 'plus circle'}  />
                                                Fostering Stability
                                                </h3>
                                            <p>
                                                Your financial troubles are our problem to
                                                solve. We are here to put you on the path to
                                                financial freedom. We promise transparent terms,
                                                no hard credit checks, and support to enhance
                                                your financial well-being
                                    </p>
                                        </li>
                                    </ul>
                                    
                                    
                                </Tween>
                            )}
                        </Scene>
                    </Controller>
                </div>
            </section>
        );
    }
}

