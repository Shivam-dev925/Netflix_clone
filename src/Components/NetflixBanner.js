import React, { useState, useEffect } from "react";
import axios from "../Axios";
import Requests from "../Reqests";
import styled from "styled-components";

import "./NetflixBanner.css";
import NetflixNavbar from "./NetflixNavbar";
function NetflixBanner() {
  const [singleMovie, setSingleMovie] = useState([]);
  const baseUrlForPosters = "http://image.tmdb.org/t/p/original/";

  useEffect(() => {
    const fetching = async () => {
      const response = await axios.get(Requests.fetchNetflixOriginals);

      setSingleMovie(
        response.data.results[
          Math.floor(Math.random() * response.data.results.length - 1)
        ]
      );
      console.log(response.data);
      return response;
    };

    fetching();
  }, []);

  const Banner = styled.div`
    height: 480px;
    width: 100%;
    background-image: url(${baseUrlForPosters}${singleMovie?.poster_path});
    background-repeat: no-repeat;

    background-position: center center center;
    background-size: cover;
    object-fit: cover;
  `;
  return (
    <>
      <NetflixNavbar />
      <Banner>
        <h1 className="poster_title">
          {singleMovie?.title ||
            singleMovie?.name ||
            singleMovie?.original_name}
        </h1>
        <div style={{ marginLeft: "100px" }}>
          <button className="btn genericbutton btn-sm ">like</button>

          <button className="btn genericbutton btn-sm  ">play video</button>
        </div>
        <div
          style={{
            marginLeft: "100px",
            marginTop: "50px",
            width: "400px",
            height: "200px",
          }}
        >
          <p className=" lead description">{singleMovie.overview}</p>
        </div>
        <div className="bluredBottom"></div>
      </Banner>
    </>
  );
}

export default NetflixBanner;
