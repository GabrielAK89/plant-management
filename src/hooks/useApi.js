import { useState, useEffect } from "react";

const baseUrl = "https://plantmanagerapi20200929154828.azurewebsites.net/v1";

export default function useApi(endpoint, options) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [fetchOptions, setFetchOptions] = useState(options);

  function mutate(newData, methodName) {
    if (methodName === 'POST') {
      const newOptions = { ...fetchOptions };

      newOptions.method = methodName;
      newOptions.headers = {
        "Content-type": "application/json",
      };
      newOptions.body = JSON.stringify(newData);
      
      setFetchOptions(newOptions);
    }

    if (methodName === 'PUT') {
      const newOptions = { ...fetchOptions };

      newOptions.method = methodName;
      newOptions.headers = {
        "Content-type": "application/json",
      };
      newOptions.body = JSON.stringify(newData);
      
      setFetchOptions(newOptions);
    }

    if (methodName === 'DELETE') {
      
      const newOptions = { };
      newOptions.method = methodName;
      setFetchOptions(newOptions);
    }

    
  }

  function del(id) {
    
  }

  useEffect(() => {
    async function getData() {
      try {
        const res = await fetch(`${baseUrl}/${endpoint}`, fetchOptions);

        if (!res.ok) {
          throw new Error(`${res.status}/${res.statusText}`);
        }
        let ret = null;
        if (res.status !== 204) {
          ret = await res.json();
        }
      
        setError(null);
        if (fetchOptions && fetchOptions.method === 'POST') {
          //add the new item to state to refresh the list
          setData((state) => [...state, ret]);
        } else if (fetchOptions && fetchOptions.method === 'PUT') {
          // refresh the state
          const newOptions = { };
          newOptions.method = "GET";
          setFetchOptions(newOptions);
        } else if (fetchOptions && fetchOptions.method === 'DELETE') {
          // refresh the state
          const newOptions = {};
          newOptions.method = "GET";
          setFetchOptions(newOptions);
        }
        else {
          //dysplay actual values
          setData(ret);
        }
      } catch (e) {
        setError(
          `There was an error with the API: "${e.message}" at the endpoint: "${endpoint}".`
        );
      }
    }

    getData();
  }, [endpoint, fetchOptions]);

  return [data, error, mutate, del];
}
