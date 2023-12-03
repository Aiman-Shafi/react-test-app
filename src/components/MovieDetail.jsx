// import React from "react";

import { useEffect, useState } from "react";
import { useParams } from "react-router";

function MovieDetail() {
  const { id } = useParams();
  const [movies, setMovies] = useState([]);

  const searchMovies = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=a45feb7a543d224f42b8447894f1e7c2`
    );
    const data = await response.json();
    setMovies(data);
  };

  useEffect(() => {
    searchMovies("batman");
  }, []);

  return <div>{movies.title}</div>;
}

export default MovieDetail;
