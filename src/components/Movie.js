import './Movie.css';

function Movie (props) {
  const { mov, removeMovie } = props;

  const deleteMovie = async () => {
    try {
        let response = await fetch(`http://movie-app-g2.herokuapp.com/movies/${mov._id}`, { method: 'DELETE'})

        if (response.ok) {
            let data = await response.json();
            removeMovie(mov._id);
        } else {
            throw Error ('There is something wrong in remove movie');
        }
    } catch(err) {
        console.log(err);
    }
  }
    
  return (
    <div className="card col-3 m-2">
        <img src={mov.poster} className="card-img-top mx-auto d-block mb-3" alt="..." style={{ width: "250px", height: "250px"}}/>
        <div className="card-body">
            <h5 className="card-title">{mov.title} - {mov.year}</h5>
            <p className="card-text">{mov.desc}</p>
            <button className="btn btn-primary" onClick={deleteMovie}>Delete</button>
            { mov.quota > 0 && <button className='btn btn-info'>Buy</button>}
        </div>
    </div>
  )
}

export default Movie;
