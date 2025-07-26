
export default function ProductsCard({ name, price, image ,textColor}) {
  return (
    <div className="flex flex-col items-center text-center p-4">
      <img
        src={`/images/${image}`}
        width={300}
        height={300}
        alt={name}
        className="object-cover rounded"/>
      <h4 className={`text-xl font-semibold mt-4 ${textColor}`}
      style={{marginTop:"5%"}}>{name}</h4>
      <p className="text-warm-gray mb-2">{price}</p>
      <button className="bg-warm-gray border border-warm-gray text-white px-4 py-2 rounded hover:bg-white hover:text-warm-gray transition"
      style={{padding:"7px"}}>
        Add to cart
      </button>
    </div>
  );
}
