import Navbar from "./Navbar"
import CartContent from "./CartContent"
import './cart.css'

function Cart({ shoppingCart, setShoppingCart, itemCount }) {
    return (
        <div className="cart">
            <Navbar itemCount={itemCount}></Navbar>
            <CartContent shoppingCart={shoppingCart} setShoppingCart={setShoppingCart}></CartContent>
        </div>
    )
}

export default Cart