
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer'
import SecondContainer from './SecondContainer'
import usePopularMovies from '../hooks/usePopularMovies'
import useTopRatedMovies from '../hooks/useTopRatedMovies'
import { addUpcomingMovies } from '../utils/moviesSlice'
import GptSearch from './GptSearch'
import { useSelector } from 'react-redux'

const Browse = () => {
  const showGptSearch = useSelector((store =>store.gpt.showGptSearch));


   useNowPlayingMovies();
   usePopularMovies();
   useTopRatedMovies();
   addUpcomingMovies();

  return (
    <div>
      <Header />
      {showGptSearch ? (
      <GptSearch /> ):(
        <>
        <MainContainer/>
        <SecondContainer/>
        </>
      )}
     
    </div>
  )
}

export default Browse