import React, { createContext, useState, useEffect, useContext } from 'react';

const CartArgument = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState(() => {
        const storedCart = localStorage.getItem('cart');
        return storedCart ? JSON.parse(storedCart) : [];
    });

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    const addItemToCart = (product) => {
        const existingProduct = cart.find(item => item.id === product.id);
        if (existingProduct) {
            setCart(cart.map(item => 
                item.id === product.id ? { ...item, quantity: item.quantity + product.quantity } : item
            ));
        } else {
            setCart([...cart, { ...product, quantity: 1 }]);
        }
    };

    const removeItemFromCart = (id) => {
        setCart(cart.filter(item => item.id !== id));
    };

    const clearCart = () => {
        setCart([]);
    };

    const updateQuantity = (id, newQuantity, stock) => {
        const adjustedQuantity = Math.max(1, Math.min(newQuantity, stock));
        setCart(cart.map(item => 
            item.id === id ? { ...item, quantity: adjustedQuantity } : item
        ));
    };
    

    return (
        <CartArgument.Provider value={{ cart, addItemToCart, removeItemFromCart, clearCart, updateQuantity }}>
            {children}
        </CartArgument.Provider>
    );
};

export const useCart = () => {
    return useContext(CartArgument);
};


