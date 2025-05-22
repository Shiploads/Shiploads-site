// src/components/Navbar.tsx

import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="bg-brand-green text-white py-3 px-6 flex items-center justify-between sticky top-0 z-50 shadow-lg h-20">
      {/* Left: Logo and Home */}
      <div className="flex items-center gap-4 bg-brand-magicpurple">
        {/* You can use an SVG logo here instead of text if you have one */}
        <Link href="/" className="font-extrabold text-2xl tracking-tight hover:opacity-80 transition">
    <Image
      src="/banner.png"
      width={350}
      height={100}
      alt="Picture of the author"
    />
        </Link>
        {/* Optionally, add mascot or ship SVG here */}
      </div>

      {/* Center: Navigation Links */}
      <div className="hidden md:flex items-center gap-6">
        <Link href="/products" className="hover:text-brand-yellow transition">Products</Link>
        <Link href="/deals" className="hover:text-brand-yellow transition">Hot Deals</Link>
        <Link href="/about" className="hover:text-brand-yellow transition">About</Link>
        <Link href="/select-store" className="hover:text-brand-yellow transition">Select Store</Link>
      </div>

      {/* Right: Search and User/Login */}
      <div className="flex items-center gap-4">
        {/* Search input for desktop */}
        <input
          type="text"
          placeholder="Search..."
          className="hidden md:block px-3 py-1 rounded-full text-black outline-none bg-white placeholder-gray-400 focus:ring-2 focus:ring-brand-orange"
        />
        <Link href="/login" className=" hover:bg-brand-orange text-white px-4 py-1 rounded-full transition font-semibold">
          Login
        </Link>
        {/* Add Cart/User icons as needed */}
      </div>
    </nav>
  );
}
