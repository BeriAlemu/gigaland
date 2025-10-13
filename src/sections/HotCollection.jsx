import { Splide, SplideSlide } from "@splidejs/react-splide";

function HotCollection() {
  return (
    <div className="max-w-6xl mx-auto px-10 w-full">
      <div className="text-2xl text-white font-bold">
        <h2>Hot Collections</h2>
      </div>
      <div className="flex justify-between w-full">
        <Splide
          aria-label="crousle"
          options={{
            perPage: 4,
            perMove: 1,
            arrows: true,
            pagination: true,
            gap: "1rem",
            breakpoints: {
              1024: { perPage: 3 },
              768: { perPage: 2 },
              480: { perPage: 1 },
            },
          }}
        >
          <SplideSlide>
            <div
              className=" cardshadow border-1 mt-10 border-white/20 w-full h-75 flex 
      flex-col items-center rounded-4xl relative"
            >
              <img
                src="public/collections/collection-1.jpg"
                alt=""
                className="w-full h-2/3 rounded-t-4xl"
              />
              <div className="pt-8 text-xl text-amber-50 uppercase text-center font-bold">
                <p>sketcthify</p>
                <p className="text-white/20">ERC-127</p>
              </div>
              <div className="w-12 flex items-center absolute top-44 ">
                <img
                  src="public/portrait-3.jpg"
                  alt=""
                  className="rounded-full w-full ml-2"
                />
              </div>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div
              className=" cardshadow border-1 mt-10 border-white/20 w-full h-75 flex 
      flex-col items-center rounded-4xl relative"
            >
              <img
                src="public/collections/collection-2.jpg"
                alt=""
                className="w-full h-2/3 rounded-t-4xl"
              />
              <div className="pt-8 text-xl text-amber-50 uppercase text-center font-bold px-50">
                <p>sketcthify</p>
                <p className="text-white/20">ERC-127</p>
              </div>
              <div className="w-12 flex items-center absolute top-44">
                <img
                  src="public/portrait-2.jpg"
                  alt=""
                  className="rounded-full w-full ml-2"
                />
              </div>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div
              className=" cardshadow border-1 mt-10 border-white/20 w-full h-75 flex 
      flex-col items-center rounded-4xl relative"
            >
              <img
                src="public/collections/collection-3.jpg"
                alt=""
                className="w-full h-2/3 rounded-t-4xl"
              />
              <div className="pt-8 text-xl text-amber-50 uppercase text-center font-bold">
                <p>sketcthify</p>
                <p className="text-white/20">ERC-127</p>
              </div>
              <div className="w-12 flex items-center absolute top-44">
                <img
                  src="public/portrait-9.jpg"
                  alt=""
                  className="rounded-full w-full ml-2"
                />
              </div>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div
              className=" cardshadow border-1 mt-10 border-white/20 w-full h-75 flex 
      flex-col items-center rounded-4xl relative"
            >
              <img
                src="public/collections/collection-4.jpg"
                alt=""
                className="w-full h-2/3 rounded-t-4xl"
              />
              <div className="pt-8 text-xl text-amber-50 uppercase text-center font-bold">
                <p>sketcthify</p>
                <p className="text-white/20">ERC-127</p>
              </div>
              <div className="w-12 flex items-center absolute top-44">
                <img
                  src="public/portrait-4.jpg"
                  alt=""
                  className="rounded-full w-full ml-2"
                />
              </div>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div
              className=" cardshadow border-1 mt-10 border-white/20 w-full h-75 flex 
      flex-col items-center rounded-4xl relative"
            >
              <img
                src="public/collections/collection-1.jpg"
                alt=""
                className="w-full h-2/3 rounded-t-4xl"
              />
              <div className="pt-8 text-xl text-amber-50 uppercase text-center font-bold">
                <p>sketcthify</p>
                <p className="text-white/20">ERC-127</p>
              </div>
              <div className="w-12 flex items-center absolute top-44">
                <img
                  src="public/portrait-7.jpg"
                  alt=""
                  className="rounded-full w-full ml-2"
                />
              </div>
            </div>
          </SplideSlide>
        </Splide>
      </div>
    </div>
  );
}

export default HotCollection;
