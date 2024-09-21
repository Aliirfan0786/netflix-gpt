

import {  useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMoviesTrailer";


const VideoBackground = ({ movieId }) => {
  
  const trailorVideo = useSelector(store=>store.movies?.trailorVideo);

  useMovieTrailer(movieId)

  return (
    <div>
      <iframe
        className="w-screen aspect-video"
        src={"https://www.youtube.com/embed/"+trailorVideo?.key+"?&autoplay=1&mute=1"}
        title="YouTube video player"
      
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
       
      ></iframe>
    </div>
  );
};

export default VideoBackground;
