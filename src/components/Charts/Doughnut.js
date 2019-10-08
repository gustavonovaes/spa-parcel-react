import React from "react";
import { Doughnut as DoughnutCharjs, defaults } from "react-chartjs-2";

import getRandomInt from "../../utils/getRandomInt";
import useInterval from "../../hooks/useInterval";

function Doughnut({ updateInterval }) {
  const [data] = useInterval(getData, updateInterval);
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

export default React.memo(Doughnut);