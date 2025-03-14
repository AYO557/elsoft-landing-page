import { Mail } from "lucide-react";

function SubscribeInput() {
  return (
    <div className="flex gap-2 items-center justify-between p-1 pl-4 bg-[rgba(255,255,255,0.4)] rounded-4xl">
      <div className="flex items-center gap-2">
        <Mail size={20} color="white" />
        <input
          type="text"
          className="bg-transparent outline-none w-[150px] text-white"
          placeholder="elsoft@gmail.com"
        />
      </div>
      <div className="rounded-3xl py-2 px-4 h-[95%] bg-white text-gray-700 text-sm tracking-tight cursor-pointer">
        Subcribe
      </div>
    </div>
  );
}

export default SubscribeInput;
