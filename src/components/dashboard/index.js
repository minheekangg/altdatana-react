import React from 'react';
import styled from "styled-components";

import { connect } from "react-redux";

import DashboardMain from './dashboard-main';
import DashboardNav from './dashboard-nav';

const DashboardWrapper = styled.div`
    background-color: #384586;
    color: white;
`;

class Dashboard extends React.Component {
    render(){
        return (
            <DashboardWrapper id="dashboard">
                <DashboardNav />
                <DashboardMain />
            </DashboardWrapper>
        )
    }
}
const mapStateToProps = (state, ownProps) => ({
    dashboard: state.dashboard.transactions || [],
    ...ownProps
});

export default connect(mapStateToProps)(Dashboard);