export default function IntroSection() {
  return (
    <section className="flex flex-wrap w-full">
      <div className="w-full md:w-1/2">
        <img src="/images/intro.jpg" alt="intro" className="w-full h-full md:h-full object-cover" />
      </div>
      <div className="w-full md:w-1/2 bg-black flex items-center justify-center">
        <div className="text-white text-center px-4 space-y-4">

          <h1 className="text-2xl font-bold">Delicious Breads</h1>
          <p className="max-w-md text-sm" style={{margin:"10px"}}>Nibh venenatis cras sed felis eget velit...</p>
          <button className="inline-block px-6 py-3 rounded border border-white
          hover:text-black hover:bg-white hover:border-none" 
          style={{padding:"10px"}}>VIEW PRODUCTS</button>
        </div>
      </div>
    </section>
  )
}
