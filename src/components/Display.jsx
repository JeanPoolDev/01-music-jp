import { useParams } from "react-router";
import { albums, songs } from "../data";
import { useMusic } from "../hook/useMusic";

export function Display() {

  const { id } = useParams();
  const albumImage = albums[id];
  const { handlePlayTrackById } = useMusic();

  return (
    <div>

      <h1 className="text-2xl font-semibold mb-4">Display</h1>

      <div className="flex gap-4 flex-col lg:flex-row">

        <img src={albumImage.img} alt={albumImage.name} className="rounded-2xl w-100" />

        <div className="w-full h-100 overflow-y-auto">
          {
            songs.map(song => (
              <div
                key={song.id}
                onClick={() => handlePlayTrackById(song.id)}
                className="flex items-center justify-between py-2 px-5 
              hover:bg-[#dddcec] rounded-lg cursor-pointer">
                <div>
                  <h1 className="font-semibold">{song.name}</h1>
                  <p className="text-sm font-light">{song.artist}</p>
                </div>

                <p className="font-light">{song.duration}</p>
              </div>
            ))
          }
        </div>

      </div>

    </div>
  );
};