import React, { Component } from "react";
import { PlaidLink } from "react-plaid-link";
import axios from "axios";

const API = process.env.REACT_APP_API_ENDPOINT;
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
                url: `${API}/auth/public_token`,
                data: param
            },
            headers
        )
        .then(success=>{
            this.setState({authenticatedUser: true})
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
            this.setState({ authenticatedUser: true })
            console.log(res);
            this.props.fetchTransactions( res.data && res.data.transactions);
        });
    }

    render() {
        return (
            <div className="plaid-buttons">
                <PlaidLink
                    clientName="React Plaid Setup"
                    env="sandbox"
                    product={["auth", "transactions"]}
                    publicKey={process.env.REACT_APP_PLAID_PUBLIC_KEY}
                    onExit={this.handleOnExit}
                    onSuccess={this.handleOnSuccess}
                    className="test"
                >
                    Plaid
                </PlaidLink>
                <button onClick={this.handleClick}>
                    +
                </button>
            </div>
        );
    }
}

export default Link;
