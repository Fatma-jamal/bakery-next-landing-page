import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ProductsGrid from "./components/ProductsGrid";
import MenuSection from "./components/MenuSection";
import { products, menu } from "./data/products";
import Footer from "./components/Footer";

export default function HomePage() {
  

  const sweetProducts = [
    {id:1 ,name: "Cookies", price: "$3.50", image: "cinnamon.jpg" },
    {id:2 ,name: "Turkish Bagels", price: "$5.50", image: "cinnamon.jpg" },
    {id:3 ,name: "Carrot Cake", price: "$8.50", image: "cinnamon.jpg" },
    {id:4 ,name: "Chocolate Croissant", price: "$4.50", image: "cinnamon.jpg" },
    {id:5 ,name: "Cinnamon Roll Pie", price: "$6.50", image: "cinnamon.jpg" },
    {id:6 ,name: "Brownie", price: "$3.50", image: "cinnamon.jpg" },
  ]

  const menu = {
    Cookies: [
      "Biscotti",
      "Chocolate Chip",
      "Oatmeal Pecan",
      "Oat Ginger Bar",
      "Seasonal specials",
    ],
    Scones: [
      "Classic butter scone",
      "Fresh fruit buttermilk scones",
      "Handmade scones",
    ],
    Other: [
      "Seasonal galettes",
      "Tartlets",
      "Banana Bread",
      "Bread Pudding",
      "Cranberry Pecan Granola",
    ],
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Navbar/>

      {/* <div className="flex flex-wrap w-full">
        <div className="w-full md:w-1/2">
          <img
            src="/images/intro.jpg"
            alt="intro"
            className="w-full h-64 md:h-96 object-cover"
          />
        </div>

        <div className="w-full md:w-1/2 bg-black flex items-center justify-center h-auto md:h-96 text-center py-8 md:py-0">
          <div className="flex flex-col items-center justify-center space-y-4 px-4">
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
      </div> */}

      <HeroSection/>


      {/* our bread  */}
      <section className="flex flex-col items-center justify-center text-center px-4 py-12">
        <h1 className="text-black text-3xl font-bold mb-4">Our Bread</h1>
        <p className="text-black max-w-md text-sm mb-8">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.
        </p>
        <ProductsGrid products={products.bread} textColor="text-black"/>
      </section>

      {/* Sweets section */}
      <section className="flex flex-col items-center justify-center text-center px-4 py-12 bg-black">
        <h1 className="text-white text-3xl font-bold mb-4">Sweets</h1>
        <p className="text-white max-w-md text-sm mb-8">
         Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.
        </p>
        <ProductsGrid products={products.sweet} textColor="text-white"/>
      </section>

      {/* Menu section */}
      <section className="flex flex-col items-center justify-center text-center px-4 py-12 bg-white">
        <h1 className="text-white text-3xl font-bold mb-4 mx-10 my-10">Sweets</h1>
        <MenuSection menu = {menu}/>
      </section>

      <Footer/>

      
   
    </div>
  )
}
