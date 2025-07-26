export default function HeroSection() {
  return (
    <section className="flex flex-wrap w-full">
      <div className="w-full md:w-1/2">
        <img src="/images/intro.jpg" alt="intro" className="w-full h-64 md:h-96 object-cover" />
      </div>
      <div className="w-full md:w-1/2 bg-black flex items-center justify-center">
        <div className="text-white text-center px-4 space-y-4">
          <h1 className="text-2xl font-bold">Delicious Breads</h1>
          <p className="max-w-md text-sm">Nibh venenatis cras sed felis eget velit...</p>
          <button className="inline-block px-6 py-3 rounded border border-white">VIEW PRODUCTS</button>
        </div>
      </div>
    </section>
  )
}
