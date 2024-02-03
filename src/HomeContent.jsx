import './homeContent.css'
import { Link } from 'react-router-dom'

function HomeContent() {
    return (
        <div className="home-content">
            <h1>Welcome to Our Shop</h1>
            <h2>We offer a wide range of high-quality products. Explore our collection and find the perfect item for you.</h2>
            <Link to='/shop'>Shop Now</Link>
        </div>
    )
}

export default HomeContent