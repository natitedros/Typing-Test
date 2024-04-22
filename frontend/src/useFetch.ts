import { useState, useEffect } from "react";
const useFetch = <T>(url: string) => {
  const [data, setData] = useState<T | null>(null);
  const [isPending, setIsPending] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const apiKey = process.env.REACT_APP_API_NINJA_KEY;

  useEffect(() => {
    const abortCont = new AbortController();
    fetch(url, {
      headers: { "X-Api-Key": `${apiKey}` },
      signal: abortCont.signal,
    })
      .then((res) => {
        if (!res.ok) {
          throw Error("could not fetch the data!");
        }
        return res.json();
      })
      .then((data) => {
        setData(data);
        setIsPending(false);
        setError(null);
      })
      .catch((err) => {
        if (err.name === "AbortError") {
          console.log("fetch aborted!");
        } else {
          setError(err.message);
          setIsPending(false);
        }
      });
    return () => abortCont.abort();
  }, [url, apiKey]);
  return { data, isPending, error };
};
export default useFetch;
