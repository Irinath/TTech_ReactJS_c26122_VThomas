import { Link } from "react-router-dom";
import "./Dashboard.css";

export const Dashboard = () => {
  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <h2>PANEL DE ADMINISTRACION</h2>

        <div className="header-actions">
          <Link className="btn-primary" to={"/"}>
            Volver a la tienda
          </Link>
        </div>
      </header>

      <section className="dashboard-actions">
        <h3>Acciones rápidas</h3>

        <div className="actions-grid">
          <Link className="action-card" to={"/admin/products/new"}>
            ➕ Cargar
          </Link>
          //armar para la próxima componentes y links para
          listar/modificar/eliminar productos
        </div>
      </section>

      <section className="dashboard-help">
        <h3>Ayuda</h3>
        <p>Desde este panel podés gestionar los productos de la tienda</p>
      </section>
    </div>
  );
};
