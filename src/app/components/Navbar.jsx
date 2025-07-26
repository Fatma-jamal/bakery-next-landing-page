'use client'
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="text-xl font-bold text-black" style={{margin:"5px"}}>
          <Link href="/">Bakery</Link>
        </div>

        <button
          className="sm:hidden absolute top-4 right-4 text-neutral-700 focus:outline-none cursor-pointer"
          onClick={() => setOpen(!open)}> ☰ </button>
          
        <div className={`sm:flex ${
            open ? "block mt-4 space-y-4" : "hidden sm:block"
          } space-x-0 sm:space-x-6`}>
          <Link href="/about" className="block text-black hover:text-warm-gray" style={{margin:"5px"}}>About</Link>
          <Link href="/products" className="block text-black hover:text-warm-gray" style={{margin:"5px"}}>Products</Link>
          <Link href="/contact" className="block text-black hover:text-warm-gray" style={{margin:"5px"}}>Contact</Link>
        </div>

      </div>
    </nav>
  );
}
