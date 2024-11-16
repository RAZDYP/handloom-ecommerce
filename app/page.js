'use client';
import { useState, useEffect } from "react";
import Navbar from "../components/Navbaar";
import Hero from "../components/Hero";

export default function Home() {
  const [cart, setCart] = useState([]);
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // Function to add items to the cart
  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);
      if (existingProduct) {
        // Increase quantity if product already exists
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );

      } else {
        // Add new product with quantity 1
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  return (
    <div className="font-sans bg-white min-h-screen">
      <Navbar cartCount={cart.reduce((count, item) => count + item.quantity, 0)} />
      <Hero addToCart={addToCart} />
    </div>
  );
}
