import React from 'react';
import {response} from './response';

export default class DashboardMain extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            transactions: response.transactions,
        }
    }

    render(){
        console.log('inside dashboard main transaction is', this.state.transactions);
        return <div>Dashboard goes here</div>
    }
}