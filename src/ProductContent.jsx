import { useEffect, useState, useRef } from "react";
import './productContent.css';

function ProductContent({ id, shoppingCart, setShoppingCart }) {
    const [product, setProduct] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [quantity, setQuantity] = useState(1); // State to track quantity
    const formRef = useRef(null); // Reference to the form element

    useEffect(() => {
        async function fetchProduct() {
            try {
                const response = await fetch(`https://fakestoreapi.com/products/${id}`);
                if (!response.ok) {
                    throw new Error("Failed to fetch product");
                }
                const productData = await response.json();
                setProduct(productData);
                setIsLoading(false);
            }
            catch (error) {
                setError(error);
                setIsLoading(false);
            }
        }

        fetchProduct();
    }, [id]);

    const handleQuantityChange = (event) => {
        setQuantity(parseInt(event.target.value));
    };

    const handleAddToCart = () => {
        if (quantity > 0) {
            const newShoppingCart = [...shoppingCart];
            const index = newShoppingCart.findIndex(item => item.id === id)

            const newProduct = { id, quantity }

            if (index !== -1) {
                const existingQuantity = newShoppingCart[index].quantity
                newShoppingCart.splice(index, 1)
                newProduct.quantity += quantity
            }

            newShoppingCart.push(newProduct);

            console.log(newShoppingCart);
            setShoppingCart(newShoppingCart);

            localStorage.setItem('shoppingCart', JSON.stringify(newShoppingCart))
        }
    };


    if (isLoading) {
        return <></>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    if (!product) {
        return <div>Product not found</div>;
    }

    return (
        <div className="product-content">
            <img src={product.image} alt={product.title} />
            <div className="product-text">
                <div className="product-details">
                    <h1>{product.title}</h1>
                    <p>{product.description}</p>
                </div>
                <div className="buy-product">
                    <h3>${product.price.toFixed(2)}</h3>
                    <form>
                        <label htmlFor="quantity">Quantity:</label>
                        <input
                            type="number"
                            id="quantity"
                            min="1"
                            defaultValue="1"
                            onChange={handleQuantityChange}
                        />
                    </form>
                    <button onClick={handleAddToCart}>Add to cart</button>
                </div>
            </div>
        </div>
    );
}

export default ProductContent;
