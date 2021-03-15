import React, { useState } from 'react';
import { useEffect } from 'react';

const Chart = (props) => {
    const {chartTitle} = props;
    const [chartTt, setChartTt] = useState('');
    console.log("renderr..")
    useEffect(() => {
        console.log("chart render..")
        setChartTt(chartTitle);
    },[chartTitle])
    return (
        <div>
            <h1>Show Chart</h1>
            <h2>
                {
                    chartTt
                }
            </h2>
        </div>
    );
}

export default React.memo(Chart);