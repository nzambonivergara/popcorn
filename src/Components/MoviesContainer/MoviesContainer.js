import React from 'react';
import MovieCard from '../MovieCard/MovieCard';
import './MoviesContainer.css';

const MoviesContainer = ({ movies, selectMovie }) => {
  const movieCards = movies.map((movie) => {
    return (
      <MovieCard
        poster={movie.poster_path}
        title={movie.title}
        ratings={movie.average_rating.toFixed(1)}
        id={movie.id}
        key={movie.id}
        selectMovie={selectMovie}
      />
    );
  });

  return (
    <section>
      <div>
        <img
          className="banner"
          src="https://image.tmdb.org/t/p/original//zGVbrulkupqpbwgiNedkJPyQum4.jpg"
        />
      </div>
      <div className="movies-container">{movieCards}</div>;
    </section>
  );
};

export default MoviesContainer;
