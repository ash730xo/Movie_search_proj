import React from "react"
import { useEffect } from "react"

import './App.css'
import searchIcon from './search.svg'


export default function App() {
const API_URL = "http://www.omdbapi.com/?apikey=4350f241 "

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

      </div>
    </div>
  )
}


