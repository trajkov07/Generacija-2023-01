import { useState, useEffect } from "react";

export const useQuery = (request) => {
  const [response, setResponse] = useState({});

  useEffect(() => {
    console.log("retrieving data");
    request.then((fetchResponse) => {
      setResponse(fetchResponse.data);
    });
  }, []);

  return { response };
};
