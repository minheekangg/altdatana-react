import React from 'react';
import { Icon } from 'semantic-ui-react';
import tempimg from '../../images/shark.png';

import { Controller, Scene } from "react-scrollmagic";
import { Tween } from "react-gsap";

export default class Mission extends React.Component {
    state = { openOne: false, openTwo: false, openThree : false }
    
    render() {
        const { openOne, openTwo, openThree } = this.state
        return (
            <section className="mission" >
                <div className="flex-box container">
                    <div className="item left">
                        <img src={tempimg} alt="temporary img" />
                    </div>
                    <div className="item right">
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
                                                        Borrower Behavioral Analysis</h3>
                                                    <p>
                                                        Analyze your borrower’s payment history to predict their creditworthiness.
                                                    </p>
                                                </li>
                                                <li onClick={() => this.setState({ openTwo: !openTwo })} className={openTwo ? 'open' : 'closed'}>
                                                    
                                                    <h3> 
                                                        <Icon name={openTwo ? 'minus circle' : 'plus circle'}  />
                                                        Seamless Integration 
                                                        </h3>
                                                    <p>
                                                        We stay behind the scenes, so you can build the client relationship directly
                                                    </p>
                                                </li>
                                                <li onClick={() => this.setState({ openThree: !openThree })} className={openThree ? 'open' : 'closed'}>
                                                    
                                                    <h3> 
                                                        <Icon name={openThree ? 'minus circle' : 'plus circle'}  />
                                                        Stochastic Simulations
                                                        </h3>
                                                    <p>
                                                        Model a borrower’s behavior against your loan terms, giving you confidence in your underwrite
                                                    </p>
                                                </li>
                                            </ul>
                                            
                                            
                                        </Tween>
                                    )}
                                </Scene>
                            </Controller>
                        </div>
                    </div>
            </section>
        );
    }
}

