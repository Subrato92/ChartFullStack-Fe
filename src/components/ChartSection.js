import React, {useState} from "react";
import { useSelector } from "react-redux";
import { Chart } from "react-chartjs-2";
import { Chart as ChartJS, 
  LinearScale, 
  CategoryScale, 
  BarElement, 
  PointElement, 
  LineElement,
  Legend,
  Tooltip,
  LineController,
  BarController, 
  Scatter} from "chart.js";

const ChartSection = (prop) => {

    const currFileName = useSelector(state => state.currentFileState.fileName);
    const currFileDataSet = useSelector(state => state.currentFileState.dataSet);
    const currFileFitCurve = useSelector(state => state.currentFileState.fitCurve);
    const coef = useSelector(state => state.currentFileState.coef);
    const intercept = useSelector(state => state.currentFileState.intercept);

    let chartTitle = currFileName;
    
    if(coef>0 || intercept>0)
      chartTitle = chartTitle + " [ intercept = " + intercept + ", coef = " +coef+"]";

      ChartJS.register(
        LinearScale,
        CategoryScale,
        BarElement,
        PointElement,
        LineElement,
        Legend,
        Tooltip,
        LineController,
        BarController
      );

    const options = {
        scales: {
          y: {
            beginAtZero: false,
          }
        }
    };

    //console.log('At Chart : '+JSON.stringify(currFileDataSet));
    //console.log('FitData : '+JSON.stringify(currFileFitCurve));

    const lineType = 'line';
    const scatterType = 'scatter';
    const data = {
        datasets: [
          {
            type: scatterType,
            label: 'Dataset',
            data: currFileDataSet,
            backgroundColor: 'rgba(255, 99, 132, 1)',
          },
          {
            type: lineType,
            label: 'Fit Curve',
            data: currFileFitCurve,
            borderColor: 'rgb(75, 192, 192)',
            backgroundColor: 'rgb(75, 192, 192)',
            borderWidth: 2
          }
        ]
      };

    return (
          <div class="card">
              <div class="card-header">
                  {chartTitle}
              </div>
              <div class="card-body">
                  <Chart type={lineType} data={data} options={options}/>
              </div>
          </div>
    );
}

export default ChartSection;