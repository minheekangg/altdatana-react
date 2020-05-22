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

    
`;

const DashboardMain = () => (
    <DashboardMainWrapper>
        <div className="container">
            
                <p>DashboardMainducing alternative data to lenders small or large.</p>
            
        </div>
    </DashboardMainWrapper>
);

export default DashboardMain;
