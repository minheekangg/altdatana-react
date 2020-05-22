import React from 'react';
import styled from "styled-components";


const DashboardMainWrapper = styled.div`
    flex-basis: 75%;
    position: relative;
    margin-top: 20px;
    margin-right: -10px;
    margin-bottom: -10px;
    padding: 10px;
    border: 1px solid white;
    background-color: white;
    border-radius: 15px 0 0 0;

    .main-img {
        position: absolute;
        bottom: 13px;
        right: 0;
        width: 60vw;
        height: auto;
        background-position: center;
        background-repeat: no-repeat;
        background-size: contain;
    }


    .flex-box {
        align-items: center;
        flex-direction: row-reverse;
        height: 100%;
        margin: auto;
    }

    h2 {
        text-transform: capitalize;
    }

    .left {
        text-align: left;
        color: $primary-blue;    
    }

    .right {
        img { width: 100%}
        flex-basis: 40%;
    }

    @media screen and (max-width: 900px) {
        .item.left {
            flex-basis: 60%;
        }
        .item.right {
            margin-left: 0;
        }
    }

    @media screen and (max-width: 600px) {
        padding-top: 0;

        .flex-box {
            display: block!important;
        }

        .item {
            margin: 0;
        }

        .item.right {
            margin: auto;

            img {
                max-width: 300px;
                margin-top: 50px;
            }
        }

        .item.left {
            text-align: center;
        }
    }

    @media screen and (max-width: 320px) {
        padding-top: calc(50vh - 200px);

        img { display: none;}
    }
`;

// TODO: FIX BLOB LATER

const DashboardMain = () => (
    <DashboardMainWrapper>
        <div className="container">
            
                <p>DashboardMainducing alternative data to lenders small or large.</p>
            
        </div>
    </DashboardMainWrapper>
);

export default DashboardMain;
