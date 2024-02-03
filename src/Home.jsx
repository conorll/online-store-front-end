import Navbar from "./Navbar"
import HomeContent from "./HomeContent"
import Product from "./ProductContent"
import './home.css'

function Home({ itemCount }) {
    return (
        <div className="home">
            <Navbar itemCount={itemCount}></Navbar>
            <HomeContent></HomeContent>
        </div>
    )
}

export default Home