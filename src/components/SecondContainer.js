import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondContainer = () => {
  const movies = useSelector(store=>store.movies);
  return movies.nowPlayingMovies && (
    <div className=' bg-black'>
      <div className='-mt-52 relative z-20 pl-16'>
      <MovieList  title ={"Now Playing"}movies = {movies.nowPlayingMovies} />
      <MovieList  title ={"Popular"}movies = {movies.nowPlayingMovies} />
      <MovieList  title ={"Top Rated"}movies = {movies.nowPlayingMovies} />
      <MovieList  title ={"Upcoming"}movies = {movies.nowPlayingMovies} />
      </div>




    </div>
  )
}

export default SecondContainer