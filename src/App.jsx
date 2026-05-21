import React from 'react';
import { Routes } from 'react-router-dom';
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import './App.css';

import {ItemListContainer} from "./components/ItemListContainer";

function App() {  
  return (
    <>
<Header/>
<main>
  <Routes>
    <Route path="/" element={<ItemListContainer/>}/>
    <Route path="/carrito" elemente={<h1>"Carrito"</h1>} /> 
        </Routes>
</main>

    </>
  )
}

export default App
