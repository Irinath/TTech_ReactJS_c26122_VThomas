import { Link } from "react-router-dom";
import "./ItemList.css";
import { Item } from "../Item/Item";

export const ItemList = ({ products }) => {
  //console.log("Products de itemlist");

  if (!products.length) {
    return <p>No hay productos en la Lista</p>;
  }

  return (
    <div className="products-container">
      {products.map((product) => (
        <Link to={`/products/${product.id}`} key={product.id}>
          <Item {...product} />
        </Link>
      ))}
    </div>
  );
};
