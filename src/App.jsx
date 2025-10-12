import Coins from "./sections/Coins";
import Header from "./sections/Header";
import Hero from "./sections/Hero";

function App (){
  return(
    <div>
        <Header />
        <Hero />
        <div className="bg-[#2f2e2c]">
          <Coins />
        </div>
    </div>
  )
}

export default App;