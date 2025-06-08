# Movie React App

A simple movie search and favourites app built with React and Vite. Search for movies using the OMDb API, view popular movies, and save your favourites to localStorage.

## Features

- Search for movies by keyword
- View popular movies
- Add or remove movies from your favourites list
- Favourites are saved in localStorage and persist across reloads
- Graceful fallback for missing or broken movie posters

## Getting Started

### Prerequisites

- Node.js and npm installed
- OMDb API key (get one for free at [OMDb API](https://www.omdbapi.com/apikey.aspx))

### Installation

1. **Clone the repository:**
   ```sh
   git clone <your-repo-url>
   cd movie_react_app
   ```
2. **Install dependencies:**
   ```sh
   npm install
   ```
3. **Add your OMDb API key:**
   - Create a `.env` file in the project root.
   - Add this line:
     ```env
     VITE_API_KEY=your_omdb_api_key
     ```
4. **Start the app:**
   ```sh
   npm run dev
   ```

The app will be available at the local address shown in your terminal.

## Project Structure

- `src/components/` - React components (Home, Cards, FavMovie, etc.)
- `src/service/Api.jsx` - Axios setup for OMDb API requests
- `public/no-movie.png` - Default image for missing posters

## Usage

- Use the search bar to find movies.
- Click the heart icon on a movie card to add or remove it from your favourites.
- Favourites are displayed in the "Favriout Movies" section and persist after reload.

## License

This project is for educational/demo purposes.
