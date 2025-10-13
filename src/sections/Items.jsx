import { BsHeartFill } from "react-icons/bs";
import { Splide, SplideSlide } from "@splidejs/react-splide";

function Items() {
  return (
    <div className="max-w-6xl mx-auto px-10 ">
      <div className="text-2xl text-white font-bold">
        <h2>New Items</h2>
      </div>
      <div className="pt-10 flex">
        <Splide
          aria-label="crousle"
          options={{
            perPage: 4,
            perMove: 1,  
            arrows: true,
            pagination: true,
            gap: '1rem',
            breakpoints: {
            1024: { perPage: 3 },
            768: { perPage: 2 },
            480: { perPage: 1 },
          }}}
            >
          <SplideSlide>
            <div className="cardshadow border-white/20 border flex flex-col p-6 rounded-3xl w-full max-w-60" >
              <div className="w-full">
                <img
                  src="public/nfts/nft 1.jpg"
                  alt=""
                  className="w-full rounded-3xl"
                />
              </div>
              <div className="pt-6 ">
                <p className="text-white pb-1">the shiny girl</p>
                <p className="text-white/20">0.08 ETH</p>
                <div className="flex items-center gap-20">
                  <a href="" className="text-blue-500">
                    place a bid
                  </a>
                  <div>
                    <BsHeartFill className="text-white" />
                  </div>
                </div>
              </div>
            </div>
          </SplideSlide>

          <SplideSlide>
            <div className="cardshadow border-white/20 border flex flex-col p-6 rounded-3xl w-full max-w-60" >
              <div className="w-full">
                <img
                  src="public/nfts/nft 2.jpg"
                  alt=""
                  className="w-full rounded-3xl"
                />
              </div>
              <div className="pt-6 ">
                <p className="text-white pb-1">the shiny girl</p>
                <p className="text-white/20">0.08 ETH</p>
                <div className="flex items-center gap-20">
                  <a href="" className="text-blue-500">
                    place a bid
                  </a>
                  <div>
                    <BsHeartFill className="text-white" />
                  </div>
                </div>
              </div>
            </div>
          </SplideSlide>

          <SplideSlide>
            <div className="cardshadow border-white/20 border flex flex-col p-6 rounded-3xl w-full max-w-60" >
              <div className="w-full">
                <img
                  src="public/nfts/nft 4.jpg"
                  alt=""
                  className="w-full rounded-3xl"
                />
              </div>
              <div className="pt-6 ">
                <p className="text-white pb-1">the shiny girl</p>
                <p className="text-white/20">0.08 ETH</p>
                <div className="flex items-center gap-20">
                  <a href="" className="text-blue-500">
                    place a bid
                  </a>
                  <div>
                    <BsHeartFill className="text-white" />
                  </div>
                </div>
              </div>
            </div>
          </SplideSlide>

          <SplideSlide>
            <div className="cardshadow border-white/20 border flex flex-col p-6 rounded-3xl w-full max-w-60" >
              <div className="w-full">
                <img
                  src="public/nfts/nft 5.jpg"
                  alt=""
                  className="w-full rounded-3xl max-h-[235.33px]"
                />
              </div>
              <div className="pt-6 ">
                <p className="text-white pb-1">the shiny girl</p>
                <p className="text-white/20">0.08 ETH</p>
                <div className="flex items-center gap-20">
                  <a href="" className="text-blue-500">
                    place a bid
                  </a>
                  <div>
                    <BsHeartFill className="text-white" />
                  </div>
                </div>
              </div>
            </div>
          </SplideSlide>

          <SplideSlide>
            <div className="cardshadow border-white/20 border flex flex-col p-6 rounded-3xl w-full max-w-60" >
              <div className="w-full">
                <img
                  src="public/nfts/nft 6.jpg"
                  alt=""
                  className="w-full rounded-3xl max-h-[235.33px]"
                />
              </div>
              <div className="pt-6 ">
                <p className="text-white pb-1">the shiny girl</p>
                <p className="text-white/20">0.08 ETH</p>
                <div className="flex items-center gap-20">
                  <a href="" className="text-blue-500">
                    place a bid
                  </a>
                  <div>
                    <BsHeartFill className="text-white" />
                  </div>
                </div>
              </div>
            </div>
          </SplideSlide>
        </Splide>
      </div>
    </div>
  );
}

export default Items;
