import { AliasedAggregate } from "firebase/firestore/pipelines";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ItemDetail } from "../ItemDetail/ItemDetail";

export const ItemDetailContainer = () => {
const { id } = useParams ();

const [itemDetail, setItemDetail] = useState(null);
const [loading, setLoading] = useState(true);

useEffect(() => {
    fetch("/data/products.json")
    .then((res) => res.json())
    .then((data) => {
        const item = data.find((elemnet) => String(elemnet.id) === id);
        if(item) {
            setItemDetail(item);
            return;
        }

        throw new Error ("Elemento no Encontrado");
    })
    .catch((err) => console.log(err))
    .finally(() => setLoading(false));
}, []);

if (loading) return <p>Cargando...</p>;
if (!itemDetail) return <p>Producto no Encontrado</p>; 
/* Devuelve el contenedor con los datos del carrito */
return (
    <section>
  <h1>Detalles del Producto</h1>
  <div className="product-container">
  <ItemDetail item = {itemDetail}/>
  </div>  
    </section>
);

};