import { useState, useEffect } from 'react';

function FormMovie(props) {

    const { saveMovie } = props

    const [ movie, setMovie ] = useState({ 
                                            title: '', 
                                            year: '', 
                                            desc: '', 
                                            casts: [], 
                                            poster: '',
                                            quota: 0
                                        })
    
    const setChangeMovie = (event) => {

        if (event.target.id === 'casts') {
            console.log(event.target.value);
            let listCast = event.target.value.split(',');

            //untuk hilangin spasi
            listCast = listCast.map(cast => {
                return cast.trim();
            })
            
            setMovie((currState) => {
                return { ...currState, [event.target.id]: listCast }
            })
        } else {
            setMovie((currState) => {
                return { ...currState, [event.target.id]: event.target.value }
            })
        }
    }

    const addMovie = async (event) => {
        event.preventDefault();
        try {
            let response = await fetch(`http://movie-app-g2.herokuapp.com/movies`, {
                            method: 'POST',
                            body: JSON.stringify(movie),
                            headers: {
                                'Content-Type': 'application/json',
                            },
                        })
            
            if (response.ok) {
                let data = await response.json();
                saveMovie(data);

                setMovie({ 
                    title: '', 
                    year: '', 
                    desc: '', 
                    casts: [], 
                    poster: '',
                    quota: 0
                })
            } else {
                throw Error('There is something wrong when add Movie');
            }
        } catch(err) {
            console.log(err);
        }
    }

    return (
        <div>
            <form>
                <div className="row mb-3">
                    <label for="title" className="col-sm-2 col-form-label">Title</label>
                    <div className="col">
                    <input id="title" type="text" placeholder="Input title movie" value={movie.title} onChange={setChangeMovie}/>
                    </div>
                </div>
                <div className="row mb-3">
                    <label for="year" className="col-sm-2 col-form-label">Year</label>
                    <div className="col">
                        <input id="year" type="text" placeholder="Input year movie" value={movie.year} onChange={setChangeMovie}/>
                    </div>
                </div>
                <div className="row mb-3">
                    <label for="desc" className="col-sm-2 col-form-label">Desc</label>
                    <div className="col">
                        <input id="desc" type="text" placeholder="Input desc movie" value={movie.desc} onChange={setChangeMovie}/>
                    </div>
                </div>
                <div className="row mb-3">
                    <label for="cast" className="col-sm-2 col-form-label">Cast</label>
                    <div className="col">
                        <input id="casts" type="text" placeholder="Input cast movie" value={movie.casts} onChange={setChangeMovie}/>
                    </div>
                </div>
                <div className="row mb-3">
                    <label for="poster" className="col-sm-2 col-form-label">Poster</label>
                    <div className="col">
                        <input id="poster" type="text" placeholder="Input link poster" value={movie.poster} onChange={setChangeMovie}/>
                    </div>
                </div>
                <div className="row mb-3">
                    <label for="quota" className="col-sm-2 col-form-label">Quota</label>
                    <div className="col">
                        <input id="quota" type="text" placeholder="Input quota" value={movie.quota} onChange={setChangeMovie}/>
                    </div>
                </div>
                <div>
                    <button class="btn btn-primary" onClick={addMovie}>Save</button>
                </div>
            </form>
        </div>
    )
}

export default FormMovie;