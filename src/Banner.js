import React, {useEffect, useState } from 'react'
import './Banner.css'
import axios from './axios'
import requests from './requests'

function Banner() {
    const [movie, setMovie] = useState([]);

    useEffect(() => {
      try {
        async function fetchData() {
          const request = await axios.get(requests.fetchNetflixOriginals);
          // console.log(request);
          setMovie(
            request?.data.results[
              Math.floor(Math.random() * request.data.results.length)
            ]
          );
          return request;
        }
        fetchData();
      } catch (error) {
        console.log(error)
        
      }
      
    }, []);
    // console.log(movie);

    function truncate(str, n) {
        return str?.length > n ? str.substr(0, n-1) + "..." : str;
    }

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "Cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "Center Center",
      }}
      >

      <div className="banner__contents">
        <h1 className="banner__title">
         {movie?.title || movie?.name || movie.original_name}
        </h1>
        <div className="banner__buttoms">
        <button className="banner__buttom">Play</button>
        <button className="banner__buttom">My list</button>
        </div>
        <h1 className="banner__description">
            {truncate(movie?.overview, 150)}</h1>
      </div>
      <div className="banner__fadeBottom" />
    </header>
  );
}

export default Banner