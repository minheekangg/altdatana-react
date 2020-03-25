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
    beforeDraw: function(chart) {
        if (
            chart.config.options.centerText.display !== null &&
            typeof chart.config.options.centerText.display !== "undefined" &&
            chart.config.options.centerText.display
        ) {
            drawInnerText(chart);
        }
    }
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

const drawInnerText = chart => {
    var width = chart.chart.width,
        height = chart.chart.height,
        ctx = chart.chart.ctx;

    ctx.restore();
    var fontSize = (height / 114).toFixed(2);
    ctx.font = fontSize + "em sans-serif";
    ctx.textBaseline = "middle";

    var text = chart.config.options.centerText.text,
        textX = Math.round((width - ctx.measureText(text).width) / 2),
        textY = height / 2;

    ctx.fillText(text, textX, textY);
    ctx.save();
};
