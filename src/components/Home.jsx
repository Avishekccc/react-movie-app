import { useEffect, useState } from "react";
import SearchInput from "./SearchInput";
import FavMovie from "./FavMovie";
import { getMovieData } from "../service/Api";
import PopularMovie from "./PopularMovie";
import ToggleMenue from "./ToggleMenue";

const Home = () => {
  const [getAllData, setGetAllData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState("");
  const [searchInput, setSearchInput] = useState("");
  const [searchKeyWord, setSearchKeyWord] = useState("movie");
  // get favrouites movie from localstorage
  const [favourites, setFavourites] = useState(() => {
    return JSON.parse(localStorage.getItem("favouriteMovies")) || [];
  });
  const [isActive, setIsActive] = useState("pop");

  // fetch movie data from api
  const getMovie = async () => {
    setIsLoading(true);
    setIsError("");
    try {
      const response = await getMovieData(searchKeyWord);
      if (response.data.Response.toLowerCase() === "true") {
        setGetAllData(response.data.Search || []);
        setIsError("");
      } else {
        setGetAllData([]);
        setIsError("Data not found");
      }
      setIsLoading(false);
    } catch (error) {
      setGetAllData([]);
      setIsError(`movie fetching error : ${error.message}`);
      setIsLoading(false);
    }
  };

  // Save favourites to localStorage when they change
  useEffect(() => {
    localStorage.setItem("favouriteMovies", JSON.stringify(favourites));
  }, [favourites]);

  const toggleFavourite = (movie) => {
    setFavourites((prevFavs) => {
      const exists = prevFavs.find((fav) => fav.imdbID === movie.imdbID);
      if (exists) {
        // Remove from favourites
        return prevFavs.filter((fav) => fav.imdbID !== movie.imdbID);
      } else {
        // Add to favourites
        return [...prevFavs, movie];
      }
    });
  };

  // search movie based on searchKeyword variable from useState
  useEffect(() => {
    getMovie();
  }, [searchKeyWord]);

  return (
    <div>
      {/* ..search Component..*/}
      <SearchInput
        searchInput={searchInput}
        setSearchInput={setSearchInput}
        searchKeyWord={searchKeyWord}
        setSearchKeyWord={setSearchKeyWord}
      ></SearchInput>

      {/* main container Start */}
      <ToggleMenue isActive={isActive} setIsActive={setIsActive}></ToggleMenue>

      <div className="main-container">
        {isActive === "fav" ? (
          <FavMovie favourites={favourites} toggleFavourite={toggleFavourite} />
        ) : (
          <PopularMovie
            getAllData={getAllData}
            favourites={favourites}
            isError={isError}
            toggleFavourite={toggleFavourite}
          ></PopularMovie>
        )}

        {isLoading && <h1>Loading.....</h1>}
      </div>
    </div>
  );
};

export default Home;
