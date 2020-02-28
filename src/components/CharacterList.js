import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Card, CardHeader, CardBody, CardTitle, CardText } from 'reactstrap';
import SearchForm from "../components/SearchForm";
export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacters] = useState([]);

  const [query, setQuery] = useState('');

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios.get(`https://cors-anywhere.herokuapp.com/https://rickandmortyapi.com/api/character/`)
      .then(res => {

        const characters = res.data.results.filter(character =>
          character.name.toLowerCase().includes(query.toLowerCase())
        );

        setCharacters(characters)
      })


  }, [query]);

  const handleInputChange = e => {
    setQuery(e.target.value)
  };

  const onSubmit = e => {

  };

  return (
    //className="character-list"
    <div>
      <h2>Characters</h2>
      <SearchForm query={query} handleInputChange={handleInputChange} />
      <div>
        {characters.map(character => {
          return (
            <ul key={character.id}>
              <div>
                <Card>
                  <div className='boxes'>
                    <CardHeader>{character.name}</CardHeader>
                    <CardText><p>Status: {character.status}</p>
                      <p>Species: {character.species}</p></CardText>
                  </div>
                </Card>
              </div>
            </ul>
          );
        })}
      </div>
    </div>
  );
}
