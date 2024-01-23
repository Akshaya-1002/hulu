import React from 'react'
import request from '../../helpers/request'
import "./Navbar.css"

const Navbar = ({setSelectedOption}) => {
  return (
    <div className='nav'>
      <h3 onClick={() => setSelectedOption(request.fetchTrending)}>Trending</h3>
      <h3 onClick={() => setSelectedOption(request.fetchTopRated)}>Top Rated</h3>
      <h3 onClick={() => setSelectedOption(request.fetchActionMovies)}>Action</h3>
      <h3 onClick={() => setSelectedOption(request.fetchComedyMovies)}>Comedy</h3>
      <h3 onClick={() => setSelectedOption(request.fetchHorrorMovies)}>Horror</h3>
      <h3 onClick={() => setSelectedOption(request.fetchRomanceMovies)}>Romance</h3>
      <h3 onClick={() => setSelectedOption(request.fetchMystery)}>Mystery</h3>
      <h3 onClick={() => setSelectedOption(request.fetchSciFi)}>Sci-fi</h3>
      <h3 onClick={() => setSelectedOption(request.fetchWestern)}>Western</h3>
      <h3 onClick={() => setSelectedOption(request.fetchAnimation)}>Animation</h3>
      <h3 onClick={() => setSelectedOption(request.fetchTv)}>Movie</h3>
    </div>
  )
}

export default Navbar;
