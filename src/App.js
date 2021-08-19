import React, { useEffect, useState } from "react"
import './App.css';

import api from "./services/api"
import CharacterCard from './components/Charactercard'
import Header from './components/Header'

function App() {
  const [char, setChar] = useState([])

  useEffect( () => {
    api
      .get("character/")
      .then((response) => 
      setChar(response.data.results))
    }, [])

  return (
    <div>
      <Header />      
      <div className="App">
        {char.map((chars, id) => {
          return <CharacterCard key={id} chars={chars} />
        })}
        {console.log(char)}

      </div>
    </div>
  );
}

export default App;
