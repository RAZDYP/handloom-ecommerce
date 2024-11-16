'use client';
import CartPage from "../../components/CartPage";

import { useState } from "react";

export default function Home() {
    const [cart, setCart] = useState([]);
    const addToCart = (product) => {
        setCart((prevCart) => [...prevCart, product]);
    };
    const removeFromCart = (productId) => {
        setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
    };
    return (
        <div className="font-sans bg-white h-[100vh]">
            <CartPage cart={cart} removeFromCart={removeFromCart} />
        </div>
    );
}