import { connect } from "react-redux";
import Link from "./link";
import { fetchTransactions } from "../../../redux/actions";

const mapStateToProps = (state, ownProps) => ({
    dashboard: state.dashboard.transactions || [],
    ...ownProps
});

export default connect(mapStateToProps, { fetchTransactions })(Link);
