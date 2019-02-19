import React from 'react'
import { Header } from 'semantic-ui-react'
import { Image } from 'semantic-ui-react'
class Welcome extends React.Component {

    render() {
        return <div className="all-info">
               <Header as='h1' style={{"font-size": "50px"}}>Affluent</Header>
            <div className="refinance-info">
            <Image className="refinance-info" src='/images/temp.png' size='large'  />
                <div className="refinance-left-info">
                TEST
                </div>

            </div>
        </div>
    }
}

export default Welcome