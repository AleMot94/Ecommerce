import { useState, useEffect } from "react";

export const useData = (asyncFn, dependencies = []) => {
  const [data, setData] = useState();
  const [error, setError] = useState();
  const [isLoadong, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);

    asyncFn()
      .then((response) => {
        setData(response);
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, dependencies);

  return {
    isLoadong,
    data,
    error,
  };
};
