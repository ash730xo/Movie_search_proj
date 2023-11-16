import React, { useState , useEffect} from "react"

import './App.css'
import searchIcon from './search.svg'

import MovieCard from "./MovieCard"


export default function App() {
const API_URL = "http://www.omdbapi.com/?apikey=4350f241 "
const [movies, setMovies] = useState([])
const [searchTerm, setSearchTerm] = useState("")

//function for use effect
//async function 
//whatever title is inputed it waits for the response
const searchMovies = async (title) => {
  const response = await fetch(`${API_URL}&s=${title}`)
  const data = await response.json()

  setMovies(data.Search)

}

//useEffect 
useEffect(() => {
    //what renders during first load since the dependency array is empty
  searchMovies('Hello Kitty')
},[])
  return (

    // App name 
    <div className="app">
      <h1>MovieLand</h1>
      <div className="search">


      {/* 
        Search movie input
        sets the value for whatever the user is typing by using the searchTerm useState
      */}
        <input 
          placeholder="Search for movies"
          value={searchTerm}
          // takes the input on change 
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        {/* 
          Search image
          Whenever it is clicked it updated the search to the movie desired
         */}
        <img 
          // displays image that is imported 
          src={searchIcon}
          alt="search"
          // when image is click set the search to the user input
          onClick={() => searchMovies(searchTerm)}
        />
      </div>

      {/* 
         lines 70 - 85
         Turnery function 
         if the movie length is more than 0 display the movie cards (whatever it was hard coded to (line 28 in the useEffect function))
         If the lenght is not more than 0 then display np moves found
       */}

      {
        movies?.length > 0 
        ? (
          <div className="container">
            {
              movies.map((movie) => (
                /* Displays the movie card component while setting the prop */
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


