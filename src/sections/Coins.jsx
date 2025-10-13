function Coins(){
    return(
        <div className=" flex gap-10 xl:gap-14 px-8 max-w-6xl mx-auto 
         justify-between pt-20 bg-[#2f2e2c] mb-20 flex-col sm:flex-row items-center">
            <div className="flex gap-13 xl:flex-row flex-col">
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
            </div>

            <div className="flex gap-13 xl:flex-row flex-col">
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
            </div>

            <div className="flex gap-13 xl:flex-row flex-col">
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
        </div>
    ) 
}

export default Coins;