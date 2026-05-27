import React from 'react';
import { Routes } from 'react-router-dom';
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import './App.css';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';

function App() {  
  return (
    <>
<Header/>
<main>
  <Routes>
    <Route path="/" element={<ItemListContainer/>}/>
    <Route path="/products/:id" element={<ItemDetailContainer/>}/>
    <Route path="/carrito" elemente={<h1>"Carrito"</h1>} /> 
    {/*Ruta opcional para categoria */};
        </Routes>
</main>
<Footer/>

    </>
  );
};

export default App
