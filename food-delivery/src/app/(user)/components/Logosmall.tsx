export const Logosmall = () => {
  return (
    <div className="w-[88px] h-[94px] flex flex-col gap-3 items-center">
      <img src="/nomnomLogo.png" className="w-[46px] h-[37px]" />
      <div className="w-22 h-11 flex flex-col items-center">
        <p className="font-semibold text-5 text-white">
          Nom<span className="text-[#ef4444]">Nom</span>
        </p>
        <p className="text-[12px] text-white">Swift delivery</p>
      </div>
    </div>
  );
};
