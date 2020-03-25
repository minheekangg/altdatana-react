import React from 'react';

import { connect } from "react-redux";

import Link from './link';

class Dashboard extends React.Component {
    render(){
        return (
            <div>
                <Link />
            </div>
        )
    }
}
const mapStateToProps = (state, ownProps) => ({
    dashboard: state.dashboard.transactions || [],
    ...ownProps
});

export default connect(mapStateToProps)(Dashboard);