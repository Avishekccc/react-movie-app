import { CiHeart } from "react-icons/ci";
const Cards = ({ title, poster, year, isFavourite, onHeartClick }) => {
  return (
    <div className="card-container">
      <img
        src={poster}
        alt={`${title} poster image`}
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = "/no-movie.png";
        }}
      />
      <div>
        <h1> {title}</h1>
        <div className="flex justify-between items-center">
          <p>Relased Year : {year}</p>
          <button onClick={onHeartClick}>
            {isFavourite ? (
              <span className="text-red-500">❤️</span>
            ) : (
              <CiHeart />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
