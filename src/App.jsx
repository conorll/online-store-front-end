import './App.css'
import Home from './Home'
import Shop from './Shop'
import Product from './Product'
import Cart from './Cart'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'

function App() {

  const [shoppingCart, setShoppingCart] = useState([])

  useEffect(() => {
    const storedShoppingCart = localStorage.getItem('shoppingCart');
    if (storedShoppingCart) {
      setShoppingCart(JSON.parse(storedShoppingCart));
    }
  }, []);

  let itemCount = 0

  for (let item of shoppingCart) {
    itemCount += 1
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home itemCount={itemCount} />
    },
    {
      path: "/shop",
      element: <Shop itemCount={itemCount} />
    },
    {
      path: "/product/:id",
      element: <Product shoppingCart={shoppingCart} setShoppingCart={setShoppingCart} itemCount={itemCount} />
    },
    {
      path: "/cart",
      element: <Cart shoppingCart={shoppingCart} setShoppingCart={setShoppingCart} itemCount={itemCount} />
    },
  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
