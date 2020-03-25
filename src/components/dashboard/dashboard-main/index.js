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
        return (
            <div className="dashboard-main container">
                <div className="box-fourty">
                    <div className="data-container">
                        <h3>Largest Spending</h3>
                        <p>Restaurants</p>
                        <p>$</p>
                    </div>
                    <div className="data-container">
                        <h3>Smallest Expense</h3>
                        <p>Sporting Goods</p>
                        <p>$</p>
                    </div>
                    <div className="data-container">
                        <h3>Largest Spending</h3>
                        <p>Restaurants</p>
                    </div>
                </div>
                <div className="data-container box-sixty">
                    <h3>Total Spending</h3>
                    <p>description of categories</p>
                    <CategoriesDonut data={altData} />
                    <List data={altData} />
                </div>
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