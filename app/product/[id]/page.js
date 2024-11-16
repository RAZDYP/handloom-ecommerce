'use client';
import { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import RemoveRoundedIcon from '@mui/icons-material/RemoveRounded';

export default function ProductDetails() {
    const router = useRouter();
    const { id } = useParams();

    const [product, setProduct] = useState(null);
    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
        // Fetch the product details from localStorage using the provided ID
        const products = JSON.parse(localStorage.getItem("products")) || [];
        const selectedProduct = products.find((item) => item.id === parseInt(id));
        setProduct(selectedProduct);
    }, [id]);

    const addToCart = () => {
        const cart = JSON.parse(localStorage.getItem("cart")) || [];
        const existingProduct = cart.find((item) => item.id === product.id);

        console.log("Existing Cart:", cart);
        console.log("Selected Product:", product);

        if (existingProduct) {
            existingProduct.quantity += quantity;
        } else {
            cart.push({ ...product, quantity });
        }

        localStorage.setItem("cart", JSON.stringify(cart));
        console.log("Updated Cart:", cart);

        alert("Product added to cart!");
    };

    const increaseQuantity = () => setQuantity((prev) => prev + 1);
    const decreaseQuantity = () => setQuantity((prev) => Math.max(1, prev - 1));

    if (!product) return <div>Loading...</div>;

    return (
        <div className="min-h-screen bg-gray-100 p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white p-8 rounded-lg shadow-lg">
                {/* Product Image Section */}
                <div className="space-y-4">
                    <img
                        src={product.image}
                        alt={product.title}
                        className="w-full h-auto rounded-lg border border-gray-200"
                    />
                    {/* Additional Thumbnails */}
                    <div className="flex space-x-4">
                        <img
                            src={product.image}
                            alt={`${product.title} thumbnail`}
                            className="w-20 h-20 object-cover rounded-lg border border-gray-200 cursor-pointer"
                        />
                    </div>
                </div>

                {/* Product Details Section */}
                <div>
                    <h1 className="text-3xl font-bold text-gray-800">{product.title}</h1>
                    <p className="text-xl text-gray-700 mt-2">{product.price}</p>
                    <div className="flex items-center space-x-2 mt-2">
                        <p className="text-yellow-500 font-bold">★★★★☆</p>
                        <p className="text-gray-600">{product.reviews || 0} Reviews</p>
                    </div>
                    <p className="text-gray-600 mt-4">
                        {product.details || "This is a beautiful and unique product."}
                    </p>

                    {/* Quantity Selector */}
                    <div className="flex items-center mt-6 space-x-4">
                        <p className="text-gray-700 font-medium">Quantity</p>
                        <button
                            onClick={decreaseQuantity}
                            className="px-3 py-1  rounded "
                        >
                            <RemoveRoundedIcon className="text-[black]" />
                        </button>
                        <span className="text-lg text-[black] font-medium">{quantity}</span>
                        <button
                            onClick={increaseQuantity}
                            className="px-3 py-1  rounded "
                        >
                            <AddRoundedIcon className="text-[black]" />
                        </button>
                    </div>

                    {/* Add to Cart Button */}
                    <button

                        onClick={addToCart}
                        className="border p-2 mt-3 rounded-lg text-[black] bg-white"                    >
                        <AddRoundedIcon className="text-[black]" /> Add to Cart
                    </button>


                    {/* Accordion for Additional Details */}
                    <div className="mt-8">
                        <details className="mb-4">
                            <summary className="font-medium text-gray-700 cursor-pointer">
                                Features & Details
                            </summary>
                            <p className="text-gray-600 mt-2">
                                {product.features || "No additional features provided."}
                            </p>
                        </details>
                        <details className="mb-4">
                            <summary className="font-medium text-gray-700 cursor-pointer">
                                Shipping & Returns
                            </summary>
                            <p className="text-gray-600 mt-2">
                                Free shipping on orders above ₹500. Returns are accepted within
                                30 days of purchase.
                            </p>
                        </details>

                    </div>
                </div>
            </div>
        </div>
    );
}
