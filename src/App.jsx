import Coins from "./sections/Coins";
import Header from "./sections/Header";
import Hero from "./sections/Hero";
import HotCollection from "./sections/HotCollection";
import Items from "./sections/Items";
import Sell from "./sections/Sell";
import TopSellers from "./sections/TopSellers";

function App (){
  return(
    <div>
        <Header />
        <Hero />
        <div className="bg-[#2f2e2c]">
          <Coins />
          <Items />
          <TopSellers />
          <HotCollection />
          <Sell />
        </div>
    </div>
  )
}

export default App;