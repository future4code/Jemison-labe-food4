import { useEffect, useState } from "react";
import axios from "axios";


const useRequestData = (initialData, url) => {

    const url ="https://us-central1-missao-newton.cloudfunctions.net/fourFoodA";

    const token = localStorage.getItem("token");

    const [data, setData] = useState(initialData);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        getData(url);
    }, [url, token]);

    const getData = async (url) => {
        setIsLoading(true);

    const config = {
      headers: {
        auth: token,
      },
    };

    try {
      const response = await axios.get(url, config);
      setData(response.data);
      setIsLoading(false);
    } catch (error) {
      setError(error.response);
      setIsLoading(false);
    }
  };

  return [data, getData, isLoading, error];
};

export default useRequestData;