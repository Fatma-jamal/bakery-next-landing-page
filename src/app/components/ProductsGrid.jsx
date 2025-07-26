import ProductsCard from "./ProductsCard";
export default function ProductsGrid({products,textColor}) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8" style={{margin:"3%"}}>
      {products.map((item) => (
        <ProductsCard key={item.id}
            name={item.name}
            price={item.price}
            image={item.image}
            textColor={textColor}/>
      ))}
    </div>
  )
}
