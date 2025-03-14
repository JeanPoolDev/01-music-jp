import { Link } from "react-router";
import { albums } from "../data";

export function Album() {
  return (
    <div>
      <h1 className="text-xl font-semibold mb-4">Recently Played</h1>

      <div className="grid gap-4 grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
        {
          albums.map(album => (
            <Link
              to={`album/${album.id}`}
              key={album.id}
              className="p-2 hover:bg-[#dddcec] transition-all cursor-p max-w-[180px]">
              <img
                src={album.img}
                className="rounded-2xl mb-2"
              />
              <h1 className="font-bold">{album.name}</h1>
              <p className="text-sm font-light">{album.art}</p>
            </Link>
          ))
        }
      </div>
    </div>
  );
};