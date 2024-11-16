'use client';
import { useEffect, useState } from "react";
import Link from "next/link";
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';


export default function OrderHistoryPage() {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const storedOrders = JSON.parse(localStorage.getItem("orderHistory")) || [];
        setOrders(storedOrders);
    }, []);

    return (
        <div className="min-h-screen bg-gray-100 p-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-8">Order History</h1>
            {orders.length === 0 ? (
                <div className="bg-white p-8 mb-3 rounded-lg shadow-md text-center">
                    <p className="text-gray-500">You have no orders yet.</p>
                </div>
            ) : (
                <div className="grid grid-cols-1 mb-3 gap-6">
                    {orders.map((order, index) => (
                        <div
                            key={index}
                            className="bg-white p-6 rounded-lg shadow-md flex justify-between items-center"
                        >
                            {/* Order Details */}
                            <div>
                                <p className="text-lg font-semibold text-gray-800">
                                    Order Number:{" "}
                                    <span className="font-medium text-gray-600">
                                        {order.transactionId}
                                    </span>
                                </p>
                                <p className="text-gray-600">
                                    <strong>Order Date:</strong>{" "}
                                    {new Date(order.orderDate).toLocaleDateString("en-US", {
                                        year: "numeric",
                                        month: "long",
                                        day: "numeric",
                                    })}
                                </p>
                                <p className="text-gray-600">
                                    <strong>Total:</strong> ₹{order.totalAmount}
                                </p>
                            </div>

                            {/* Order Status */}
                            <div>
                                <p
                                    className={`text-sm font-semibold px-3 py-1 rounded-full ${order.status === "Successful"
                                        ? "bg-green-100 text-green-700"
                                        : "bg-yellow-100 text-yellow-700"
                                        }`}
                                >
                                    {order.status}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            <Link
                href="/"
                className="border p-2 rounded-lg text-gray-500 bg-white"            >
                <ArrowBackRoundedIcon className="text-gray-500 mr-2" style={{
                    fontSize: "1.5rem"
                }} />
                Back to Home
            </Link>
        </div>

    );
}
