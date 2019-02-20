import React from 'react'
import { Header } from 'semantic-ui-react'
import { Image, Grid, Button } from 'semantic-ui-react'
class Welcome extends React.Component {
    state = { activeStep: "step1" }

    handleStepClick = (e, { name }) => this.setState({ activeStep: name })

    renderTopPageInfo = () => {
       return <Grid divided='vertically'>
            <Grid.Row columns={2}>
                <Grid.Column>
                    <Image src='/images/temp.png' size='large' />
                </Grid.Column>
                <Grid.Column className="refinance-left-info">
                    <Header as='h3' style={{ "fontSize": "50px", color: "blue" }}><br/></Header>
                    <Header as='h3' style={{ "fontSize": "40px", color: "blue" }}>Refinance.Reset.</Header>
                    <div style={{ "fontSize": "20px" }}>
                        Simplify your student loans and save money to reach your financial goals faster. Rates start at <strong>2.7% APR</strong>
                    </div>
                    <br/>
                    <Button basic color='orange'>TAKE THE QUIZ</Button>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    }
    
    renderTopPageInfo2 = () => {
        return <div style={{width: "100%"}} className="refinance-second-info">
        <br/>
        <Header as='h3' style={{ "fontSize": "40px", color: "blue" }}>Our Philosophy</Header>
        <br/>
            <Grid divided='vertically'>
                <Grid.Row columns={2}>
                    <Grid.Column >
                        <Header style={{ "fontSize": "30px"}}>You come first</Header>
                        <div style={{ "fontSize": "18px" }}>
                            Lorem ipsum dolor sit amet, quo stet viderer necessitatibus te, te graece perfecto adipiscing usu. Invidunt reprimique usu ne. Case facilisis similique sea ad. Te agam minim sententiae qui, te sed primis dissentiet. Te quo homero dignissim, vix ad cetero epicuri. Eos iriure postulant cu, ex eros scaevola liberavisse duo.

                        </div>
                    </Grid.Column>
                    <Grid.Column >
                        <Header style={{ "fontSize": "30px" }}>A force for good</Header>
                        <div style={{ "fontSize": "18px" }}>
                            Lorem ipsum dolor sit amet, quo stet viderer necessitatibus te, te graece perfecto adipiscing usu. Invidunt reprimique usu ne. Case facilisis similique sea ad. Te agam minim sententiae qui, te sed primis dissentiet. Te quo homero dignissim, vix ad cetero epicuri. Eos iriure postulant cu, ex eros scaevola liberavisse duo.
                        </div>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        
        </div>

    }

    clickButtonStyle = ()=> {
        console.log(this.state)
        return {"color": "orange", fontSize: "15px"}
    }

    renderStepByStep = () => {
        return <div>
            <br/>
        <Header as='h3' style={{ "fontSize": "30px" }}>Smarter Loan in 3 Steps</Header>
        <Grid divided='vertically'>
            <Grid.Row columns={2}>
                <Grid.Column>
                    <Image src='/images/temp.png' size='large' />
                </Grid.Column>
                    <Grid.Column className="refinance-second-info">
                        <br />
                <ul>
                    <div name="step1" style={this.state.activeStep === "step1"? this.clickButtonStyle() : null} >
                    <Button inverted color='orange' name="step1" onClick={this.handleStepClick} > 1 </Button> 
                        Check Your Rate in 2 minutes
                    </div>
                    Lorem ipsum dolor sit amet, quo stet viderer necessitatibus te, te graece perfecto adipiscing usu. Invidunt reprimique usu ne. 
                </ul>
                <br/>
                <ul>
                    <div name="step2" style={this.state.activeStep === "step2" ? this.clickButtonStyle() : null} >
                    <Button inverted color='orange' name="step2" onClick={this.handleStepClick} > 2 </Button> 
                         Accept your terms and get your money the next day
                    </div>
                    Lorem ipsum dolor sit amet, quo stet viderer necessitatibus te, te graece perfecto adipiscing usu. Invidunt reprimique usu ne. 
                </ul>
                <br />
                <ul>
                    <div name="step3" style={this.state.activeStep === "step3" ? this.clickButtonStyle() : null} >
                    <Button inverted color='orange' name="step3" onClick={this.handleStepClick} > 3 </Button> 
                        Repay: set it forward
                    </div>
                    Lorem ipsum dolor sit amet, quo stet viderer necessitatibus te, te graece perfecto adipiscing usu. Invidunt reprimique usu ne. 
                </ul>
                </Grid.Column>
            </Grid.Row>
        </Grid>
        </div>
    }
    
    render() {
        return <div className="all-info">
               <Header as='h1' style={{"fontSize": "50px"}}>Affluent</Header>
            <div className="refinance-info">
                <br/>
                {this.renderTopPageInfo()}
                <br/>
                {this.renderTopPageInfo2()}
                <br />
                {this.renderStepByStep()}
            </div>
        </div>
    }
}

export default Welcome