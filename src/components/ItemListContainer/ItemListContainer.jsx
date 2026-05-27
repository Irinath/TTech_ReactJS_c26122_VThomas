import { error } from "node:console";
import { useEffect, useState } from "react";
import { ItemList } from "../ItemList/ItemList";


export const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/data/products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      // para firebase - import { getProducts } from "../../services/productsService"; 
      .catch((err) => console.log(err))
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error al cargar el componente</p>;

  return (
    <section>
      <ItemList products={products}/>
    </section>
  );
};
