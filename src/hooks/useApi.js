import { useState, useEffect } from "react";

const baseUrl = "https://plantmanagerapi20200929154828.azurewebsites.net/v1";

export default function useApi(endpoint, options) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [fetchOptions, setFetchOptions] = useState(options);

  function mutate(newData, methodName) {
    const newOptions = { ...fetchOptions };

    newOptions.method = methodName;
    newOptions.headers = {
      "Content-type": "application/json",
    };
    newOptions.body = JSON.stringify(newData);
    
    setFetchOptions(newOptions);
  }

  function del(id) {
    const newOptions = { ...fetchOptions };
    newOptions.method = "DELETE";
    newOptions.headers = {
      "Content-type": "accept: application/json"
    }
    setFetchOptions(newOptions);
  }

  useEffect(() => {
    async function getData() {
      try {
        const res = await fetch(`${baseUrl}/${endpoint}`, fetchOptions);

        if (!res.ok) {
          throw new Error(`${res.status}/${res.statusText}`);
        }

        const data = await res.json();
        setError(null);
        setData(data);
      } catch (e) {
        setError(
          `There was an error with the API: "${e.message}" the endpoint was: "${endpoint}".`
        );
      }
    }

    getData();
  }, [endpoint, fetchOptions]);

  return [data, error, mutate, del];
}
