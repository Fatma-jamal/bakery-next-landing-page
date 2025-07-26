// components/Footer.js
export default function Footer() {
  return (
    <footer className="bg-black text-white py-10 mt-16">
      {/* <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-3 gap-8 text-sm justify-center items-center"> */}
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row justify-center items-center text-center sm:text-left gap-20 text-sm">
            <div>
                <h2 className="text-lg font-semibold mb-3">Bakery</h2>
                <p>Crafting sweetness since 2025.</p>
                <p className="mt-4 text-neutral-400">© 2025 Fatima Designs</p>
            </div>

            <div>
                <h3 className="text-lg font-semibold mb-3">Bread</h3>
                <ul className="space-y-2">
                    <li><a href="#" className="hover:text-warm-gray">Cheese Bread</a></li>
                    <li><a href="#" className="hover:text-warm-gray">Peanut Sandwich</a></li>
                    <li><a href="#" className="hover:text-warm-gray">Milk Bread</a></li>
                </ul>
            </div>

            <div>
                <h3 className="text-lg font-semibold mb-3">Sweets</h3>
                <ul className="space-y-2">
                    <li><a href="#" className="hover:text-warm-gray">Cookies</a></li>
                    <li><a href="#" className="hover:text-warm-gray">Cake & Pastries</a></li>
                    <li><a href="#" className="hover:text-warm-gray">Seasonal Specials</a></li>
                </ul>
            </div>
        </div>
    </footer>
  );
}
