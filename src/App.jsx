import { Route, Routes } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { Footer } from "../src/components/Footer/Footer";
import { Count } from "./components/Count/Count";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { CartView } from "./components/Cart/CartView"
import "./App.css";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
import { ProductSuccess } from "./components/adminComponents/ProductSuccess";
import { ProductFormContainer } from "./components/adminComponents/ProductFormContainer";

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
          <Route path="/admin" element={<ProductFormContainer />} />
          <Route
            path="/success/:id"
            element={<ProductSuccess/>}
          />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
