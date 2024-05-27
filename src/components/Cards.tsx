import React, { useState, useEffect } from "react";
import { IMovie } from "./Displayer";
import axios from "axios";
import { Api_Key } from "../modules/ApiLink";

export const Card = (props: { movie: IMovie }) => {
  const { movie } = props;
  const year = String(movie.release_date ?? movie.first_air_date);
  const [genres, setGenres] = useState<string[]>([]);
  const media_t = movie.media_type;

  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const mediaType = media_t ?? "movie";
        const genResponse = await axios.get(
          `https://api.themoviedb.org/3/${mediaType}/${movie.id}?api_key=${Api_Key}`
        );
        const genresData = genResponse.data.genres;
        if (genresData) {
          const genreNames = genresData.map((genre: any) => genre.name);
          setGenres(genreNames);
        }
      } catch (error) {
        console.error("Hata kodu:", error);
      }
    };
    fetchGenres();

    return () => {};
  }, []);

  return (!movie.poster_path && !movie.profile_path) ||
    movie.vote_average == 0 ? (
    <></>
  ) : (
    <div className="card d-inline-block border-0 mb-3">
      <img
        id="mImages"
        className="rounded-3"
        src={`https://image.tmdb.org/t/p/w200/${
          movie.poster_path ?? movie.profile_path
        }`}
      />

      <h5 id="titles" className="fw-bold">
        {movie.title ?? movie.name}
      </h5>
      {!movie.profile_path && (
        <p id="f12" className="fw-bold">
          {genres.join(", ")}
        </p>
      )}
      <div className="d-flex align-items-center">
        {(movie.first_air_date || movie.release_date) && (
          <span id="f12" className="opacity-50">
            2h / {year.slice(0, 4)}
          </span>
        )}
        <span
          id="vote_avg"
          className="bg-dark rounded-1 text-light ms-2 fw-bold px-1"
        >
          {movie.vote_average > 0
            ? Math.ceil(movie.vote_average * 10)
            : movie.popularity}
          .0
        </span>
      </div>
    </div>
  );
};
