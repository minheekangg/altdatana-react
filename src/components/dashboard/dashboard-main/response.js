// // import { connect } from "react-redux";
// import React from 'react';
// import DashboardMain from "./dashboard-main";

export const response = {
    accounts: [
        {
            account_id: 'Z7bVrelQeotoojQm1QWyS1QjBb8BKAFg6j5xG',
            balances: [Object],
            mask: '0000',
            name: 'Plaid Checking',
            official_name: 'Plaid Gold Standard 0% Interest Checking',
            subtype: 'checking',
            type: 'depository'
        },
        {
            account_id: 'MqlMboWroaCaaerq6roJSjBW1Ng1qRF9JoBmR',
            balances: [Object],
            mask: '1111',
            name: 'Plaid Saving',
            official_name: 'Plaid Silver Standard 0.1% Interest Saving',
            subtype: 'savings',
            type: 'depository'
        },
        {
            account_id: '1ZJpKmXNmoIaabopdomgSEqoQBeQpGF58wgD9',
            balances: [Object],
            mask: '2222',
            name: 'Plaid CD',
            official_name: 'Plaid Bronze Standard 0.2% Interest CD',
            subtype: 'cd',
            type: 'depository'
        },
        {
            account_id: 'LlMZnoEKodTddrKlDK4guRVoGPpGNMiPXJb3K',
            balances: [Object],
            mask: '3333',
            name: 'Plaid Credit Card',
            official_name: 'Plaid Diamond 12.5% APR Interest Credit Card',
            subtype: 'credit card',
            type: 'credit'
        },
        {
            account_id: 'pwgVE9oK9rIPPwkqek6JsB1wlmdlKzcLZx4Xo',
            balances: [Object],
            mask: '4444',
            name: 'Plaid Money Market',
            official_name: 'Plaid Platinum Standard 1.85% Interest Money Market',
            subtype: 'money market',
            type: 'depository'
        },
        {
            account_id: 'oEbV89pq9KIRRQklokD5hVaQ81p8BriRd3ave',
            balances: [Object],
            mask: '5555',
            name: 'Plaid IRA',
            official_name: null,
            subtype: 'ira',
            type: 'investment'
        },
        {
            account_id: 'g9pVQkjnkRSRRXNvaNrqhQDXv6dvZbhgxXbyx',
            balances: [Object],
            mask: '6666',
            name: 'Plaid 401k',
            official_name: null,
            subtype: '401k',
            type: 'investment'
        },
        {
            account_id: '8K6GaqBMqniWWxr4RroVTNQo9WG9KeuwbyANy',
            balances: [Object],
            mask: '7777',
            name: 'Plaid Student Loan',
            official_name: null,
            subtype: 'student',
            type: 'loan'
        }
    ],
    item: {
        available_products: [
            'assets',
            'balance',
            'credit_details',
            'identity',
            'income',
            'liabilities'
        ],
        billed_products: ['auth', 'transactions'],
        consent_expiration_time: null,
        error: null,
        institution_id: 'ins_1',
        item_id: '6lXWxdrQdATppNALGAnJHQ3W8bwpMgUg9AWjG',
        webhook: ''
    },
    request_id: 'fvWk4d4NpflPmQN',
    total_transactions: 19,
    transactions: [
        {
            account_id: 'LlMZnoEKodTddrKlDK4guRVoGPpGNMiPXJb3K',
            account_owner: null,
            amount: 2078.5,
            authorized_date: null,
            category: [Array],
            category_id: '16000000',
            date: '2020-03-25',
            iso_currency_code: 'USD',
            location: [Object],
            name: 'AUTOMATIC PAYMENT - THANK',
            payment_channel: 'other',
            payment_meta: [Object],
            pending: false,
            pending_transaction_id: null,
            transaction_code: null,
            transaction_id: 'apkV49xg9nInn9d1edZNUagzRg8awVi7B9N8M',
            transaction_type: 'special',
            unofficial_currency_code: null
        },
        {
            account_id: 'LlMZnoEKodTddrKlDK4guRVoGPpGNMiPXJb3K',
            account_owner: null,
            amount: 500,
            authorized_date: null,
            category: [Array],
            category_id: '13005032',
            date: '2020-03-25',
            iso_currency_code: 'USD',
            location: [Object],
            name: 'KFC',
            payment_channel: 'in store',
            payment_meta: [Object],
            pending: false,
            pending_transaction_id: null,
            transaction_code: null,
            transaction_id: 'dEgVj84W8yIyy3l18ld6Sp7Lz7ypJXCZj3kvK',
            transaction_type: 'place',
            unofficial_currency_code: null
        },
        {
            account_id: 'LlMZnoEKodTddrKlDK4guRVoGPpGNMiPXJb3K',
            account_owner: null,
            amount: 500,
            authorized_date: null,
            category: [Array],
            category_id: '19046000',
            date: '2020-03-25',
            iso_currency_code: 'USD',
            location: [Object],
            name: 'Madison Bicycle Shop',
            payment_channel: 'in store',
            payment_meta: [Object],
            pending: false,
            pending_transaction_id: null,
            transaction_code: null,
            transaction_id: 'xlxV95b45NT661zNjzlqtpvwGvmprACn3E1xw',
            transaction_type: 'place',
            unofficial_currency_code: null
        },
        {
            account_id: 'MqlMboWroaCaaerq6roJSjBW1Ng1qRF9JoBmR',
            account_owner: null,
            amount: 25,
            authorized_date: null,
            category: [Array],
            category_id: '16001000',
            date: '2020-03-16',
            iso_currency_code: 'USD',
            location: [Object],
            name: 'CREDIT CARD 3333 PAYMENT *//',
            payment_channel: 'other',
            payment_meta: [Object],
            pending: false,
            pending_transaction_id: null,
            transaction_code: null,
            transaction_id: 'zKJqR9yP9jiEE3yNnyvDSyDJMDgy3BUo5GVRV',
            transaction_type: 'special',
            unofficial_currency_code: null
        },
        {
            account_id: 'Z7bVrelQeotoojQm1QWyS1QjBb8BKAFg6j5xG',
            account_owner: null,
            amount: 5.4,
            authorized_date: null,
            category: [Array],
            category_id: '22016000',
            date: '2020-03-16',
            iso_currency_code: 'USD',
            location: [Object],
            name: 'Uber',
            payment_channel: 'in store',
            payment_meta: [Object],
            pending: false,
            pending_transaction_id: null,
            transaction_code: null,
            transaction_id: 'JLkeA9gl93T33XlnWlE6SRaDzaVRbdCdDLAa6',
            transaction_type: 'special',
            unofficial_currency_code: null
        },
        {
            account_id: 'pwgVE9oK9rIPPwkqek6JsB1wlmdlKzcLZx4Xo',
            account_owner: null,
            amount: 5850,
            authorized_date: null,
            category: [Array],
            category_id: '21006000',
            date: '2020-03-15',
            iso_currency_code: 'USD',
            location: [Object],
            name: 'ACH Electronic CreditGUSTO PAY 123456',
            payment_channel: 'other',
            payment_meta: [Object],
            pending: false,
            pending_transaction_id: null,
            transaction_code: null,
            transaction_id: 'QBzovmbxmjUjjwxodxZQI4LV6Ld4mlup5d19G',
            transaction_type: 'special',
            unofficial_currency_code: null
        },
        {
            account_id: '1ZJpKmXNmoIaabopdomgSEqoQBeQpGF58wgD9',
            account_owner: null,
            amount: 1000,
            authorized_date: null,
            category: [Array],
            category_id: '21007000',
            date: '2020-03-15',
            iso_currency_code: 'USD',
            location: [Object],
            name: 'CD DEPOSIT .INITIAL.',
            payment_channel: 'other',
            payment_meta: [Object],
            pending: false,
            pending_transaction_id: null,
            transaction_code: null,
            transaction_id: '31Pgzdljd8Ioov1Lm1PESyR5DRPyN7UqDaAkr',
            transaction_type: 'special',
            unofficial_currency_code: null
        },
        {
            account_id: 'LlMZnoEKodTddrKlDK4guRVoGPpGNMiPXJb3K',
            account_owner: null,
            amount: 78.5,
            authorized_date: null,
            category: [Array],
            category_id: '17018000',
            date: '2020-03-14',
            iso_currency_code: 'USD',
            location: [Object],
            name: 'Touchstone Climbing',
            payment_channel: 'in store',
            payment_meta: [Object],
            pending: false,
            pending_transaction_id: null,
            transaction_code: null,
            transaction_id: '4L68BGq7GETLLwo4xokWuyoeVo7yLqUdQxoXK',
            transaction_type: 'place',
            unofficial_currency_code: null
        },
        {
            account_id: 'Z7bVrelQeotoojQm1QWyS1QjBb8BKAFg6j5xG',
            account_owner: null,
            amount: -500,
            authorized_date: null,
            category: [Array],
            category_id: '22001000',
            date: '2020-03-14',
            iso_currency_code: 'USD',
            location: [Object],
            name: 'United Airlines',
            payment_channel: 'other',
            payment_meta: [Object],
            pending: false,
            pending_transaction_id: null,
            transaction_code: null,
            transaction_id: 'kEw5LkZ9kVIXXzMJRMwmSkMegMJkoBUWlb9N5',
            transaction_type: 'special',
            unofficial_currency_code: null
        },
        {
            account_id: 'Z7bVrelQeotoojQm1QWyS1QjBb8BKAFg6j5xG',
            account_owner: null,
            amount: 12,
            authorized_date: null,
            category: [Array],
            category_id: '13005032',
            date: '2020-03-13',
            iso_currency_code: 'USD',
            location: [Object],
            name: "McDonald's",
            payment_channel: 'in store',
            payment_meta: [Object],
            pending: false,
            pending_transaction_id: null,
            transaction_code: null,
            transaction_id: 'lE7VpdMvdwIWWoDJyDQqTJ7ve7xJKXcZVv4jV',
            transaction_type: 'place',
            unofficial_currency_code: null
        },
        {
            account_id: 'Z7bVrelQeotoojQm1QWyS1QjBb8BKAFg6j5xG',
            account_owner: null,
            amount: 4.33,
            authorized_date: null,
            category: [Array],
            category_id: '13005043',
            date: '2020-03-13',
            iso_currency_code: 'USD',
            location: [Object],
            name: 'Starbucks',
            payment_channel: 'in store',
            payment_meta: [Object],
            pending: false,
            pending_transaction_id: null,
            transaction_code: null,
            transaction_id: 'qwlVW9gr9zI99koKyo8bI7LmQLJ7w4IdzqE9q',
            transaction_type: 'place',
            unofficial_currency_code: null
        },
        {
            account_id: 'Z7bVrelQeotoojQm1QWyS1QjBb8BKAFg6j5xG',
            account_owner: null,
            amount: 89.4,
            authorized_date: null,
            category: [Array],
            category_id: '13005000',
            date: '2020-03-12',
            iso_currency_code: 'USD',
            location: [Object],
            name: 'SparkFun',
            payment_channel: 'in store',
            payment_meta: [Object],
            pending: false,
            pending_transaction_id: null,
            transaction_code: null,
            transaction_id: 'KkRQGZ8qZxixxJq3mqekUnX1NXPnwKCVxvyeB',
            transaction_type: 'place',
            unofficial_currency_code: null
        },
        {
            account_id: 'MqlMboWroaCaaerq6roJSjBW1Ng1qRF9JoBmR',
            account_owner: null,
            amount: -4.22,
            authorized_date: null,
            category: [Array],
            category_id: '21005000',
            date: '2020-03-11',
            iso_currency_code: 'USD',
            location: [Object],
            name: 'INTRST PYMNT',
            payment_channel: 'other',
            payment_meta: [Object],
            pending: false,
            pending_transaction_id: null,
            transaction_code: null,
            transaction_id: 'BPwx19eG9VUGG3jpKjJZUWQPoQGWZqHwbGBdp',
            transaction_type: 'special',
            unofficial_currency_code: null
        },
        {
            account_id: 'LlMZnoEKodTddrKlDK4guRVoGPpGNMiPXJb3K',
            account_owner: null,
            amount: 500,
            authorized_date: null,
            category: [Array],
            category_id: '22001000',
            date: '2020-03-01',
            iso_currency_code: 'USD',
            location: [Object],
            name: 'United Airlines',
            payment_channel: 'in store',
            payment_meta: [Object],
            pending: false,
            pending_transaction_id: null,
            transaction_code: null,
            transaction_id: 'NKq1mgkzg4i44AzXKzMBHgW3VWDgRasW413Eb',
            transaction_type: 'special',
            unofficial_currency_code: null
        },
        {
            account_id: 'Z7bVrelQeotoojQm1QWyS1QjBb8BKAFg6j5xG',
            account_owner: null,
            amount: 6.33,
            authorized_date: null,
            category: [Array],
            category_id: '22016000',
            date: '2020-02-28',
            iso_currency_code: 'USD',
            location: [Object],
            name: 'Uber',
            payment_channel: 'in store',
            payment_meta: [Object],
            pending: false,
            pending_transaction_id: null,
            transaction_code: null,
            transaction_id: 'rEqVA98z9BIKKvZr1Z49HDBjAB7DNmClevQjx',
            transaction_type: 'special',
            unofficial_currency_code: null
        },
        {
            account_id: 'LlMZnoEKodTddrKlDK4guRVoGPpGNMiPXJb3K',
            account_owner: null,
            amount: 500,
            authorized_date: null,
            category: [Array],
            category_id: '13005000',
            date: '2020-02-25',
            iso_currency_code: 'USD',
            location: [Object],
            name: 'Tectra Inc',
            payment_channel: 'in store',
            payment_meta: [Object],
            pending: false,
            pending_transaction_id: null,
            transaction_code: null,
            transaction_id: 'Pzrp9on3oPUPPq3zJ3ZEsrMZLMjrQac7P41GE',
            transaction_type: 'place',
            unofficial_currency_code: null
        },
        {
            account_id: 'LlMZnoEKodTddrKlDK4guRVoGPpGNMiPXJb3K',
            account_owner: null,
            amount: 2078.5,
            authorized_date: null,
            category: [Array],
            category_id: '16000000',
            date: '2020-02-24',
            iso_currency_code: 'USD',
            location: [Object],
            name: 'AUTOMATIC PAYMENT - THANK',
            payment_channel: 'other',
            payment_meta: [Object],
            pending: false,
            pending_transaction_id: null,
            transaction_code: null,
            transaction_id: 'eE6V71NA19I99wPzyPQ3I6emVeD6MbCL4wg8r',
            transaction_type: 'special',
            unofficial_currency_code: null
        },
        {
            account_id: 'LlMZnoEKodTddrKlDK4guRVoGPpGNMiPXJb3K',
            account_owner: null,
            amount: 500,
            authorized_date: null,
            category: [Array],
            category_id: '13005032',
            date: '2020-02-24',
            iso_currency_code: 'USD',
            location: [Object],
            name: 'KFC',
            payment_channel: 'in store',
            payment_meta: [Object],
            pending: false,
            pending_transaction_id: null,
            transaction_code: null,
            transaction_id: '7qPAdlzZlGCxxpAVZAbQUkEW3ERkKAUgoGZRg',
            transaction_type: 'place',
            unofficial_currency_code: null
        },
        {
            account_id: 'LlMZnoEKodTddrKlDK4guRVoGPpGNMiPXJb3K',
            account_owner: null,
            amount: 500,
            authorized_date: null,
            category: [Array],
            category_id: '19046000',
            date: '2020-02-24',
            iso_currency_code: 'USD',
            location: [Object],
            name: 'Madison Bicycle Shop',
            payment_channel: 'in store',
            payment_meta: [Object],
            pending: false,
            pending_transaction_id: null,
            transaction_code: null,
            transaction_id: 'jEpV1PQyPDIggK7L57kMS819J1P8Rec1V3EPy',
            transaction_type: 'place',
            unofficial_currency_code: null
        }
    ]
}
// const { transactions, info } = dashboard;

// export default <DashboardMain transactions={transactions} info={info} />


// const mapStateToProps = (state, ownProps) => ({
//     // dashboard: state.dashboard.transactions || [],
//     transactions,
//     info,
//     ...ownProps
// });

// export default connect(mapStateToProps, { fetchTransactions })(Link);
