const ToggleMenue = ({ isActive, setIsActive }) => {
  return (
    <section>
      <div className="flex justify-end gap-4 px-[10%]">
        <button
          className={`underline cursor-pointer ${
            isActive === "fav" ? "text-gray-400" : "text-white/80"
          }`}
          onClick={() => setIsActive("fav")}
        >
          Favrioutes Movie
        </button>
        <button
          className={`underline cursor-pointer ${
            isActive === "pop" ? "text-gray-400" : "text-white/80"
          }`}
          onClick={() => setIsActive("pop")}
        >
          Popular Movie
        </button>
      </div>
    </section>
  );
};

export default ToggleMenue;
