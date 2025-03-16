import { Link } from "react-router";
import { sidebarItems } from "../data";

export function Sidebar() {
  return (
    <div className="w-full">
      <h1 className="text-2xl font-bold mb-10">Jp Music</h1>

      <div className="mb-4">
        <h2 className="mb-4 font-light">Gender</h2>

        {
          sidebarItems.map((item) => (
            <Link
              key={item.id}
              to={item.link}
              className="hover:bg-[#e9e9f2] p-5 rounded-2xl flex gap-4">

              <img src={item.icon} alt="" />
              <p className="font-semibold">{item.name}</p>
            </Link>
          ))
        }
      </div>

    </div>
  );
};