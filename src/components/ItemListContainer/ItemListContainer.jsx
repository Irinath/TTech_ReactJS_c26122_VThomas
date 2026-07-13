import { useEffect, useState } from "react";
import { ItemList } from "../ItemList/ItemList";
import { useParams } from "react-router-dom";


export const ItemListContainer = () => {
  const { category } = useParams(); // Tomamos "category" del useParams para filtrar 
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    //setLoading();

    fetch("/data/products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      // para firebase - import { getProducts } from "../../services/productsService"; 
      .catch((err) => console.log("Hubo un error:", err))
      .finally(() => setLoading(false));
  }, [category]);

  if (loading) return <p>Cargando...</p>;
  //if (err) return <p>Error al cargar el componente</p>;

  return (
    <section>
      <ItemList products={products}/>
    </section>
  );
};
