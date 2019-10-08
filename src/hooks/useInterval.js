import React from "react";

export default function useInterval(getData, updateInterval = 3000) {
  const [data, setData] = React.useState(getData());
  const [intervalHandler, setIntervalHandler] = React.useState(0);

  React.useEffect(() => {
    let isUmounted = false;

    if (!updateInterval) {
      return () => { }
    }

    const intervalId = setInterval(() => {
      if (!isUmounted) {
        setData(getData())
      }
    }, updateInterval);

    setIntervalHandler(intervalId);

    return () => {
      isUmounted = true;
      intervalHandler && clearInterval(intervalHandler);
    }
  }, []);

  return [data]
}