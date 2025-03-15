import { songs } from "../data";
import { Heart, Next, Pause, Playing, Previous, Volumen, } from "../icons";

export function Play() {

  const { name, artist, img } = songs[0];

  return (
    <div className="bg-[#e7e8f1] h-full rounded-2xl w-full">

      <hr className="h-2 bg-[#c7b1ef] border-none rounded-2xl w-[20%] cursor-pointer" />

      <section className="flex flex-col md:flex-row md:justify-between items-center justify-evenly h-full px-4 md:px-10">

        <div className="hidden md:flex gap-4 items-center">
          <img src={img} alt={name} className="w-20 h-20 rounded-2xl" />
          <div>
            <h1 className="font-semibold">{name}</h1>
            <p className="text-sm font-light">{artist}</p>
          </div>
        </div>

        <div className="flex gap-4 items-center">
          <button> <Previous /> </button>
          {/* <button> <Pause /> </button> */}
          <button> <Playing /> </button>
          <button> <Next /> </button>
        </div>

        <div className="flex gap-4 items-center">
          <Volumen />

          <input
            type="range" />

          <Heart />

        </div>

      </section>


    </div>
  );
};