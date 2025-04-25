export const Logo = () => {
  return (
    <div className="w-[146px] h-11 flex gap-3">
      <img src="/nomnomLogo.png" />
      <div className="w-22 h-11">
        <p className="font-semibold text-5 text-white">
          Nom<span className="text-[#ef4444]">Nom</span>
        </p>
        <p className="text-[12px] text-white">Swift delivery</p>
      </div>
    </div>
  );
};
