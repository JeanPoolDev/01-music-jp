import { DisplayRouter } from "./components/DisplayRouter";
import { Friends } from "./components/Friends";
import { Play } from "./components/Play";
import { Sidebar } from "./components/Sidebar";
import { useMusic } from "./hook/useMusic";

export function MusicApp() {

  const { audioRef, track } = useMusic();

  return (
    <div className="h-screen bg-[#cccee3] p-2 md:p-10">
      <div className="h-full bg-[#dddcec] rounded-4xl p-4">

        <div className="flex h-[80%]">

          <div className=" w-1/6 px-4 py-6 overflow-y-auto hidden lg:flex">
            <Sidebar />
          </div>

          <div className=" w-full lg:w-4/6 bg-[#e7e8f1] py-4 px-2 md:px-8 md:py-6
           rounded-4xl overflow-y-auto">
            <DisplayRouter />
          </div>

          <div className=" w-1/6 px-4 py-6 overflow-y-auto hidden lg:flex ">
            <Friends />
          </div>

        </div>

        <div className="h-[20%] py-4 px-2 md:px-4 md:py-6">
          <Play />
        </div>

        <audio src={track.file} ref={audioRef} preload="auto"></audio>

      </div>
    </div>
  );
};