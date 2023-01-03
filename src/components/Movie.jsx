const Movie = ({title, year, imdbID, type, poster}) => {
   return <div id={imdbID} className="card">
        <div className="card-image waves-effect waves-block waves-light">
            {poster === 'N/A'? <img className="activator" src={`https://via.placeholder.com/300x400.png?text=${title} https://placeholder.com/`}/> :
            <img className="activator" src={poster}/>}
        </div>
        <div className="card-content">
            <span className="card-title activator grey-text text-darken-4">{title}</span>
            <p>{year} <span className="right">{type}</span></p>
        </div>
    </div>
}
export default Movie;