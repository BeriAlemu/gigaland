function Button ({children,className}){
    return (
        <button className= {`relative pl-3 pr-3 p-1 g5 shadow-500 rounded-full group border-blue bg-[#b278fb] ${className}`}>
           <span className="text-amber-50"> {children} </span>
        </button>
    )
}

export default Button;