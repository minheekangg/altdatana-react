import React from 'react'
import { Header } from 'semantic-ui-react'
import { Image, Grid, Button } from 'semantic-ui-react'
class Welcome extends React.Component {

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
                    <Button basic color='orange' content='Orange'>TAKE THE QUIZ</Button>
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

    renderStepByStep = () => {

    }
    
    render() {
        return <div className="all-info">
               <Header as='h1' style={{"font-size": "50px"}}>Affluent</Header>
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