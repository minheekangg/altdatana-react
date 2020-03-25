import React from 'react';
import {response} from './response';

import CategoriesDonut from "./data/categories-donut";

export default class DashboardMain extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            transactions: response.transactions,
        }
    }

    render(){
        console.log('inside dashboard main transaction is', this.state.transactions);
        return (
            <div className="dashboard container">
                <CategoriesDonut data={response.accounts}/>
            </div>
        );
    }
}