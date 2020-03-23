var plaid = require("plaid");
var moment = require("moment");
require("dotenv").config();

var PLAID_CLIENT_ID = process.env.PLAID_CLIENT_ID;
var PLAID_SECRET = process.env.PLAID_SECRET;
var PLAID_PUBLIC_KEY = process.env.PLAID_PUBLIC_KEY;
console.log("env", PLAID_SECRET);
var PLAID_ENV = "sandbox";

var ACCESS_TOKEN = null;
var PUBLIC_TOKEN = null;
var ITEM_ID = null;

// Initialize the Plaid client
var client = new plaid.Client(
    PLAID_CLIENT_ID,
    PLAID_SECRET,
    PLAID_PUBLIC_KEY,
    plaid.environments[PLAID_ENV],
    { version: "2019-05-29", clientApp: "Plaid Quickstart" }
);

const receivePublicToken = (req, res) => {
    console.log('received', req);
    // First, receive the public token and set it to a variable
    let PUBLIC_TOKEN = req.body.public_token;
    console.log('public token is', req.body.public_token);
    // Second, exchange the public token for an access token
    client.exchangePublicToken(PUBLIC_TOKEN, function(error, tokenResponse) {
        console.log('response', tokenResponse, 'error?', error )
        ACCESS_TOKEN = tokenResponse.access_token;
        ITEM_ID = tokenResponse.item_id;
        res.json({
            access_token: ACCESS_TOKEN,
            item_id: ITEM_ID
        });
        console.log("access token below");
        console.log(ACCESS_TOKEN);
    });
};

const getTransactions = (req, res, next) => {
    // Pull transactions for the last 30 days
    // const ACCESS_TOKEN = ;
    let startDate = moment()
        .subtract(30, "days")
        .format("YYYY-MM-DD");
    let endDate = moment().format("YYYY-MM-DD");
    console.log("made it past variables", ACCESS_TOKEN);
    client.getTransactions(
        ACCESS_TOKEN,
        startDate,
        endDate,
        {
            count: 250,
            offset: 0
        },
        function(error, transactionsResponse) {
            res.json({ transactions: transactionsResponse });
            // TRANSACTIONS LOGGED BELOW!
            // They will show up in the terminal that you are running nodemon in.
            console.log('success', transactionsResponse);

            if (error) {
                console.log('error', error);
                next;
            }
        }
    );
};

module.exports = {
    receivePublicToken,
    getTransactions
};
