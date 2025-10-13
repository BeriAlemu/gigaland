
function Hero (){
    return(
        <section className="pb-10">
            <div className=" text-amber-100 flex flex-col-reverse lg:flex-row max-w-7xl mx-auto px-12">
                <div className="flex flex-col pt-10 lg:w-1/2">
                    <div className="text-[#b278fb] ">GIGALAND MARKET</div>
                    <h1 className="font-bold text-5xl pt-2"> Create, sell or collect digital items.</h1>
                    <p className="pt-5 text-2xl">unit of data stoled on a digital ledger, called a blockcain,that certifies a digital asset to 
                        be unique and terefore not interchangable</p>
                    <button className="relative mt-5 pr-10 pl-10 p-2 g5 shadow-500 rounded-full group border-blue
                     bg-[#b278fb]">
                         <span className="text-amber-50 text-xl "> Explore </span>
                    </button>
                    <div className="flex mt-5 lg:mt-8 font-bold justify-around">
                        <div className="flex-col text-center">
                            <p className="text-xl lg:text-3xl">94215</p>
                            <p>Collectibles</p>
                        </div>
                        <div className="flex-col text-center">
                            <p className="text-xl lg:text-3xl">27k</p>
                            <p>Auctions</p>
                        </div>
                        <div className="flex-col text-center">
                            <p className="text-xl lg:text-3xl">4K</p>
                            <p>NFT Artist</p>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center w-full ">
                    {/* <img src="" alt="" className="w-150 p-0 lg:pl-15 m-0 lg:ml-5" /> */}
                </div>
                <div>
                    
                </div>
            </div>
        </section>
    )
}


export default Hero;