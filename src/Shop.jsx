import Navbar from "./Navbar"
import HomeContent from "./HomeContent"
import './shop.css'
import ShopContent from "./ShopContent"

function Shop({ itemCount }) {
    return (
        <div className="shop">
            <Navbar itemCount={itemCount}></Navbar>
            <ShopContent></ShopContent>
        </div>
    )
}

export default Shop