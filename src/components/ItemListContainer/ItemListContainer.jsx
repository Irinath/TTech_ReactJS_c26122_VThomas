import { useEffect, useState } from "react";
import { ItemList } from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { getByCategory } from "../../services/productsService";


export const ItemListContainer = () => {
  const { category } = useParams(); // Tomamos "category" del useParams para filtrar 
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    //setLoading(true);

    // para firebase - import { getProducts } from "../../services/productsService"; 
    //getProducts() === si no utilizo categorías ====
    getByCategory(category)
      .then((data) => setProducts(data))
      .catch((err) => console.log("Hubo un error:", err))
      .finally(() => setLoading(false));
  }, [category]); 
  //en el array hay que devolver la catagoria "category" para filtrar por categoría

  if (loading) return <p>Cargando...</p>;
  //if (err) return <p>Error al cargar el componente</p>;

  return (
    <section>
      <ItemList products={products}/>
    </section>
  );
};
