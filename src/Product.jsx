import Navbar from "./Navbar"
import ProductContent from "./ProductContent"
import { useParams } from "react-router-dom"
import './product.css'


function Product({ shoppingCart, setShoppingCart, itemCount }) {

    const { id } = useParams()
    const idInt = parseInt(id)

    return (
        <div className="product-page">
            <Navbar itemCount={itemCount}></Navbar>
            <ProductContent id={idInt} shoppingCart={shoppingCart} setShoppingCart={setShoppingCart}></ProductContent>
        </div>
    )
}

export default Product