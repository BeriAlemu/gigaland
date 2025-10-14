function Sellers ({icon,name,amount,number}){
    return(
         <div className="pt-5 pl-5">
              <div className="flex gap-5 items-center">
                <div className="w-10 flex items-center ">
                  <div className="text-white">{number}</div>
                  <img
                    src={icon}
                    alt=""
                    className="rounded-full w-full ml-2"
                    loading="lazy"
                  />
                </div>
                <div className="flex flex-col pl-2 font-bold text-amber-50">
                  <p className="text-amber-50">{name}</p>
                  <p className="text-white/20">{amount}</p>
                </div>
              </div>
            </div>
    )
}

export default Sellers;