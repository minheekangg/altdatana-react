import React from 'react';
import { Progress } from "semantic-ui-react";

import { response, altData } from "./response";
import CategoriesDonut from "./data/categories-donut";
import BarChart from "./data/bar-chart";
import RadiarBarChart from './data/radiar-bar-chart';
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
                <div className="data-container" id="recap-banner">
                    During this month you spent <strong>$1000</strong>, which is <span>+15%</span> from last year.
                </div>
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
                    <div className="data-container stat-card">
                        <h3>One more Spending</h3>
                        <p>Sporting Goods</p>
                        <p>$12,158</p>
                        <Progress percent={99} progress />
                    </div>
                </div>
                <div className="data-container box-sixty" style={{height:'100%'}}>
                    <h3>Total Spending</h3>
                    <p>description of categories</p>
                    <CategoriesDonut data={altData} />
                    <List data={altData} />
                </div>
                <div className="data-container box-full">
                    <h3>TY/LY Spending</h3>
                    <p>description of categories</p>
                    <div className="inline-charts">
                        <RadiarBarChart />
                        <RadiarBarChart />
                        <RadiarBarChart />
                        <RadiarBarChart />
                        <RadiarBarChart />
                        <RadiarBarChart />
                    </div>
                </div>
                <div className="data-container box-full">
                    <h3>Total Spending</h3>
                    <p>description of categories</p>
                    <BarChart />
                </div>
            </div>
        );
    }
}