import React, { useState , useEffect} from "react"

import './App.css'
import searchIcon from './search.svg'

import MovieCard from "./MovieCard"


export default function App() {
const API_URL = "http://www.omdbapi.com/?apikey=4350f241 "
const [movies, setMovies] = useState([])


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

  setMovies(data.Search)

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

      {
        movies?.length > 0 
        ? (
          <div className="container">
            {
              movies.map((movie) => (
                <MovieCard movie={movie}/>
              ))
            }
          </div>
        ) : (
          <div className="empty">
            <h2>No movies found</h2>
          </div>
        )
      }


    </div>
  )
}


