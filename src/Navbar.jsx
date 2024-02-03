import './navbar.css';
import { FaHouse } from "react-icons/fa6";
import { FaBagShopping } from "react-icons/fa6";
import { FaCartShopping } from "react-icons/fa6";
import { Link } from 'react-router-dom';

function Navbar({ itemCount }) {

    return (
        <ul className="navbar">
            <li className='home-link'>
                <Link to="/">
                    <FaHouse />
                </Link>
            </li>
            <li>
                <Link to="/shop">
                    <FaBagShopping />
                    Shop
                </Link>
            </li>
            <li>
                <Link to="/cart">
                    <FaCartShopping />
                    Shopping Cart {itemCount > 0 && `(${itemCount})`}
                </Link>
            </li>
        </ul>
    );
}

export default Navbar;