import React, { useEffect, useState } from "react"
// 3
import './App.css';
import Receptura from './Receptura'






const App = () => {
  // 4 dwa typy klasy

  const API_ID = "e3502b81";
  const API_KEY = "9cf8573674cbbfd407e37c70efc2dade";

  const [oneRecipe, setRecepies] = useState([])
  const [search, setSearch] = useState("")
  // x
  const [searchEnter, setSearchEnter] = useState("milk")

  // const www = `https://api.edamam.com/search?q=chicken&app_id=${API_ID}&app_key=${API_KEY}`


  useEffect(() => {
    console.log("ruszyliśmy")
    getRecepies()

  }, [searchEnter])
  // 6
  // 12

  const getRecepies = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${searchEnter}&app_id=${API_ID}&app_key=${API_KEY}`);
    const data = await response.json();
    // 7
    console.log(data.hits)
    setRecepies(data.hits)
    // 5
  }

  const searchNewRecepie = e => {
    setSearch(e.target.value)
    // 13
  }
  const getTheFucckingReceipe = e => {
    e.preventDefault();
    setSearchEnter(search)
    setSearch("")

  }



  return (
    <div className="App">
      <h1 className="finalTitle">Find you desire recipe</h1>
      <form className="search-form" onSubmit={getTheFucckingReceipe}>
        <input type="text" className="search-input" value={search} placeholder="type here" onChange={searchNewRecepie} />
        {/* 12 */}
        {/* 1 */}
        <button type="submit" className="search-button">Search</button>
        {/* 2 */}
      </form>
      <div className="myRecipe">
        {oneRecipe.map(item => (
          // 9
          <Receptura
            key={item.recipe.label}
            title={item.recipe.label}
            image={item.recipe.image}
            calories={item.recipe.calories}
            ingredients={item.recipe.ingredients}
          />
        ))}
      </div>

    </div >

  )
}


export default App