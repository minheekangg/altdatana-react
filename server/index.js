const express = require("express");
const bodyParser = require('body-parser');
const app = express();

var cors = require("cors");
app.use(cors());

const PORT = 4090;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var plaid = require("plaid");
require("dotenv").config();
var PLAID_CLIENT_ID = process.env.PLAID_CLIENT_ID;
var PLAID_SECRET = process.env.PLAID_SECRET;
var PLAID_PUBLIC_KEY = process.env.PLAID_PUBLIC_KEY;
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
    // {public_token: "public-sandbox-4c9fb228-0809-443d-a687-5d4afa83c008"},
    { version: "2019-05-29", clientApp: "Plaid Quickstart" }
);


app.post("/plaid_token_exchange", async (req, res) => {
    console.log("body", req.body, 'client is', client);
    try {
        const { public_token } = req.body;

        const { access_token } = await client
            .exchangePublicToken(public_token)
            .catch(console.error);
            console.log('access token is', access_token);

        const { accounts, item } = await client
            .getAccounts(access_token)
            .catch(console.error);

        const user = await User.findOne().exec();

        const plaidItem = await new PlaidItem({
            userId: user._id,
            availableProducts: item.available_products,
            billedProducts: item.billed_products,
            institutionId: item.institution_id,
            itemId: item.item_id,
            webhook: item.webhook
        }).save();

        console.log({ user, plaidItem });

        const savedAccounts = accounts.map(
            async account =>
                await new PlaidAccount({
                    plaidItemId: plaidItem._id,
                    accountId: account.account_id,
                    mask: account.mask,
                    balances: account.balances,
                    name: account.name,
                    officialName: account.official_name,
                    subtype: account.subtype,
                    type: account.type
                }).save()
        );

        console.log({
            savedAccounts
        });
    } catch (e) {
        console.error(e);
    }
});

// const {
//     receivePublicToken,
//     getTransactions,
//     tokenExchange
// } = require("./controllers/controller");

// // Get the public token and exchange it for an access token
// app.post("/auth/public_token", receivePublicToken);

// // test
// app.post("/plaid_token_exchange", tokenExchange);
// // Get Transactions
// app.get("/transactions", getTransactions);

app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
});
