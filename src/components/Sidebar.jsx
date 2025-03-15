
export function Sidebar() {
  return (
    <div className="w-full">
      <h1 className="text-2xl font-bold mb-10">Jp Music</h1>

      <div className="mb-4">
        <h2 className="mb-4 font-light">Recomend</h2>

        {
          [1, 2, 3, 4].map((item) => (
            <div
              key={item}
              className="hover:bg-[#e9e9f2] p-5 rounded-2xl cursor-pointer ">
              <p className="font-semibold">For your</p>
            </div>
          ))
        }
      </div>

      <div className="mb-4">
        <h2 className="mb-4 font-light">Recomend</h2>

        {
          [1, 2, 3, 4].map((item) => (
            <div
              key={item}
              className="hover:bg-[#e9e9f2] p-5 rounded-2xl cursor-pointer">
              <p className="font-semibold">For your</p>
            </div>
          ))
        }
      </div>

      <div className="mb-4">
        <h2 className="mb-4 font-light">Recomend</h2>

        {
          [1, 2, 3, 4].map((item) => (
            <div
              key={item}
              className="hover:bg-[#e9e9f2] p-5 rounded-2xl cursor-pointer">
              <p className="font-semibold">For your</p>
            </div>
          ))
        }
      </div>

    </div>
  );
};