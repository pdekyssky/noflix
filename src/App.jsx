import { useState } from "react"
import allMovies from "./data"
import Categories from "./Categories"

import "./App.css"

const App = () => {

  const [typeOfMovie, setTypeOfMovie] = useState("komedie")

  const finalMovie = allMovies.filter( (oneMovie)=> {
    return oneMovie["category"] === typeOfMovie
  } )
  


  return (
    <div>
    
    <div className="all-buttons">
        {Categories.map( (oneCategory, index) => {
          return <div>
            <button className="one-button" key={index} onClick={ () => setTypeOfMovie(oneCategory)}>
            {oneCategory}
            </button>
          </div>
        } )}
    </div>
    
    <div className="all-movies">
      {finalMovie.map( (oneMovie)=> {
        const {id, image, title, age, tags, description} = oneMovie

        return (
          <div key={id} className="one-movie">
            <img src={image} alt=""></img>
            <h2>{title}</h2>
            <p>{age}</p>
            <p>{tags}</p>
            <p>{description}</p>
          </div>
        )
      } )}
    </div>
    
    </div>
  )
}

export default App