import React from 'react';
import styled from "styled-components";


const DashboardPanelWrapper = styled.div`
    margin: 20px 40px 0 30px;
    text-align: left;
    color: white;
    flex-basis: 25%;

    > p {
        text-transform: uppercase;
    }
`;

const PanelBoxes = styled.div`
    background-color: #44539A;
    padding: 35px 40px;
    width: 100%;
    border-radius: 15px;
    margin: 10px 0;

    .purchase-title {
        width: 400px;
        font-size: 24px;
        margin-bottom: 20px;
        font-weight: bold;
    }
`;

// TODO: FIX BLOB LATER

const DashboardPanel = () => (
    <DashboardPanelWrapper>
        <p>Past Purchases</p>
        <PanelBoxes className="active">
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
        <PanelBoxes >
            <p className="purchase-title"> The RealReal</p>
            <p className="purchase-status">Paid on Jan 15, 2020</p>
            <p className="purchase-cost">$199.95</p>
        </PanelBoxes>
    </DashboardPanelWrapper>
);

export default DashboardPanel;
