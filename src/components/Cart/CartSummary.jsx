import { useCart } from "../../context/CartContext";

export const CartSummary = () => {
    const { getCartTotal, checkout } = useCart();

    const total = getCartTotal();

    return (
        <>
        <p>TOTAL A PAGAR: ${ total } </p>
        <button className="btn bg-sucess primary" onClick={checkout}>
            FINALIZAR COMPRA </button>
        </>
    );
};