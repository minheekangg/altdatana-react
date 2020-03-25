import React from 'react';
import {response} from './response';

import CategoriesDonut from "./data/categories-donut";
import List from './data/list';
import { altData } from './response';

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
                <div className="data-container">
                    <h3>Total Spending</h3>
                    <p>description of categories</p>
                    <CategoriesDonut data={altData} />
                    <List data={altData} />
                </div>
            </div>
        );
    }
}