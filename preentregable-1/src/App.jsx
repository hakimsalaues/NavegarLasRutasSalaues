import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {

  return(
    <div className="welcome-message">
      <NavBar />
      <ItemListContainer welcomeMessage="" />
    </div>
  );
  
}

export default App;