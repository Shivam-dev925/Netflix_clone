import React, { useState, useEffect } from "react";
import axios from "../Axios";
import YouTube from "react-youtube";
import "./Movierow.css";
import movieTrailer from "movie-trailer";
function MovieRow({ isLarge, title, fetchUrl }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");
  const baseUrlForPosters = "http://image.tmdb.org/t/p/original/";
  useEffect(() => {
    const fetching = async () => {
      const response = await axios.get(fetchUrl);
      setMovies(response.data.results);

      return response;
    };

    fetching();
  }, [fetchUrl]);

  const HandlePlayVideo = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie.name || "")
        .then((url) => {
          const UrlParameters = new URLSearchParams(new URL(url).search);
          setTrailerUrl(UrlParameters.get("v"));
        })
        .catch((err) => console.log(err.message));
    }
  };
  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <>
      <div className="row">
        <h1 style={{ marginBottom: "10px", color: "#fff" }}>{title}</h1>
        <div className="image_wrapper">
          {movies.map((movie) => {
            return (
              <img
                onClick={() => HandlePlayVideo(movie)}
                key={movie.id}
                className={isLarge ? "image_large" : "image_generic"}
                src={`${baseUrlForPosters}${
                  !isLarge ? movie.backdrop_path : movie.poster_path
                }`}
                alt={movie.title}
              />
            );
          })}
        </div>

        {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
      </div>
    </>
  );
}

export default MovieRow;
