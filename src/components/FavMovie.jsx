import Cards from "./Cards";

const FavMovie = ({ favourites, toggleFavourite }) => {
  return (
    <div>
      <h1>Favourite Movies</h1>
      <div className="flex flex-wrap space-x-[45px] lg:space-x-[55px] ">
        {/* if no favrouites movie show message */}
        {favourites.length === 0 ? (
          <p className="text-gray-400">No favourite movies yet.</p>
        ) : (
          favourites.map((movie, idx) => (
            <Cards
              key={movie.imdbID || idx}
              title={movie.Title}
              poster={movie.Poster === "N/A" ? "/no-movie.png" : movie.Poster}
              year={movie.Year}
              imdbID={movie.imdbID}
              isFavourite={true}
              onHeartClick={() => toggleFavourite(movie)}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default FavMovie;
