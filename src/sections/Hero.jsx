import Button from "../components/Button";

function Hero (){
    return(
        <section className="relative">
            <div className="bg-[url('/dark-planet-space-landscape_23-2151889136.jpg')] absolute -top-32 w-full 
        h-175 -z-100000 bg-cover bg-center bg-no-repeat"></div>
            <div className=" text-amber-100 flex max-w-7xl mx-auto">
                <div className="flex-col pt-10 w-1/2">
                    <div className="text-[#b278fb] ">GIGALAND MARKET</div>
                    <h1 className="font-bold text-5xl pt-2"> Create, sell or collect <br /> digital items.</h1>
                    <p className="pt-5 text-2xl">unit of data stoled on a digital ledger, called a blockcain,that certifies a digital asset to 
                        be unique and terefore not interchangable</p>
                    <button className="relative mt-5 pr-10 pl-10 p-2 g5 shadow-500 rounded-full group border-blue bg-[#b278fb]">
                         <span className="text-amber-50 text-xl"> Explore </span>
                    </button>
                    <div className="flex mt-10 font-bold">
                        <div className="flex-col pr-15">
                            <p className="text-3xl">94215</p>
                            <p>Collectibles</p>
                        </div>
                        <div className="flex-col pr-15">
                            <p className="text-3xl">27k</p>
                            <p>Auctions</p>
                        </div>
                        <div className="flex-col">
                            <p className="text-3xl">4K</p>
                            <p>NFT Artist</p>
                        </div>
                    </div>
                </div>
                <div>
                    <img src="/Untitled_design__1_-removebg-preview.png" alt="" className="w-150 pl-15 ml-5" />
                </div>
                <div>
                    
                </div>
            </div>
        </section>
    )
}


export default Hero;