import React, { useEffect, useState } from 'react';
import './cartContent.css';

function CartContent({ shoppingCart, setShoppingCart }) {
    const [cartProducts, setCartProducts] = useState([]);

    function handleQuantityChange(id, newQuantity) {

        const newShoppingCart = [...shoppingCart]
        const index = newShoppingCart.findIndex(item => item.id === id)

        newShoppingCart[index].quantity = newQuantity
        setShoppingCart(newShoppingCart)

        localStorage.setItem('shoppingCart', JSON.stringify(newShoppingCart))

    }

    function handleRemoveItem(id) {
        const newShoppingCart = [...shoppingCart]
        const index = newShoppingCart.findIndex(item => item.id === id)

        newShoppingCart.splice(index, 1)
        setShoppingCart(newShoppingCart)

        localStorage.setItem('shoppingCart', JSON.stringify(newShoppingCart))
    }

    useEffect(() => {
        async function fetchCartProducts() {
            try {
                const productPromises = shoppingCart.map(async (item) => {
                    const response = await fetch(`https://fakestoreapi.com/products/${item.id}`);
                    const productData = await response.json();
                    productData.quantity = item.quantity
                    return productData;
                });

                const products = await Promise.all(productPromises);
                setCartProducts(products);
            } catch (error) {
                console.error('Error fetching cart products:', error);
            }
        }

        fetchCartProducts();
    }, [shoppingCart]);

    return (
        <div className="cart-content">
            <h1>Shopping Cart</h1>
            {cartProducts.length > 0 &&
                <div className="cart-items-wrapper">
                    <div className="cart-items">
                        {cartProducts.length > 0 && cartProducts.map((product) => (
                            <div className="cart-item" key={product.id}>
                                <div className="image-wrapper">
                                    <img src={product.image} alt={product.title} />
                                </div>
                                <h2 className='product-title'>{product.title}</h2>
                                <h2 className='product-price'>${product.price.toFixed(2)}</h2>
                                {/* Assuming you have a quantity property in your shopping cart items */}
                                <form>
                                    <label htmlFor="quantity">Quantity:</label>
                                    <input
                                        type="number"
                                        id="quantity"
                                        min="1"
                                        defaultValue={product.quantity}
                                        onChange={(event) => handleQuantityChange(product.id, +event.target.value)}
                                    />
                                </form>
                                <h2 className='product-total'>${(product.price * product.quantity).toFixed(2)}</h2>
                                <button className="remove-item" onClick={() => handleRemoveItem(product.id)}>&times;</button>
                            </div>
                        ))}
                    </div>
                </div>
            }
        </div>
    );
}

export default CartContent;
