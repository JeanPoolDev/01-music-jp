export function Header() {
  return (
    <header className="flex justify-between">
      <input
        type="text"
        className="p-2 bg-[#dddcec] rounded-xl w-[300px]"
        placeholder="Search"
      />

      <div className="flex items-center gap-4">
        <img
          src="https://i.pinimg.com/736x/ef/8f/1b/ef8f1b0850464b31162382955ee93c18.jpg"
          alt="yo xd" className="rounded-full w-8 h-8" />
        <h2 className="font-semibold">Jean Pool</h2>
      </div>
    </header>
  );
};