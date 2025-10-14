function CoinCard({icon,name}) {
  return (
    <div
      className=" flex flex-col p-5 bg-[#2f2e2c]
                cardshadow rounded-3xl border-white/20 border-1 justify-center w-35"
    >
      <img
        src={icon}
        alt=""
        className="w-30"
      />
      <p className="uppercase font-bold text-white text-center pt-2">
        {name}
      </p>
    </div>
  );
}

export default CoinCard;
