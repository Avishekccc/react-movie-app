import Cards from "./Cards";

const PopularMovie = ({ getAllData, favourites, isError, toggleFavourite }) => {
  return (
    <section>
      <h1>Popular Movies</h1>
      {/* Show error message */}
      {isError && <h1 className="text-white/85 text-2xl  my-4">{isError}</h1>}
          <div className="flex flex-wrap justify-between items-center gap-2 lg:gap-2 xl:gap-1.5">
        {getAllData.map((value, index) => {
          const isFav = favourites.some((fav) => fav.imdbID === value.imdbID);
          return (
            <Cards
              key={index}
              title={value.Title}
              // check if poster avaliable if not set default poster
              poster={value.Poster === "N/A" ? "/no-movie.png" : value.Poster}
              year={value.Year}
              imdbID={value.imdbID}
              isFavourite={isFav}
              onHeartClick={() => toggleFavourite(value)}
            ></Cards>
          );
        })}
      </div>
    </section>
  );
};

export default PopularMovie;
