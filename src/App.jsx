import Coins from "./sections/Coins";
import Footer from "./sections/Footer";
import Header from "./sections/Header";
import Hero from "./sections/Hero";
import Items from "./sections/Items";
import Sell from "./sections/Sell";
import TopSellers from "./sections/TopSellers";

function App (){
  return(
    <div>
      <div className="bg-[url('/public/hero-trial.jpg')] w-full -z-100000 bg-cover bg-center bg-no-repeat">
              <Header />
              <Hero />
        </div>
        <div className="bg-[#2f2e2c]">
          <Coins />
          <Items />
          <TopSellers />
          <Sell />
          <Footer />
        </div>
    </div>
  )
}

export default App;