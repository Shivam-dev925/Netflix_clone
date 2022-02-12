import React from "react";
import MovieSection from "./Components/MovieSection";
import NetflixBanner from "./Components/NetflixBanner";

function ProtectedCompo() {
  return (
    <>
      <NetflixBanner />
      <MovieSection />
    </>
  );
}

export default ProtectedCompo;
