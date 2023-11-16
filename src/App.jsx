import React from "react"
import { useEffect } from "react"

import './App.css'
import searchIcon from './search.svg'


export default function App() {
const API_URL = "http://www.omdbapi.com/?apikey=4350f241 "


const movie1 = {
  "Title": "Amazing Spiderman Syndrome",
  "Year": "2021",
  "imdbID": "imdbd",
  "Type": "type",
  "Poster": "N/A"
}

//function for use effect
const searchMovies = async (title) => {
  const response = await fetch(`${API_URL}&s=${title}`)
  const data = await response.json()

  console.log(data.Search)

}

useEffect(() => {
  searchMovies('SpiderMan')
},[])
  return (

    <div className="app">
      <h1>MovieLand</h1>
      <div className="search">
        <input 
          placeholder="Search for movies"
          value=""
          onChange={() => {}}
        />
        <img 
          src={searchIcon}
          alt="search"
          onClick={() => {}}
        />
      </div>

      <div className="container">
        <div className="movie">
          <div>
            <p>{movie1.Year}</p>
          </div>

          <div>
            <img src={movie1.Poster !== 'N/A' ? movie1.Poster : "http://via.placeholder.com/400"} alt={movie1.Title}/>
          </div>
        </div>
      </div>
    </div>
  )
}


