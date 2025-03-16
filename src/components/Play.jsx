import { useMusic } from "../hook/useMusic";
import { Heart, Next, Pause, Playing, Previous, Volumen } from "../icons";

export function Play() {

  const { status, handlePlay, handlePause, volumen,
    handleVolumeChange, track, handleNextTrack,
    handlePreviousTrack, bgRef, barRef, handleSeekSong } = useMusic();

  return (
    <div className="bg-[#e7e8f1] h-full rounded-2xl w-full">

      <div ref={bgRef} onClick={handleSeekSong}
        className="w-full cursor-pointer" >
        <hr ref={barRef} className="h-2 bg-[#c7b1ef] border-none rounded-2xl w-0 " />
      </div>


      <section className="flex flex-col md:flex-row md:justify-between items-center
      justify-evenly h-full px-4 md:px-10">

        <div className="hidden md:flex gap-4 items-center">
          <img src={track.img} alt={track.name} className="w-20 h-20 rounded-2xl" />
          <div>
            <h1 className="font-semibold">{track.name}</h1>
            <p className="text-sm font-light">{track.artist}</p>
          </div>
        </div>

        <div className="flex gap-4 items-center">
          <button onClick={handlePreviousTrack} className="cursor-pointer"> <Previous /> </button>
          {
            status
              ? <button onClick={handlePause} className="cursor-pointer" > <Pause /> </button>
              : <button onClick={handlePlay} className="cursor-pointer"> <Playing /> </button>
          }
          <button onClick={handleNextTrack} className="cursor-pointer"> <Next /> </button>
        </div>

        <div className="flex gap-4 items-center">
          <Volumen />

          <input
            type="range"
            value={volumen}
            onChange={handleVolumeChange}
            min={0}
            max={10}
          />

          <Heart />

        </div>

      </section>


    </div>
  );
};