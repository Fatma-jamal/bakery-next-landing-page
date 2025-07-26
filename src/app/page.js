import Navbar from "./components/Navbar";
import IntroSection from "./components/IntroSection";
import ProductsGrid from "./components/ProductsGrid";
import MenuSection from "./components/MenuSection";
import { products, menu } from "./data/products";
import Footer from "./components/Footer";

export const metadata = {
  title: "bakery landing page"
}

export default function HomePage() {
  
  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <Navbar/>

      {/* Intro section */}
      <IntroSection/>

      {/* our bread  */}
      <section className="flex flex-col items-center justify-center text-center px-4 py-12">
        <h1 className="text-black text-3xl font-bold mb-4 mt-6" style={{marginTop:"3%"}}>Our Bread</h1>
        <p className="text-black max-w-md text-sm mb-8" style={{margin:"2%"}}>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.
        </p>
        <ProductsGrid products={products.bread} textColor="text-black"/>
      </section>

      {/* Sweets section */}
      <section className="flex flex-col items-center justify-center text-center px-4 py-12 bg-black">
        <h1 className="text-white text-3xl font-bold mb-4" style={{marginTop:"3%"}}>Sweets</h1>
        <p className="text-white max-w-md text-sm mb-8" style={{margin:"2%"}}>
         Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.
        </p>
        <ProductsGrid products={products.sweet} textColor="text-white"/>
      </section>

      {/* Menu section */}
      <section className="flex flex-col items-center justify-center text-center px-4 py-12 bg-white">
        <h1 className="text-black text-3xl font-bold mb-4 mx-10 my-10" style={{marginTop:"3%"}}>Sweets</h1>
        <MenuSection menu = {menu}/>
      </section>

      <Footer/>
   
    </div>
  )
}
