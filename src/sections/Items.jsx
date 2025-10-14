import { BsHeartFill } from "react-icons/bs";

function Items() {
  return (
    <div className="max-w-6xl mx-auto px-10 ">
      <div className="text-2xl text-white font-bold">
        <h2>New Items</h2>
      </div>
      <div className="pt-10 flex justify-around sm:flex-row flex-col items-center gap-10">
        <div className="flex min-[1200px]:flex-row flex-col gap-10 w-full items-center">
            <div className="cardshadow border-white/20 border flex flex-col p-6 rounded-3xl w-full lg:max-w-60" >
              <div className="w-full">
                <img
                  src="/nfts/nft 1.jpg"
                  alt=""
                  className="w-full rounded-3xl"
                  loading="lazy"
                />
              </div>
              <div className="pt-6 ">
                <p className="text-white pb-1">the shiny girl</p>
                <p className="text-white/20">0.08 ETH</p>
                <div className="flex items-center justify-between">
                  <a href="" className="text-blue-500">
                    place a bid
                  </a>
                  <div>
                    <BsHeartFill className="text-white" />
                  </div>
                </div>
              </div>
            </div>
            <div className="cardshadow border-white/20 border flex flex-col p-6 rounded-3xl w-full lg:max-w-60" >
              <div className="w-full">
                <img
                  src="/nfts/nft 2.jpg"
                  alt=""
                  className="w-full rounded-3xl"
                  loading="lazy"
                />
              </div>
              <div className="pt-6 ">
                <p className="text-white pb-1">the shiny girl</p>
                <p className="text-white/20">0.08 ETH</p>
                <div className="flex items-center justify-between">
                  <a href="" className="text-blue-500">
                    place a bid
                  </a>
                  <div>
                    <BsHeartFill className="text-white" />
                  </div>
                </div>
              </div>
            </div>
            </div>
            <div className="flex min-[1200px]:flex-row flex-col gap-10 w-full items-center ">
              <div className="cardshadow border-white/20 border flex flex-col p-6 rounded-3xl w-full lg:max-w-60" >
                <div className="w-full">
                  <img
                    src="/nfts/nft 4.jpg"
                    alt=""
                    className="w-full rounded-3xl"
                    loading="lazy"
                  />
                </div>
                <div className="pt-6 ">
                  <p className="text-white pb-1">the shiny girl</p>
                  <p className="text-white/20">0.08 ETH</p>
                  <div className="flex items-center justify-between">
                    <a href="" className="text-blue-500">
                      place a bid
                    </a>
                    <div>
                      <BsHeartFill className="text-white" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="cardshadow border-white/20 border flex flex-col p-6 rounded-3xl w-full lg:max-w-60" >
                <div className="w-full">
                  <img
                    src="/nfts/nft 5.jpg"
                    alt=""
                    className="w-full rounded-3xl lg:max-h-[235.33px]"
                    loading="lazy"
                  />
                </div>
                <div className="pt-6 ">
                  <p className="text-white pb-1">the shiny girl</p>
                  <p className="text-white/20">0.08 ETH</p>
                  <div className="flex items-center justify-between">
                    <a href="" className="text-blue-500">
                      place a bid
                    </a>
                    <div>
                      <BsHeartFill className="text-white" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
      </div>
    </div>
  );
}

export default Items;
