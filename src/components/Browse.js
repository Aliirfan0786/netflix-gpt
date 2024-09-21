
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer'
import SecondContainer from './SecondContainer'
import usePopularMovies from '../hooks/usePopularMovies'
import useTopRatedMovies from '../hooks/useTopRatedMovies'
import { addUpcomingMovies } from '../utils/moviesSlice'

const Browse = () => {
   useNowPlayingMovies();
   usePopularMovies();
   useTopRatedMovies();
   addUpcomingMovies();

  return (
    <div>
      <Header />
      <MainContainer/>
      <SecondContainer/>
    </div>
  )
}

export default Browse