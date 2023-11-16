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
    <>
      <h1>App</h1>
    </>
  )
}


