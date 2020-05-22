import React from 'react';
import styled from "styled-components";


const DashboardMainWrapper = styled.div`
    flex-basis: 70%;
    position: relative;
    margin-top: 20px;
    margin-right: -10px;
    margin-bottom: -10px;
    padding: 10px;
    border: 1px solid white;
    background-color: white;
    border-radius: 15px 0 0 0;

    text-align: left;
`;

const DashboardContainer = styled.div`
    margin: 40px 40px 0;

    h3 { font-size: 30px; }
`;

const DashboardMain = () => (
    <DashboardMainWrapper>
        <DashboardContainer>
            <h3>The Real Real</h3>

            <p>Purchase details</p>
        </DashboardContainer>
    </DashboardMainWrapper>
);

export default DashboardMain;
