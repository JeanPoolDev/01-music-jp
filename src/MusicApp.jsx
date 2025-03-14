import { DisplayRouter } from "./components/DisplayRouter";
import { Friends } from "./components/Friends";
import { Sidebar } from "./components/Sidebar";

export function MusicApp() {
  return (
    <div className="h-screen bg-[#cccee3] p-10">
      <div className="h-full bg-[#dddcec] rounded-4xl p-4">

        <div className="flex h-[80%]">

          <div className=" w-1/6 px-4 py-6 overflow-y-auto">
            <Sidebar />
          </div>

          <div className=" w-4/6 bg-[#e7e8f1] px-8 py-6 rounded-4xl overflow-y-auto">
            <DisplayRouter />
          </div>

          <div className=" w-1/6 px-4 py-6 overflow-y-auto">
            <Friends />
          </div>

        </div>

        <div className="h-[20%] ">

        </div>

      </div>
    </div>
  );
};