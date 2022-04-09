import React from "react";
import { getLatest } from "../api/tmdb-api";
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import PageTemplate from '../components/templateMovieListPage';
import PlaylistAddIcon from '../components/cardIcons/addToPlaylist';

const LatestMoviePage = (props) => {

  const {  data, error, isLoading, isError }  = useQuery('latest', getLatest)

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const movies = data.results;

  return (
    <PageTemplate
      title='Latest Movies'
      movies={movies}
      action={(movie) => {
        return <PlaylistAddIcon movie={movie} />
      }}
    />
  );
};

export default LatestMoviePage;