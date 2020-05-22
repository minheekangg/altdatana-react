import React, { useState } from 'react';
import styled from "styled-components";


const DashboardPanelWrapper = styled.div`
    margin: 20px 0 0 15px;
    padding-right: 30px;
    text-align: left;
    color: white;
    flex-basis: 30%;
    overflow-y: scroll;
    overflow-x: hidden;

    > p {
        text-transform: uppercase;
    }
`;

const PanelBoxes = styled.div`
    background-color: #44539A;
    padding: 30px 40px;
    width: 100%;
    border-radius: 15px;
    margin: 10px;


    &.active {
        background-color: white;
        color: black;

        &:hover {
            background-color: white;
        }
    }

    &:hover {
        background-color: #2B3A81;
        cursor: pointer;
    }

    .purchase-title {
        width: 300px;
        font-size: 20px;
        margin-bottom: 16px;
        font-weight: bold;
    }

    .purchase-status {
        font-weight: 200;
        font-size: 14px;
        text-transform: uppercase;
        margin-bottom: 0;
    }

    .purchase-cost {
        font-size: 20px;
        
    }
`;


const DashboardPanel = () => {
    const [active, setActive] = useState("realreal");

    return (
        <DashboardPanelWrapper>
            <p>Past Purchases</p>
            <PanelBoxes className={active === "realreal" ? "active": ""} onClick={()=>setActive("realreal")}>
                <p className="purchase-title"> The RealReal</p>
                <p className="purchase-status">Paid on Jan 15, 2020</p>
                <p className="purchase-cost">$199.95</p>
            </PanelBoxes>
            <PanelBoxes className={active === "notrealreal" ? "active" : ""} onClick={() => setActive("notrealreal")} >
                <p className="purchase-title"> The RealReal</p>
                <p className="purchase-status">Paid on Jan 15, 2020</p>
                <p className="purchase-cost">$199.95</p>
            </PanelBoxes>
            <PanelBoxes >
                <p className="purchase-title"> The RealReal</p>
                <p className="purchase-status">Paid on Jan 15, 2020</p>
                <p className="purchase-cost">$199.95</p>
            </PanelBoxes>
            <PanelBoxes >
                <p className="purchase-title"> The RealReal</p>
                <p className="purchase-status">Paid on Jan 15, 2020</p>
                <p className="purchase-cost">$199.95</p>
            </PanelBoxes>
        </DashboardPanelWrapper>
    )
};

export default DashboardPanel;
