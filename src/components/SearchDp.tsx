import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card } from "./Cards";

export interface SMovie {
  id: number;
  title: string;
  name: string;
  genre: string;
  poster_path: string;
  profile_path: string;
  popularity: number;
  release_date: number;
  first_air_date: number;
  vote_average: number;
  media_type: string;
}

export interface SDatas {
  api: string;
}

const SearchDp = ({
  api,
  setLoopCount,
}: SDatas & { setLoopCount: React.Dispatch<React.SetStateAction<number>> }) => {
  const [SResults, setSResults] = useState<SMovie[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(api);
        setSResults(response.data.results);
        setLoopCount((prevCount) => prevCount + response.data.results.length);

        console.log("API'den gelen veriler:", response.data.results);
      } catch (error) {
        console.error("Fetching error:", error);
      }
    };
    fetchData();
  }, [api, setLoopCount]);

  return (
    <>
      {SResults.map((SMovie) => (
        <Card key={SMovie.id} movie={SMovie} />
      ))}
    </>
  );
};

export default SearchDp;
