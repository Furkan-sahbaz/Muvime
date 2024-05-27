import { useState, useEffect } from "react";
import axios from "axios";
import { Card } from "./Cards";

export interface IMovie {
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

export interface IDatas {
  api: string;
}

const Displayer = ({ api }: IDatas) => {
  const [showItems, setShowItems] = useState<IMovie[]>([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(api);
        setShowItems(response.data.results.slice(1, 7));

        console.log("API'den gelen veriler:", response.data.results);
      } catch (error) {
        console.error("Fetching error", error);
      }
    };
    fetchMovies();
  }, [api]);

  return (
    <>
      {showItems.map((item) => (
        <Card key={item.id} movie={item} />
      ))}
    </>
  );
};

export default Displayer;
