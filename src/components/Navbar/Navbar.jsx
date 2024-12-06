import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'; 
import { useState } from 'react';

export default function Navbar() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    return (
        <nav className="bg-white shadow-md p-4">
            <ul className="flex flex-wrap justify-center md:justify-start">
                <li className="mx-4 text-sm font-medium uppercase text-gray-700 transition duration-300 ease-in-out hover:text-indigo-500">
                    <Link to="/">Home</Link>
                </li>
                {}
                <li 
                    className="relative mx-4 text-sm font-medium uppercase text-gray-700 transition duration-300 ease-in-out hover:text-indigo-500 cursor-pointer"
                    onMouseEnter={() => setIsDropdownOpen(true)}
                    onMouseLeave={() => setIsDropdownOpen(false)}
                >
                    <span>Celulares</span>
                    {isDropdownOpen && (
                        <ul className="absolute left-0 mt-2 w-40 bg-white shadow-md rounded-lg">
                            <li className="px-4 py-2 hover:bg-fuchsia-700 hover:text-white transition">
                                <Link to="/category/Xiaomi">Xiaomi</Link>
                            </li>
                            <li className="px-4 py-2 hover:bg-fuchsia-700 hover:text-white transition">
                                <Link to="/category/iPhone">iPhone</Link>
                            </li>
                            <li className="px-4 py-2 hover:bg-fuchsia-700 hover:text-white transition">
                                <Link to="/category/Samsung">Samsung</Link>
                            </li>
                        </ul>
                    )}
                </li>
                
                <li className="mx-4 text-sm font-medium uppercase text-gray-700 transition duration-300 ease-in-out hover:text-indigo-500">
                    <Link to="/about">About</Link>
                </li>
                <li className="mx-4 text-sm font-medium uppercase text-gray-700 transition duration-300 ease-in-out hover:text-indigo-500">
                    <Link to="/contact">Contact</Link>
                </li>
                <li className="mx-4">
                    <Link to="/cart" aria-label="Shopping Cart">
                        <FontAwesomeIcon icon={faShoppingCart} className="text-xl text-gray-700 hover:text-lime-600" />
                    </Link>
                </li>
            </ul>
        </nav>
    );
}



