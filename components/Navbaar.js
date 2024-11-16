'use client';
import { useState } from 'react';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import StarBorderPurple500RoundedIcon from '@mui/icons-material/StarBorderPurple500Rounded';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import Link from 'next/link';


export default function Header({ cartCount }) {

    return (
        <>
            <nav className="flex items-center justify-between px-8 py-4 shadow-md">
                {/* Left Section: Logo */}
                <div className="flex flex-col items-start">
                    <h1 className="text-lg font-bold text-[#0F3C47]">NORTHEAST HANDLOOMS</h1>
                    <span className="text-xs text-[#0F3C47]">EST 2012</span>
                </div>
                <div className="hidden md:flex space-x-6 text-sm text-[#0F3C47]">
                    <a href="#" className="hover:text-gray-500 text-lg">All Products</a>
                    <a href="#" className="hover:text-gray-500 text-lg">Handloom Items</a>
                    <a href="/orders" className="hover:text-gray-500 text-lg">Orders History</a>

                </div>

                {/* Right Section: Icons */}
                <div className="flex items-center space-x-4 text-[#0F3C47]">
                    {/* Reviews Icon */}
                    <div className="flex items-center space-x-1 hover:text-gray-500 cursor-pointer">
                        <StarBorderPurple500RoundedIcon className="text-[#0F3C47]" />
                        <span>Reviews</span>
                    </div>

                    {/* Search Icon */}
                    <SearchRoundedIcon className="hover:text-gray-500 cursor-pointer" />

                    {/* User Icon */}
                    <PersonRoundedIcon className="hover:text-gray-500 cursor-pointer" />

                    {/* Cart Icon */}
                    <div
                        onClick={() => window.location.href = "/cart"}
                        className="hover:text-gray-500 cursor-pointer relative"
                    // Trigger the cart page visibility
                    >
                        <ShoppingCartRoundedIcon />
                        {cartCount > 0 && (
                            <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs rounded-full px-2">
                                {cartCount}
                            </span>
                        )}
                    </div>
                </div>
            </nav>

        </>

    );
}
