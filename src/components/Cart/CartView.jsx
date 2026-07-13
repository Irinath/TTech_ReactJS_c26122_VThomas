import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import "./Cart.css";
import { CartList } from "./CartList";
import { CartSummary } from "./CartSummary";

export const CartView = () => {
    const { cart } = useCart();

    return (
        <section className="cart-container">
            <h1>TU CARRITO DE COMPRAS 🛒</h1>

            {cart.length ? (
                <>
                <CartList/>
                <CartSummary/>
                </>
            ) : (
                <>
                <p className="empty-cart"> EL CARRITO ESTÁ VACÍO.</p>
                <Link className="btn primary bg-primary" to={"/"}>
                VOLVER
                </Link>
                </>
            )}
        </section>
    );
};