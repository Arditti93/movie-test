import React from "react";
import {useState} from 'react'



const apiFetch = async (searchTerm) => {
  const url = `https://moviesdatabase.p.rapidapi.com/titles/search/akas/${searchTerm}`;
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '19f738bdd6msh3dffd3700197861p15d901jsnb906d8302a9a',
      'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
    }
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}

const App = () => { 

  const [searchTerm, setSearchTerm] = useState("")

  return (
    <div className="search">
    <input
        placeholde="search for a film"
        onChange={(event) => setSearchTerm(event.target.value)}
    />
    <button onClick={() => apiFetch(searchTerm)}>
        Click to search for a film
    </button>
  </div>
  );
};

export default App;
