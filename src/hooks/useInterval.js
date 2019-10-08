import React from "react";

export default function useInterval(getData, updateInterval = 3000) {
  const [data, setData] = React.useState(getData());
  const [intervalHandler, setIntervalHandler] = React.useState(0);

  React.useEffect(() => {
    if (!updateInterval) {
      return () => { }
    }

    const intervalId = setInterval(() => {
      setData(getData())
    }, updateInterval);

    setIntervalHandler(intervalId);

    return () => {
      intervalHandler && clearInterval(intervalHandler);
    }
  }, []);

  return [data]
}