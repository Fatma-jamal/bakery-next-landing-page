
export default function MenuSection({menu}) {
  return (
    <div className="flex flex-wrap justify-center gap-8 p-4" style={{margin:"5%"}}>
        {Object.entries(menu).map(([category, items]) => (
            <div 
                className="px-6 py-8 text-black bg-warm-gray rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 min-w-[250px] max-w-[300px]"
                key={category}
            >
                <div className="grid gap-4">
                <div style={{padding:"5%"}}>
                    <h2 className="text-2xl font-bold mb-4 pb-2 text-left text-black">
                    {category}
                    </h2>
                    <ul className="space-y-2 text-left">
                    {items.map((item) => (
                        <li 
                        key={item}
                        className="text-black transition-colors duration-200 flex items-start"
                        >
                        <span className="mr-2 text-black">-</span>
                        {item}
                        </li>
                    ))}
                    </ul>
                </div>
                </div>
            </div>
        ))}
    </div>
  )
}
