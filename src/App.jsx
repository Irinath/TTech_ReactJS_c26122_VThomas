import { Navigate, Route, Routes } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { Footer } from "../src/components/Footer/Footer";
import { Count } from "./components/Count/Count";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { CartView } from "./components/Cart/CartView";
import "./App.css";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
import { ProductSuccess } from "./components/adminComponents/ProductSuccess";
import { ProductFormContainer } from "./components/adminComponents/ProductFormContainer";
import { PublicLayout } from "./layouts/PublicLayout";
import { AdminLayout } from "./layouts/AdminLayout";
import { Dashboard } from "./components/adminComponents/Dashboard/Dashboard";
import { ProtectedRoute } from "./components/ProtectedRoutes/ProtectedRoutes";
import { Login } from "./components/Login/Login";

function App() {
  return (
    <>
      
      <main>
        <Routes>
          {/* ====================== RUTAS PÚBLICAS ======================= */}
          <Route element={<PublicLayout />}>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/category/:category" element={<ItemListContainer />} />
            {/*Ruta opcional para categoria */};
            <Route path="/products/:id" element={<ItemDetailContainer />} />
            <Route path="/carrito" element={<CartView />} />
          </Route>

          <Route path="/admin/login" element={<Login />} />
          {/* ====================== RUTAS ADMINISTRADOR ======================= */}
          <Route path="/admin" element={
            <ProtectedRoute>
              <AdminLayout />
            </ProtectedRoute>
          }>

            <Route index element={<Navigate to={"dashboard"} />} />
            <Route path="dashboard" element={<Dashboard />} />

            <Route path="products/new" element={<ProductFormContainer />} />
            <Route path="products/success/:id" element={<ProductSuccess />} />
          </Route>
        </Routes>
      </main>
      
    </>
  );
}

export default App;
