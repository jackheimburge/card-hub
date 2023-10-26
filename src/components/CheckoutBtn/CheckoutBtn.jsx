export default function CheckoutBtn({ handleCheckout }) {
    return (
        <button className="btn btn-success" onClick={handleCheckout}>Checkout</button>
    );
}