import React from 'react';
import { ResponsiveContainer, RadialBar, RadialBarChart, Tooltip } from 'recharts';

const data = [
    { uv: 100, fill: '#ffff00' },
    { uv: 20, fill: '#83a6ed' },
    { uv: 30, fill: '#83a6ed' },
];
const SimpleRadialBarChart = () => {
    return (
        <div className="data-radiar-bar">
            <ResponsiveContainer width={200} height={200}>
                <RadialBarChart className="radial" cx="50%" cy="50%" innerRadius='20%' outerRadius="80%" data={data}>
                    <RadialBar minAngle={15} background clockWise={true} dataKey='uv' />
                    <Tooltip/>
                </RadialBarChart>
            </ResponsiveContainer>
            <p style={{marginBottom: '10px'}}>Category</p>
            <p style={{marginBottom: '30px'}}>Category</p>
        </div>
    );
};

export default SimpleRadialBarChart;