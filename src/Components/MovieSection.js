import React from 'react'
import MovieRow from "./MovieRow";
import Requests from "../Reqests";
function MovieSection() {
  return (
    <>

<MovieRow
        isLarge
        title="Netflix Originals"
        fetchUrl={Requests.fetchNetflixOriginals}
      />
      <MovieRow title="Trending now" fetchUrl={Requests.fetchTrending} />

      <MovieRow title="Top Rated now" fetchUrl={Requests.fetchTopRated} />

      <MovieRow title="Horror moves " fetchUrl={Requests.fetchHorrorMovies} />

      <MovieRow title="Action movies " fetchUrl={Requests.fetchActionMovies} />
      <MovieRow title="Comedy movies " fetchUrl={Requests.fetchComedyMovies} />
      <MovieRow
        title="Romantic movies "
        fetchUrl={Requests.fetchRomanceMovies}
      />
      <MovieRow title="Documantries " fetchUrl={Requests.fetchDocumantaries} />
    </>
  )
}

export default MovieSection