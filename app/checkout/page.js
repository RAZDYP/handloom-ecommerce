'use client';
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';

export default function CheckoutPage() {
    const [isPaymentSuccessful, setIsPaymentSuccessful] = useState(false);
    const [orderDetails, setOrderDetails] = useState(null);
    const router = useRouter();


    useEffect(() => {
        // Calculate and set random order details
        const transactionId = Math.floor(1000000000 + Math.random() * 9000000000);
        const totalAmount = JSON.parse(localStorage.getItem("cart"))?.reduce(
            (sum, item) =>
                sum + item.quantity * parseFloat(item.price.replace("₹", "").replace(",", "")),
            0
        );

        setOrderDetails({
            transactionId,
            orderDate: new Date().toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
            }),
            totalAmount: `₹${totalAmount.toFixed(2)}`,
            status: "Successful",
        });
        setIsPaymentSuccessful(false);
        setOrderDetails(null);

        // Simulate payment process
        const timer = setTimeout(() => {
            setIsPaymentSuccessful(true);

            // Save order to localStorage (order history)
            const existingOrders =
                JSON.parse(localStorage.getItem("orderHistory")) || [];
            const newOrder = {
                transactionId,
                orderDate: new Date().toISOString(),
                totalAmount: totalAmount.toFixed(2),
                status: "Successful",
            };
            localStorage.setItem(
                "orderHistory",
                JSON.stringify([...existingOrders, newOrder])
            );
        }, 3000); // 3-second delay to simulate payment processing

        return () => clearTimeout(timer); // Cleanup timer
    }, []);

    const handleRedirect = () => {
        router.push("/");
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="text-center bg-white p-8 rounded-xl shadow-xl w-full max-w-md">
                {!isPaymentSuccessful ? (
                    <div>
                        <h2 className="text-lg font-semibold mb-4 text-[black]">Processing Payment...</h2>
                        <div className="relative w-16 h-16 mx-auto mb-4">
                            <div className="absolute inset-0 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                        </div>
                        <p className="text-[black]">Please wait while we process your payment.</p>
                    </div>
                ) : (
                    <div>
                        <div className="mb-4">
                            <div className="w-16 h-16 mx-auto text-green-500">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className="w-full h-full"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M12 1.75a10.25 10.25 0 1 1 0 20.5 10.25 10.25 0 0 1 0-20.5zm3.97 7.47a.75.75 0 1 0-1.06-1.06l-4.47 4.47-2.12-2.12a.75.75 0 1 0-1.06 1.06l2.82 2.83a.75.75 0 0 0 1.06 0l5.88-5.88z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </div>
                        </div>
                        <h2 className="text-lg text-[black] font-semibold mb-2">
                            Thank you for your order!
                        </h2>
                        <p className="text-[black] text-lg mb-4">
                            Your order was successfully placed and is being processed.
                        </p>
                        {orderDetails && (
                            <div className="bg-white text-[black] p-4 rounded-xl ">
                                <p>
                                    <strong className="text-[black]">Order Number:</strong> {orderDetails.transactionId}
                                </p>
                                <p>
                                    <strong className="text-[black]">Order Date:</strong> {orderDetails.orderDate}
                                </p>
                                <p>
                                    <strong className="text-[black]">Total:</strong> {orderDetails.totalAmount}
                                </p>
                                <p>
                                    <strong className="text-[black]">Status:</strong>{" "}
                                    <span className="text-green-500">{orderDetails.status}</span>
                                </p>
                            </div>
                        )}
                        <button
                            onClick={handleRedirect}
                            className="border p-2 mt-3 rounded-lg text-gray-500 bg-white"
                        >
                            <ArrowBackRoundedIcon className="text-gray-500 mr-2" style={{
                                fontSize: "1.5rem"
                            }} />
                            Back to Home
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}
