import React from "react";

// Takes the movie prop so we can use it in this file 
const MovieCard = ({ movie }) => {
    return (

        // movie card div 
        <div className="movie">
            <div>
            {/* displays the year by calling the prop and title */}
            <p>{movie.Year}</p>
            </div>

            <div>
            {/* 
                tunary expression 
                If there is no movie poster display the error code 
             */}
            <img src={movie.Poster !== 'N/A' ? movie.Poster : "http://via.placeholder.com/400"} alt={movie.Title}/>
            </div>

            <div>

            {/* Dispays the movie type  */}
            <span>{movie.Type}</span>

            {/* displays the movie title */}
            <h3>{movie.Title}</h3>
            </div>
        </div>
    )
}

export default MovieCard