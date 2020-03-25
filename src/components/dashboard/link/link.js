import React, { Component } from "react";
import { PlaidLink } from "react-plaid-link";
import axios from "axios";

const API = process.env.REACT_APP_API_ENDPOINT;
console.log('api', API);

const headers = {
    'Content-Type': 'application/json',
}

class Link extends Component {
    constructor() {
        super();

        this.state = {
            authenticatedUser: false,
        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleOnSuccess(publicToken, metadata) {
        // send token to client server
        const param = {
            public_token: publicToken
        };
        axios(
            {
                method: "POST",
                url: "http://localhost:4090/auth/public_token",
                data: param
            },
            headers
        )
        .then(success=>{
            this.setState({authenticatedUser: true}, ()=> console.log('done', success))
        })
        .catch(err => {
            console.log("error", err);
        });
    }

    handleOnExit() {
        // this.setState({authenticatedUser: false});
    }

    handleClick(res) {
        axios.get(`${API}/transactions`).then(res => {
            this.props.fetchTransactions( res.data && res.data.transactions);
        });
    }

    render() {
        return (
            <div>
                <PlaidLink
                    clientName="React Plaid Setup"
                    env="sandbox"
                    product={["auth", "transactions"]}
                    publicKey={process.env.REACT_APP_PLAID_PUBLIC_KEY}
                    onExit={this.handleOnExit}
                    onSuccess={this.handleOnSuccess}
                    className="test"
                >
                    Open Link and connect your bank!
                </PlaidLink>
                <button onClick={this.handleClick}>
                    Get Transactions
                </button>
            </div>
        );
    }
}

export default Link;
