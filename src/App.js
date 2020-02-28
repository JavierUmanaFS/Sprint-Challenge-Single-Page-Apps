import React from "react";
import Header from "./components/Header.js";
import { Route, Link, Switch } from 'react-router-dom';
import WelcomePage from "./components/WelcomePage.js";
import CharacterList from "./components/CharacterList.js";


export default function App() {
  return (
    <main>
      <Route exact path='/'>
        <Header />
        <div>
          <CharacterList />
        </div>
      </Route>
      <Route exact path='/welcome'>
        <WelcomePage />
      </Route>
    </main>
  );
}
