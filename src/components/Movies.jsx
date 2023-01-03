import Movie from "./Movie";

const Movies = ({movies = []}) => {
    return <div className="movies">
        {console.log(movies)}
        {movies.length ? movies.map(movie => {
            return <Movie key={movie.imdbID} title={movie.Title} year={movie.Year} imdbID={movie.imdbID} type={movie.Type} poster={movie.Poster}/>
        }): <h4>Ничего не найдено</h4>
        }
    </div>
}
export default Movies