import { gradient } from "../../assets";

export const Gradient = () => {
  return (
    <div className="absolute top-[10rem] -left-[20rem] w-[60rem] opacity-70 mix-blend-color-dodge pointer-events-none">
      <div className="absolute top-1/2 left-1/2 w-[60rem] h-[60rem] -translate-x-1/2 -translate-y-1/2">
        <img
          className="w-full"
          src={gradient}
          width={960}
          height={960}
          alt="Gradient"
          style={{
            filter: 'blur(50px)',
            background:
              'radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)',
          }}
        />
      </div>
    </div>
  );
};
