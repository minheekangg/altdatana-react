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
            transactions: []
        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleOnSuccess(publicToken, metadata) {
        // send token to client server
        console.log('header', headers);
        const param = {
            public_token: publicToken,
            ...metadata
        };
        console.log('param', param);
        axios(
            {
                method: "POST",
                url: "http://localhost:4090/plaid_token_exchange",
                data: param
            },
            headers
        );
    }

    handleOnExit() {
        // handle the case when your user exits Link
        // For the sake of this tutorial, we're not going to be doing anything here.
    }

    handleClick(res) {
        axios.get(`${API}/transactions`).then(res => {
            this.setState({ transactions: res.data }, ()=> {
                console.log('state', this.state);
            });
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
                <div>
                    <button onClick={this.handleClick}>Get Transactions</button>
                </div>
            </div>
        );
    }
}

export default Link;
