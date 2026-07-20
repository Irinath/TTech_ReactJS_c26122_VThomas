import { Link } from "react-router-dom";
import "./Dashboard.css";
import { useAuth } from "../../../context/AuthContext";

export const Dashboard = () => {
    const { logout } = useAuth();

  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <h2>PANEL DE ADMINISTRACION</h2>

        <div className="header-actions">
          <Link className="btn-primary" to={"/"}>
            Volver a la tienda
          </Link>
          <button className="btn bg-delete primary" onClick={logout}>
            CERRAR SESIÓN
          </button>
        </div>
      </header>

      <section className="dashboard-actions">
        <h3>Acciones rápidas</h3>

        <div className="actions-grid">
          <Link className="action-card" to={"/admin/products/new"}>
            ➕ Cargar
          </Link>
          
           <Link className="action-card disable" to="#">
            ✏️ Modificar
          </Link>
          {/*armar para la próxima componentes y links para listar/modificar/eliminar productos*/}
        </div>
      </section>

      <section className="dashboard-help">
        <h3>Ayuda</h3>
        <p>Desde este panel podés gestionar los productos de la tienda</p>
      </section>
    </div>
  );
};
