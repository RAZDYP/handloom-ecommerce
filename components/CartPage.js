import { useState, useEffect } from "react";
import Link from "next/link";
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import RemoveRoundedIcon from '@mui/icons-material/RemoveRounded';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
export default function CartPage() {
    const [cart, setCart] = useState([]);

    // Load cart from localStorage on component mount
    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
        setCart(storedCart);
    }, []);

    // Save cart to localStorage whenever it changes
    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

    // Function to decrease quantity or remove product
    const decreaseQuantity = (productId) => {
        setCart((prevCart) => {
            const updatedCart = prevCart.map((item) =>
                item.id === productId
                    ? { ...item, quantity: item.quantity - 1 }
                    : item
            ).filter((item) => item.quantity > 0); // Remove items with quantity 0
            return updatedCart;
        });
    };
    const IncreaseQuantity = (productId) => {
        setCart((prevCart) => {
            const updatedCart = prevCart.map((item) =>
                item.id === productId
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            ).filter((item) => item.quantity > 0); // Remove items with quantity 0
            return updatedCart;
        });
    }
    const handleCheckout = () => {
        window.location.href = "/checkout";
    };
    // Function to remove product completely
    const removeFromCart = (productId) => {
        setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
    };
    const totalPrice = cart.reduce(
        (sum, item) => sum + item.quantity * parseFloat(item.price.replace("₹", "").replace(",", "")),
        0
    );

    return (
        <div className="p-8 bg-gray-100 min-h-screen">
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-3xl font-bold text-gray-800">Your Cart</h2>

            </div>
            {cart.length === 0 ? (
                <div className="bg-white p-8 rounded-lg shadow-md text-center">
                    <p className="text-gray-500">Your cart is empty.</p>
                </div>
            ) : (
                <div className="grid grid-cols-1 gap-6">
                    {cart.map((item) => (
                        <div
                            key={item.id}
                            className="bg-white p-4 rounded-lg shadow-md flex items-center justify-between"
                        >
                            <div className="flex items-center space-x-4">
                                {/* Product Image */}
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-20 h-20 object-cover rounded-lg border border-gray-200"
                                />
                                {/* Product Info */}
                                <div>
                                    <p className="font-semibold text-gray-800">{item.title}</p>
                                    <p className="text-sm text-gray-500">{item.price}</p>
                                    <p className="text-sm text-gray-600">Quantity: {item.quantity}</p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-4">
                                {/* Increase Button */}
                                <button
                                    onClick={() => IncreaseQuantity(item.id)}
                                    className="  px-3 py-1 rounded  transition duration-200"
                                >
                                    <AddRoundedIcon className="text-gray-500" style={{
                                        fontSize: "2.5rem"
                                    }} />
                                </button>
                                {/* Decrease Button */}
                                <button
                                    onClick={() => decreaseQuantity(item.id)}
                                    className=" px-3 py-1  transition duration-200"
                                >
                                    <RemoveRoundedIcon className="text-gray-500" style={{
                                        fontSize: "2.5rem"
                                    }} />
                                </button>
                                {/* Remove Button */}
                                <button
                                    onClick={() => removeFromCart(item.id)}
                                    className=" transition duration-200"
                                >
                                    <DeleteRoundedIcon className="text-red-500" style={{
                                        fontSize: "2.5rem"
                                    }} />
                                </button>
                            </div>
                        </div>
                    ))}
                    <div className="bg-white p-6 rounded-lg shadow-md flex justify-between items-center">
                        {/* Total Price */}
                        <h3 className="text-xl font-bold text-gray-800">
                            Total: ₹{totalPrice.toFixed(2)}
                        </h3>
                        {/* Checkout Button */}
                        <button
                            onClick={handleCheckout}
                            className="bg-gray-200 text-[black] font-semibold border px-6 py-2 rounded-lg hover:bg-gray-300 transition duration-200"
                        >
                            Checkout
                        </button>
                    </div>
                </div>
            )}
        </div>

    );
}
