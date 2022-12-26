import { useState, useEffect } from "react";

export default function usePokeSearch(url) {
  const [megaList, setMegaList] = useState([]);
  const [result, setResults] = useState([]);

  const search = async (query) => {
    if (megaList.length > 1) {
      setResults(megaList.filter((key) => key.name.startsWith(query, 0)));
    }
  };

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        setMegaList(res.results);
      });
    ///
  }, [url]);
  return [result, search];
}
