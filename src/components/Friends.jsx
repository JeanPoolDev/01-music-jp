import { friends } from "../data";

export function Friends() {
  return (
    <div className="w-full">
      <h1 className="font-semibold text-xl mb-4" >Friends Activity</h1>

      <div className="mb-4">
        {
          friends.map((friend) => (
            <div
              key={friend.id}
              className="hover:bg-[#e9e9f2] p-5 rounded-2xl cursor-pointer">
              <h1 className="font-semibold">{friend.name}</h1>
              <p className="font-light text-sm" >{friend.song}</p>
            </div>
          ))
        }
      </div>

    </div>
  );
};