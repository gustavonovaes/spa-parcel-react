import React from "react";

import { Line as LineCharjs } from "react-chartjs-2";

function Line() {
  const [data, setData] = React.useState(getData());
  const [intervalHandler, setIntervalHandler] = React.useState(0);

  React.useEffect(() => {
    setIntervalHandler(setInterval(() => updateState(), 3000));
    return () => {
      clearInterval(intervalHandler);
    }
  }, []);

  function updateState() {
    setData(getData());
  }

  return <LineCharjs data={data} />
}


function getData() {
  const data = [...new Array(getRandomInt(10, 30))].map(() => getRandomInt(20, 80));

  return {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'My First dataset',
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(75,192,192,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data
      }
    ]
  }
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default React.memo(Line);