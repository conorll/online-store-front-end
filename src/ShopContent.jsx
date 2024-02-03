import { useEffect } from "react"
import { useState } from "react"
import './shopContent.css'
import { Link } from "react-router-dom"

function ShopContent() {

    const [products, setProducts] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        async function fetchProducts() {
            try {
                const response = await fetch('https://fakestoreapi.com/products')
                if (!response.ok) {
                    throw new Error("Failed to fetch products")
                }
                const productsData = await response.json()
                setProducts(productsData)
                setIsLoading(false)
            }
            catch (error) {
                setError(error)
                setIsLoading(false)
            }
        }

        fetchProducts()
    }, [])

    return (
        <div className="shop-content">
            {!isLoading &&
                <div className="shop-content-header">
                    <h1>Shop All</h1>
                </div>
            }
            <div className="products">
                {products.map(product => {
                    return (
                        <Link to={`/product/${product.id}`} className="product" key={product.id}>
                            <img src={product.image} alt={product.title} />
                            <p>{product.title}</p>
                            <h3>${product.price.toFixed(2)}</h3>
                        </Link>
                    )
                })}
            </div>
        </div>
    )

}

export default ShopContent