"use client";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import StarRateIcon from "@mui/icons-material/StarRate";
import Link from "next/link";

export default function Hero({ addToCart }) {
    const products = [
        {
            id: 1,
            image: "https://mapacademy.io/wp-content/uploads/2023/04/mekhela-chador-2m.jpg", // Replace with a saree or mekhela sador image URL
            title: "MEKHELA SADOR ",
            price: "₹ 3,850.00",
            rating: 4.1,
            reviews: 373,
            bestseller: true,
            details: "This is a beautiful mekhela sador made from Assam silk. It is a traditional attire worn by Assamese",
            features: "Features: Handwoven, Assam Silk, Traditional Design",
        },
        {
            id: 2,
            image: "https://fcity.in/images/products/328445348/5vw6o_512.jpg", // Replace with a saree or mekhela sador image URL
            title: "MEKHELA SADOR",
            price: "₹ 3,250.00",
            rating: 4.3,
            reviews: 247,
            bestseller: true,
            details: "This is a beautiful mekhela sador made from Assam silk. It is a traditional attire worn by Assamese",
            features: "Features: Handwoven, Assam Silk, Traditional Design",
        },
        {
            id: 3,
            image: "https://www.shutterstock.com/image-photo/flat-lay-picture-banarasi-saree-600nw-1849146910.jpg", // Replace with a saree or mekhela sador image URL
            title: "SHONAJHURI (SAREE)",
            price: "₹ 3,800.00",
            rating: 4.8,
            reviews: 21,
            bestseller: false,
            details: "This is a beautiful mekhela sador made from Assam silk. It is a traditional attire worn by Assamese",
            features: "Features: Handwoven, Assam Silk, Traditional Design",
        },
        {
            id: 4,
            image: "https://www.caleidoscope.in/wp-content/uploads/2019/02/Banarasi-Saree-Design-1024x682.jpeg", // Replace with a saree or mekhela sador image URL
            title: "BANAARASI (SAREE)",
            price: "₹ 3,800.00",
            rating: 4.9,
            reviews: 8,
            bestseller: false,
            details: "This is a beautiful mekhela sador made from Assam silk. It is a traditional attire worn by Assamese",
            features: "Features: Handwoven, Assam Silk, Traditional Design",
        },
        {
            id: 5,
            image: "https://kuberansilks.com/cdn/shop/products/DSP_6577_620x.jpg?v=1608884227", // Replace with a saree or mekhela sador image URL
            title: "MEKHELA SADOR",
            price: "₹ 3,800.00",
            rating: 4.8,
            reviews: 21,
            bestseller: false,
            details: "This is a beautiful mekhela sador made from Assam silk. It is a traditional attire worn by Assamese",
            features: "Features: Handwoven, Assam Silk, Traditional Design",
        }
        ,
        {
            id: 6,
            image: "https://www.caleidoscope.in/wp-content/uploads/2019/02/Banarasi-Saree-Design-1024x682.jpeg", // Replace with a saree or mekhela sador image URL
            title: "MEKHELA SADOR",
            price: "₹ 3,800.00",
            rating: 4.9,
            reviews: 8,
            bestseller: false,
            details: "This is a beautiful mekhela sador made from Assam silk. It is a traditional attire worn by Assamese",
            features: "Features: Handwoven, Assam Silk, Traditional Design",
        },
        {
            id: 7,
            image: "https://images.meesho.com/images/products/135830512/o9gpf_512.webp", // Replace with a saree or mekhela sador image URL
            title: "SHONAJHURI (SAREE)",
            price: "₹ 3,800.00",
            rating: 4.8,
            reviews: 21,
            bestseller: false,
            details: "This is a beautiful mekhela sador made from Assam silk. It is a traditional attire worn by Assamese",
            features: "Features: Handwoven, Assam Silk, Traditional Design",
        },
        {
            id: 8,
            image: "https://www.pratibhasarees.com/cdn/shop/articles/Types_of_Saree_Fabrics_and_Materials.jpg?v=1725831192&width=2048", // Replace with a saree or mekhela sador image URL
            title: "KUMKUM LAALI (SAREE)",
            price: "₹ 3,800.00",
            rating: 4.9,
            reviews: 8,
            bestseller: false,
            details: "This is a beautiful mekhela sador made from Assam silk. It is a traditional attire worn by Assamese",
        },
        {
            id: 9,
            image: "https://www.caleidoscope.in/wp-content/uploads/2019/02/Banarasi-Saree-Design-1024x682.jpeg", // Replace with a saree or mekhela sador image URL
            title: "MEKHELA SADOR",
            price: "₹ 3,800.00",
            rating: 4.9,
            reviews: 8,
            bestseller: false,
            details: "This is a beautiful mekhela sador made from Assam silk. It is a traditional attire worn by Assamese",
        },

    ]
    localStorage.setItem("products", JSON.stringify(products));

    return (
        <div className="px-8 py-12 text-[black]">
            <h1 className="text-2xl font-semibold text-[black] text-center mb-8">
                Exquisite Handloom Wear
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-20">
                {products.map((product) => (
                    <div
                        key={product.id}
                        className="relative shadow-xl rounded-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
                    >
                        {/* Bestseller Badge */}
                        {product.bestseller && (
                            <div className="absolute top-2 left-2 bg-black text-white text-xs px-2 py-1 rounded">
                                Bestseller
                            </div>
                        )}

                        {/* Product Image */}
                        <img
                            src={product.image}
                            alt={product.title}
                            className="w-full h-72 object-cover"
                        />

                        {/* Favorite Icon */}
                        <div className="absolute top-2 right-2 text-gray-500 hover:text-red-500 cursor-pointer">
                            <FavoriteBorderIcon />
                        </div>

                        {/* Rating */}
                        <div className="absolute bottom-2 left-2 bg-white text-sm px-2 py-1 rounded shadow-md flex items-center space-x-1">
                            <StarRateIcon className="text-yellow-500" />
                            <span>{product.rating}</span>
                            <span className="text-gray-500">({product.reviews})</span>
                        </div>
                        <div className="mt-2 w-full flex items-center justify-center">

                            <Link className="text-center text-blue-500" href={`/product/${product.id}`} key={product.id}>
                                Click here to view more details
                            </Link>
                        </div>
                        {/* WhatsApp Icon */}


                        {/* Shopping Bag Icon */}
                        <div
                            onClick={(event) => {
                                addToCart(product);
                                event.stopPropagation(); // Prevent the event from propagating to the Link
                                // Call your custom addToCart function
                            }}
                            className="absolute bottom-2 right-2 bg-white text-gray-500 hover:text-black cursor-pointer p-2 rounded-full shadow-md"
                        >
                            <ShoppingBagOutlinedIcon />
                        </div>

                        {/* Product Info */}
                        <div className="text-center py-4">
                            <p className="text-sm font-semibold">{product.title}</p>
                            <p className="text-sm text-gray-500">{product.price}</p>
                        </div>
                    </div>

                ))}
            </div>

        </div>
    );
}
