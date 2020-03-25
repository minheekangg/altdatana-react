import React from "react";
import { Doughnut } from "react-chartjs-2";

import { COLORS } from '../variables';

const options = {
    legend: {
        display: true,
        position: "bottom",
        align: "start"
    },
    responsive: true,
};


function CategoriesDonut(props) {

    if (!props.data) {
        return <div>nothing</div>
    }
    
    return (
        <div className="graph-container">
            <Doughnut data={formatData(props.data)} options={options} />
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
