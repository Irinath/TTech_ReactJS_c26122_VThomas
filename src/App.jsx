import { Route, Routes } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { Footer } from "../src/components/Footer/Footer";
import { Count } from "./components/Count/Count";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import "./App.css";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/products/:id" element={<ItemDetailContainer />} />
          <Route path="/carrito" element={<CartView />} />
          {/*Ruta opcional para categoria */};
          <Route path="/admin" element={<h1>ADMIN</h1>} />
          <Route
            path="/success/:id"
            element={<h1>Producto cargado correctamente</h1>}
          />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
