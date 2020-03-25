import React from 'react';
import { Progress } from "semantic-ui-react";

import { response, altData } from "./response";
import CategoriesDonut from "./data/categories-donut";
import List from './data/list';

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
                    <div className="data-container stat-card">
                        <h3>Largest Spending</h3>
                        <p>Restaurants</p>
                        <p>$51,338</p>
                        <Progress percent={44} progress />
                    </div>
                    <div className="data-container stat-card">
                        <h3>Smallest Spending</h3>
                        <p>Sporting Goods</p>
                        <p>$12,158</p>
                        <Progress percent={10} progress />
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