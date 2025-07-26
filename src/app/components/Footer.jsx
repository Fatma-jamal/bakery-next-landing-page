import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-10 mt-16">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row justify-center items-center text-center sm:text-left gap-20 text-sm"
        style={{padding:"3%"}}>
            <div>
                <h2 className="text-lg font-semibold mb-3">Bakery</h2>
                <p>Crafting sweetness since 2025.</p>
                <p className="mt-4 text-neutral-400">© 2025 Fatima Designs</p>
            </div>

            <div>
                <h3 className="text-lg font-semibold mb-3">Bread</h3>
                <ul className="space-y-2">
                    <li><Link href="#" className="hover:text-warm-gray">Cheese Bread</Link></li>
                    <li><Link href="#" className="hover:text-warm-gray">Peanut Sandwich</Link></li>
                    <li><Link href="#" className="hover:text-warm-gray">Milk Bread</Link></li>
                </ul>
            </div>

            <div>
                <h3 className="text-lg font-semibold mb-3">Sweets</h3>
                <ul className="space-y-2">
                    <li><Link href="#" className="hover:text-warm-gray">Cookies</Link></li>
                    <li><Link href="#" className="hover:text-warm-gray">Cake & Pastries</Link></li>
                    <li><Link href="#" className="hover:text-warm-gray">Seasonal Specials</Link></li>
                </ul>
            </div>
        </div>
    </footer>
  );
}
