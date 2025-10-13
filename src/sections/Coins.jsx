function Coins(){
    return(
        <div className="grid xl:grid-cols-6 xl:gap-14 md:grid-cols-3 md:gap-50 px-8 max-w-6xl mx-auto
         justify-between pt-20 bg-[#2f2e2c] mb-20">
        <div className=" flex flex-col p-5 bg-[#2f2e2c]
        cardshadow rounded-3xl border-white/20 border-1 justify-center w-35">
            <img src="public/logos/download-removebg-preview (1).png" alt="" className="w-30"/>
            <p className="uppercase font-bold text-white text-xl text-center pt-2">formatic</p>
        </div>

        <div className=" flex flex-col p-5 bg-[#2f2e2c] 
        cardshadow rounded-3xl border-white/20 border-1 justify-center w-35">
            <img src="public/logos/COIN BASE.webp" alt="" className="w-30"/>
            <p className="uppercase font-bold text-white text-xl text-center pt-2">formatic</p>
        </div>

        <div className=" flex flex-col p-5 bg-[#2f2e2c]
        cardshadow rounded-3xl border-white/20 border-1 justify-center w-35">
            <img src="public/logos/download-removebg-preview (2).png" alt="" className="w-30"/>
            <p className="uppercase font-bold text-white text-xl text-center pt-2">formatic</p>
        </div>
        <div className=" flex flex-col p-5 bg-[#2f2e2c] 
        cardshadow rounded-3xl border-white/20 border-1 justify-center w-35">
            <img src="public/logos/download-removebg-preview (3).png" alt="" className="w-30"/>
            <p className="uppercase font-bold text-white text-xl text-center pt-5 pb-0">formatic</p>
        </div>

        <div className=" flex flex-col p-5 bg-[#2f2e2c]
        cardshadow rounded-3xl border-white/20 border-1 justify-center w-35">
            <img src="public/logos/download-removebg-preview.png" alt="" className="w-30"/>
            <p className="uppercase font-bold text-white text-xl text-center pt-2">formatic</p>
        </div>

        <div className=" flex flex-col p-5 bg-[#2f2e2c]
        cardshadow rounded-3xl border-white/20 border-1 justify-center w-35">
            <img src="public/logos/kraken-logo-freelogovectors.net_-400x400.png" alt="" className="w-30"/>
            <p className="uppercase font-bold text-white text-xl text-center pt-2">formatic</p>
        </div>
        </div>
    ) 
}

export default Coins;