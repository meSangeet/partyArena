import { brainwaveWhiteSymbol, gradient, play } from "../../assets";
import ChatBubbleWing from "../../assets/svg/ChatBubbleWing";

export const Gradient = () => {
  return (
    <div className="absolute top-0 -left-[10rem] w-[56.625rem] h-[56.625rem] opacity-50 mix-blend-color-dodge pointer-events-none">
      <img
        className="absolute top-1/2 left-1/2 w-[79.5625rem] max-w-[79.5625rem] h-[88.5625rem] -translate-x-1/2 -translate-y-1/2"
        src={gradient}
        width={1417}
        height={1417}
        alt="Gradient"
      />
    </div>
  );
};

export const PhotoChatMessage = () => {
  return (
    <div className="absolute top-8 right-8 max-w-[20rem] py-6 px-8 bg-[#28206C] rounded-t-xl rounded-bl-xl font-code text-base lg:top-16 lg:right-[10rem]">
      “Your party booking is confirmed! 🎉” 
      <ChatBubbleWing className="absolute left-full bottom-0" />
    </div>
  );
};

export const VideoChatMessage = () => {
  return (
    <div className="absolute top-8 left-[3.125rem] w-full max-w-[16rem] pt-3 pr-3 pb-8 pl-5 bg-[#8D3FD7] rounded-t-xl rounded-br-xl font-code text-base md:max-w-[20rem]">
      “Upcoming Event: Glow Party 🌟” 
      <div className="absolute left-5 -bottom-[1.125rem] flex items-center justify-center w-[2.25rem] h-[2.25rem] bg-[#FFD700] rounded-[0.75rem]">
        <img
          src={brainwaveWhiteSymbol}
          width={26}
          height={26}
          alt="Party"
        />
      </div>
      <p className="tagline absolute right-2.5 bottom-1 text-[0.625rem] text-white uppercase">
        happening now
      </p>
      <ChatBubbleWing
        className="absolute right-full bottom-0 -scale-x-100"
        pathClassName="fill-[#8D3FD7]"
      />
    </div>
  );
};

export const VideoBar = () => {
  return (
    <div className="absolute left-0 bottom-0 w-full flex items-center p-6">
      <img
        src={play}
        width={24}
        height={24}
        alt="Play Event Video"
        className="object-contain mr-3"
      />
      <div className="flex-1 bg-[#FFD700]">
        <div className="w-3/4 h-1 bg-[#28206C]"></div>
      </div>
    </div>
  );
};
