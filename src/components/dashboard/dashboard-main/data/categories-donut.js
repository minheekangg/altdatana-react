import React from "react";
import { Doughnut } from "react-chartjs-2";

import { COLORS } from '../variables';

function CategoriesDonut(props) {

    if (!props.data) {
        return <div>nothing</div>
    }
    
    return (
        <div className="graph-container">
            <h3>Total Spending</h3>
            <p>description of categories</p>
            <Doughnut data={formatData(props.data)} />
        </div>
    );
}

export default CategoriesDonut;

const formatData = (input) => {

    const labels = Object.keys(input);
    const data = Object.values(input);

    return {
        labels,
        datasets: [
            {
                data,
                backgroundColor: [
                    COLORS.oneOfEight,
                    COLORS.twoOfEight,
                    COLORS.threeOfEight,
                    COLORS.fourOfEight,
                    COLORS.fiveOfEight,
                    COLORS.sixOfEight,
                    COLORS.sevenOfEight,
                    COLORS.eightOfEight
                ],
                hoverBackgroundColor: [
                    COLORS.oneOfEightHover,
                    COLORS.twoOfEightHover,
                    COLORS.threeOfEightHover,
                    COLORS.fourOfEightHover,
                    COLORS.fiveOfEightHover,
                    COLORS.sixOfEightHover,
                    COLORS.sevenOfEightHover,
                    COLORS.eightOfEightHover
                ]
            }
        ]
    };

}
