import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [state, setState] = useState({
    data: null,
    isLoading: true,
    error: null,
  });

  const getFetch = async () => {
    setState({
      ...state,
      isLoading: true,
    });

    try {

      const resp = await fetch(url);
      const data = await resp.json();

      setState({
        data,
        isLoading: false,
        error: null,
      });
      
    } catch (error) {
      setState({
        ...state,
        error,
      });
    }

  };

  useEffect(() => {
    getFetch();
  }, [url]);

  return {
    data: state.data,
    isLoading: state.isLoading,
    error: state.error,
  };
};
