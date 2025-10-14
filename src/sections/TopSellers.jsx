import Sellers from "../components/Sellers"

function TopSellers() {
  return (
    <div className="max-w-6xl mx-auto p-10 mt-10">
      <div className="text-2xl text-white font-bold">
        <h2>Top Sellers</h2>
      </div>
      <div className="flex justify-around max-[550px]:flex-col">
        <div className="flex min-[900px]:flex-row flex-col min-[900px]:gap-15">
          <div className="flex flex-col">
            <Sellers 
              icon = {"/portrait/portrait-1.jpg"}
              name = {"monica Lucas"}
              amount={"3.2 ETH"}
              number={"1."}/>  
            <Sellers 
              icon = {"/portrait/portrait-2.jpg"}
              name = {"mamie barnett"}
              amount={"2.8 ETH"}
              number={"2."}/>

            <Sellers 
              icon = {"/portrait/portrait-3.jpg"}
              name = {"Nicolas Daniels"}
              amount={"2.5 ETH"}
              number={"3."}/>  
          </div>
          <div className="flex flex-col">
            <Sellers 
              icon = {"/portrait/portrait-4.jpg"}
              name = {"Lori Hart"}
              amount={"2.2 ETH"}
              number={"4."}/>  
            <Sellers 
              icon = {"/portrait/portrait-5.jpg"}
              name = {"jimmy Wright"}
              amount={"1.9 ETH"}
              number={"5."}/>

            <Sellers 
              icon = {"/portrait/portrait-6.jpg"}
              name = {"Karla Sharp"}
              amount={"1.6 ETH"}
              number={"6."}/>  
          </div>
        </div>
        <div className="flex min-[900px]:flex-row flex-col min-[900px]:gap-15">
          <div className="flex flex-col">
            <Sellers 
              icon = {"/portrait/portrait-7.jpg"}
              name = {"Gayle Hicks"}
              amount={"1.5 ETH"}
              number={"7."}/>  
            <Sellers 
              icon = {"/portrait/portrait-8.jpg"}
              name = {"Claude Banks"}
              amount={"1.3 ETH"}
              number={"8."}/>

            <Sellers 
              icon = {"/portrait/portrait-9.jpg"}
              name = {"Franklin greer"}
              amount={"0.9 ETH"}
              number={"9."}/>  
          </div>
          <div className="flex flex-col">
            <Sellers 
              icon = {"/portrait/portrait-10.jpg"}
              name = {"Stacy long"}
              amount={"0.8 ETH"}
              number={"10."}/>  
            <Sellers 
              icon = {"/portrait/portrait-11.jpg"}
              name = {"Ida Chapman"}
              amount={"0.6 ETH"}
              number={"11."}/>

            <Sellers 
              icon = {"/portrait/portrait-12.jpg"}
              name = {"Fred Ryan"}
              amount={"0.5 ETH"}
              number={"12."}/>  
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopSellers;
