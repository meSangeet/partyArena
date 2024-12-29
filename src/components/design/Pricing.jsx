import { lines } from "../../assets";

export const LeftLine = () => {
  return (
    <div className="hidden lg:block absolute top-1/2 right-full w-[100rem] h-[12rem] -translate-y-1/2 pointer-events-none">
      <img
        className="w-full"
        src={lines}
        width={1500}
        height={180}
        alt="Neon Lines"
        style={{ filter: 'drop-shadow(0 0 15px #FFD700)' }}
      />
    </div>
  );
};

export const RightLine = () => {
  return (
    <div className="hidden lg:block absolute top-1/2 left-full w-[100rem] h-[12rem] -translate-y-1/2 -scale-x-100 pointer-events-none">
      <img
        className="w-full"
        src={lines}
        width={1500}
        height={180}
        alt="Neon Lines"
        style={{ filter: 'drop-shadow(0 0 15px #FFD700)' }}
      />
    </div>
  );
};