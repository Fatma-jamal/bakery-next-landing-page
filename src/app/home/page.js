import Image from "next/image"
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react"

export default function Home() {

    const breads = 
    [
        { name: "Classic Bread", price: "$4.50", image: "french bread.jpg" },
        { name: "Raisin Sourdough", price: "$5.25", image: "french bread.jpg" },
        { name: "Milk Bread", price: "$4.75", image: "french bread.jpg" },
        { name: "Mixed Grain", price: "$5.50", image: "french bread.jpg" },
        { name: "Farming Bread", price: "$5.00", image: "french bread.jpg" },
        { name: "Baguette", price: "$3.75", image: "french bread.jpg" },
    ]

    const sweets = 
    [
        { name: "Cookies", price: "$3.25", image: "french bread.jpg" },
        { name: "Turkish Bagels", price: "$4.50", image: "french bread.jpg" },
        { name: "Carrot Cake", price: "$5.75", image: "french bread.jpg" },
        { name: "Chocolate Croissant", price: "$4.25", image: "french bread.jpg" },
        { name: "Cinnamon Roll Pie", price: "$6.50", image: "french bread.jpg" },
        { name: "Brownies", price: "$3.75", image: "french bread.jpg" },
    ]
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <div className="text-2xl font-bold">Bakery</div>
            <nav className="hidden md:flex space-x-6">
              <a href="#" className="text-gray-700 hover:text-gray-900">
                Home
              </a>
              <a href="#" className="text-gray-700 hover:text-gray-900">
                About
              </a>
              <a href="#" className="text-gray-700 hover:text-gray-900">
                Products
              </a>
              <a href="#" className="text-gray-700 hover:text-gray-900">
                Contact
              </a>
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <div className="text-sm text-gray-600">Call us: (234) 567-8910</div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="flex flex-wrap w-full">
        {/* Left Image */}
        <div className="w-full md:w-1/2">
          <img
            src="/images/intro.jpg"
            alt="intro"
            className="w-full h-64 md:h-96 object-cover"
          />
        </div>

        {/* Right Content */}
        <div className="w-full md:w-1/2 bg-black flex items-center justify-center h-auto md:h-96 text-center py-8 md:py-0">
          <div className="flex flex-col items-center justify-center space-y-4 px-4">
            {/* <img src="/images/icon.png" alt="icon" className="w-12 h-12" /> */}
            <h1 className="text-white text-2xl font-bold">Delicious Breads</h1>
            <p className="text-white max-w-md text-sm">
              Nibh venenatis cras sed felis eget velit aliquet sagittis id.
              Tellus pellentesque eu tincidunt tortor aliquam nulla.
            </p>
            
            <button className="bg-black text-white border border-white rounded hover:bg-white hover:text-black transition px-0 py-0">
              <span className="inline-block px-6 py-3 rounded">Learn More</span>
            </button>
          </div>
        </div>
      </section>

      {/* Our Bread Section */}
        <section className="py-16 bg-white">
            <div className="mx-auto px-4">
                <div className="text-center mb-12">
                <h2 className="text-4xl font-bold mb-4 text-black">Our Bread</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                    Each loaf from Bakery is made with the finest ingredients and baked with precision. A delicious way to
                    start your day or to enjoy with any meal.
                </p>
                </div>

                <div className="flex flex-wrap justify-center gap-20">
                {breads.map((item, index) => (
                    <div key={index} className="text-center max-w-xs w-full">
                    <div className="bg-black rounded-lg overflow-hidden mb-4">
                        <Image
                        src={`/images/${item.image}`}
                        alt={item.name}
                        width={300}
                        height={300}
                        className="w-full h-64 object-fit"
                        />
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-black">{item.name}</h3>
                    <p className="text-warm-gray">{item.price}</p>
                    </div>
                ))}
                </div>
            </div>
        </section>


      {/* Sweets Section */}
      <section className="py-16 bg-black text-white">
        <div className="mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Sweets</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Life is uncertain, eat dessert first! Our bakery creates the most delicious sweets that will make your day
              brighter and your taste buds dance with joy.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-20">
            {sweets.map((item, index) => (
                <div key={index} className="text-center max-w-xs w-full">
                <div className="bg-black rounded-lg overflow-hidden mb-4">
                    <Image
                    src={`/images/${item.image}`}
                    alt={item.name}
                    width={300}
                    height={300}
                    className="w-full h-64 object-fit"
                    />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">{item.name}</h3>
                <p className="text-warm-gray">{item.price}</p>
                </div>
            ))}
            </div>
        </div>
      </section>

      {/* Menu Categories Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Sweets</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white text-black p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Cookies</h3>
              <ul className="space-y-2">
                <li>Chocolate Chip</li>
                <li>Oatmeal Raisin</li>
                <li>Sugar Cookies</li>
                <li>Peanut Butter</li>
                <li>Double Chocolate</li>
              </ul>
            </div>

            <div className="bg-white text-black p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Sundae</h3>
              <ul className="space-y-2">
                <li>Vanilla Ice Cream</li>
                <li>Chocolate Sauce</li>
                <li>Whipped Cream</li>
                <li>Cherry on Top</li>
                <li>Nuts & Sprinkles</li>
              </ul>
            </div>

            <div className="bg-white text-black p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Other</h3>
              <ul className="space-y-2">
                <li>Muffins</li>
                <li>Donuts</li>
                <li>Bagels</li>
                <li>Danish Pastries</li>
                <li>Fruit Tarts</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex items-center">
            <div className="w-1/2">
              <Image
                src="/placeholder.svg?height=400&width=400"
                alt="Professional baker"
                width={400}
                height={400}
                className="rounded-lg"
              />
            </div>
            <div className="w-1/2 pl-12">
              <h2 className="text-4xl font-bold mb-4">We'd Like to Hear from You</h2>
              <p className="text-gray-600 mb-6">
                Contact us today to place your order or to learn more about our delicious baked goods. We're here to
                serve you!
              </p>
              <div className="flex items-center text-2xl font-bold">
                <Phone className="mr-3" />
                <span>+1 (234) 567-8910</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Gallery */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <Image
                src="/images/french bread.jpg"
                alt="Bread"
                width={300}
                height={300}
                className="rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold">Bread</h3>
              <p className="text-gray-600">Fresh daily baked bread</p>
            </div>

            <div className="text-center">
              <Image
                src="/images/french bread.jpg"
                alt="Pastries"
                width={300}
                height={300}
                className="rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold">Pastries</h3>
              <p className="text-gray-600">Delicious pastries and croissants</p>
            </div>

            <div className="text-center">
              <Image
                src="/images/french bread.jpg"
                alt="Desserts"
                width={300}
                height={300}
                className="rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold">Desserts</h3>
              <p className="text-gray-600">Sweet treats and cakes</p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-start">
            <div className="w-1/2">
              <h3 className="text-2xl font-bold mb-4">Sign up for the newsletter</h3>
              <p className="text-gray-600 mb-6">
                Want to get an email when we publish new content? Subscribe to our newsletter and we'll send you a
                weekly digest.
              </p>
              <div className="flex space-x-4">
                <Facebook className="w-6 h-6 text-gray-600 hover:text-blue-600 cursor-pointer" />
                <Twitter className="w-6 h-6 text-gray-600 hover:text-blue-400 cursor-pointer" />
                <Instagram className="w-6 h-6 text-gray-600 hover:text-pink-600 cursor-pointer" />
                <Linkedin className="w-6 h-6 text-gray-600 hover:text-blue-700 cursor-pointer" />
                <Youtube className="w-6 h-6 text-gray-600 hover:text-red-600 cursor-pointer" />
              </div>
            </div>

            <div className="w-1/2 pl-12">
              <h3 className="text-2xl font-bold mb-4">Hours & Location</h3>
              <div className="space-y-2 text-gray-600">
                <p className="font-semibold">123 Main St.</p>
                <p>New York, NY 10001</p>
                <p className="mt-4">Monday - Sunday</p>
                <p>7:00am - 8:00pm</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-xl font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Our Products
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Location
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-bold mb-4">Help</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Shipping Info
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Returns
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Support
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-bold mb-4">Get In Touch</h4>
              <div className="space-y-2 text-gray-400">
                <div className="flex items-center">
                  <Phone className="w-4 h-4 mr-2" />
                  <span>+1 (234) 567-8910</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-4 h-4 mr-2" />
                  <span>info@bakery.com</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span>123 Main St, NY 10001</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-xl font-bold mb-4">Newsletter</h4>
              <p className="text-gray-400 mb-4">Subscribe to get updates</p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-4 py-2 bg-gray-800 text-white rounded-l-lg focus:outline-none"
                />
                <button className="bg-white text-black px-6 py-2 rounded-r-lg hover:bg-gray-200">Subscribe</button>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 flex justify-between items-center">
            <div className="text-2xl font-bold">Bakery</div>
            <div className="flex space-x-4">
              <Facebook className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer" />
              <Twitter className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer" />
              <Instagram className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer" />
            </div>
          </div>

          <div className="text-center text-gray-400 mt-4">
            <p>&copy; 2024 Bakery. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
