import CoinCard from "../components/CoinCard";

function Coins(){
    return(
        <div className=" flex gap-10 xl:gap-14 px-8 max-w-6xl mx-auto 
         justify-between pt-20 bg-[#2f2e2c] mb-20 flex-col sm:flex-row items-center lg:items-stretch">
            <div className="flex gap-13 xl:flex-row sm:flex-col flex-row">
                <CoinCard 
                name ={"Wallet Connect"}
                icon ={"/logos/coin-6.png"}/>

                <CoinCard 
                name ={"Metamask"}
                icon ={"/logos/coin-5.png"}/>


            </div>

            <div className="flex gap-13 xl:flex-row sm:flex-col flex-row">
                <CoinCard 
                name ={"Bitski"}
                icon ={"/logos/coin-4.png"}/>

                <CoinCard 
                name ={"fortmatic"}
                icon ={"/logos/coin-3.png"}/>

            </div>

            <div className="flex gap-13 xl:flex-row sm:flex-col flex-row">
                <CoinCard 
                name ={"Coinbase"}
                icon ={"/logos/coin-2.webp"}/>

                <CoinCard 
                name ={"kraken"}
                icon ={"/logos/coin-1.png"}/>
            </div>
        </div>
    ) 
}

export default Coins;