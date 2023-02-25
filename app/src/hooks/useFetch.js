import { useState, useEffect } from "react";

const useFetch = (url, detaultValue) => {
  const [data, setData] = useState(detaultValue);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((result) => {
        setData(Object.values(result));
      });
  }, [url]);

  return [data, setData];
};

export default useFetch
