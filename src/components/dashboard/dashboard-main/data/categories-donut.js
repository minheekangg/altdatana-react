import React from "react";
import { Doughnut } from "react-chartjs-2";

import {COLORS} from '../variables';

function CategoriesDonut(props) {

    if (!props.data) {
        return <div>nothing</div>
    }
    return (
        <div>
            <h3>Categories</h3>
            <p>description of categories</p>
            <Doughnut data={formatData(props)} />
        </div>
    );
}

export default CategoriesDonut;

const formatData = ({data}) => {
    console.log('props are', data)

    const labels = data.map(d=> {
        return d.name
    })

    return {
        labels,
        datasets: [
            {
                data: [300, 50, 100, 300, 40, 20, 1, 90],
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
        ],
        
    };

}
