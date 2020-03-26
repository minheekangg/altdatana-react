import React from "react";
import { PieChart, Pie, Sector, Cell } from "recharts";
import { COLOR_ARR } from '../variables';
/*
expected data format: 

const data = [
    { name: "Group A", value: 400 },
    { name: "Group B", value: 300 },
    { name: "Group C", value: 300 },
    { name: "Group D", value: 200 }
];
*/

const renderActiveShape = props => {
    const {
        cx,
        cy,
        innerRadius,
        outerRadius,
        startAngle,
        endAngle,
        fill,
        payload,
        percent,
        value
    } = props;

    return (
        <g>
            <text x={cx} y={cy-20} dy={8} textAnchor="middle" fill={fill}>
                {payload.name}
            </text>
            <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
                {value}
            </text>
            <text x={cx} y={cy+20} dy={8} textAnchor="middle" fill={fill}>
                {`(${(percent * 100).toFixed(2)}%)`}
            </text>
            <Sector
                cx={cx}
                cy={cy}
                innerRadius={innerRadius}
                outerRadius={outerRadius}
                startAngle={startAngle}
                endAngle={endAngle}
                fill={fill}
            />
            <Sector
                cx={cx}
                cy={cy}
                startAngle={startAngle}
                endAngle={endAngle}
                innerRadius={outerRadius + 6}
                outerRadius={outerRadius + 10}
                fill={fill}
            />
        </g>
    );
};

export default class CategoriesDonut extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeIndex: 0,
            data: props && formatProps(props),
        };
    }
    

    onPieEnter = (data, index) => {
        this.setState({
            activeIndex: index
        });
    };

    render() {
        if (!this.state.data || this.state.data.length <1) {
            return <div>nothing to see</div>
        }
        return (
            <div className="data-pie">
                <PieChart width={400} height={400}>
                    <Pie
                        activeIndex={this.state.activeIndex}
                        activeShape={renderActiveShape}
                        data={this.state.data}
                        cx={200}
                        cy={200}
                        innerRadius={100}
                        outerRadius={120}
                        fill="#8884d8"
                        dataKey="value"
                        onMouseEnter={this.onPieEnter}
                    >
                        {
                            this.state.data.map((entry, index) => <Cell fill={COLOR_ARR[index]} />)
                        }
                    </Pie>
                </PieChart>
            </div>
        );
    }
}

const formatProps = ({data}) => {
    const result = [];

    Object.keys(data).map((key) => {
        let obj = {};
        obj.name = key;
        obj.value = data[key];
        return result.push(obj)
    });

    return result;
}
