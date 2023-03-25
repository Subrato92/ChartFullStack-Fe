import React, {useState} from "react";
import { useSelector } from "react-redux";
import { Scatter } from "react-chartjs-2";
import { LinearScale, Chart, PointElement } from "chart.js";

const ChartSection = (prop) => {

    const currFileName = useSelector(state => state.currentFileState.fileName);
    const currFileDataSet = useSelector(state => state.currentFileState.dataSet);

    Chart.register(LinearScale);
    Chart.register(PointElement);

    const options = {
        scales: {
          y: {
            beginAtZero: false,
          }
        }
    };

    console.log('At Chart : '+JSON.stringify(currFileDataSet));

    const data = {
        datasets: [
          {
            label: 'A dataset',
            data: currFileDataSet,
            backgroundColor: 'rgba(255, 99, 132, 1)',
          }
        ]
      };

    return (
        <div class="card">
            <div class="card-header">
                {currFileName}
            </div>
            <div class="card-body">
                <Scatter data={data} options={options}/>
            </div>
        </div>
    );
}

export default ChartSection;