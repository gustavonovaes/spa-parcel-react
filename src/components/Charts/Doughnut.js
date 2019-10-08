import React from "react";
import { Doughnut as DoughnutCharjs, defaults } from "react-chartjs-2";

defaults.global.responsive = true;

function Doughnut() {
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

  return <DoughnutCharjs data={data} />
}

function getData() {
  return {
    labels: [
      'Blue',
      'Green',
      'Yellow'
    ],
    datasets: [{
      data: [getRandomInt(150, 280), getRandomInt(60, 150), getRandomInt(0, 60)],
      backgroundColor: [
        '#076E95',
        '#4BB543',
        '#FFCE56'
      ],
      hoverBackgroundColor: [
        '#076E95',
        '#4BB543',
        '#FFCE56'
      ]
    }]
  }
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default React.memo(Doughnut);