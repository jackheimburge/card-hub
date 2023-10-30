export default function CheckoutBtn({ handleCheckout, cart, total }) {

    return (
        <button className="btn btn-success" onClick={handleCheckout}>Checkout: {cart.length} items  (${total})</button>
    );
}