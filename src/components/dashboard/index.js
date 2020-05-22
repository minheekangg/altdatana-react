import React from 'react';
import styled from "styled-components";

import { connect } from "react-redux";

import DashboardMain from './dashboard-main';
import DashboardNav from './dashboard-nav';
import DashboardPanel from './dashboard-panel';

const DashboardWrapper = styled.div`
    background-color: #384586;
`;

const DashboardContent = styled.div`
    display: flex;
    max-height: calc(100vh - 125px);
`;

class Dashboard extends React.Component {
    render(){
        return (
            <DashboardWrapper id="dashboard">
                <DashboardNav />
                <DashboardContent className="container">
                    <DashboardPanel />
                    <DashboardMain />
                </DashboardContent>
            </DashboardWrapper>
        )
    }
}
const mapStateToProps = (state, ownProps) => ({
    dashboard: state.dashboard.transactions || [],
    ...ownProps
});

export default connect(mapStateToProps)(Dashboard);