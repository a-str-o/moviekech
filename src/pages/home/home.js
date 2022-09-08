import React, { useEffect, useState } from "react"
import "./home.css"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { Link } from "react-router-dom";
import MovieList from "../../components/movieList/movieList";

import SerieList from "../../components/serieList/serieList";
const Home = () => {

    const [ popularMovies, setPopularMovies ] = useState([])
    const [ type, setType ] = useState("movie")

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/${type}/popular?api_key=6b3cfd1c595cc8994c09d12fa15da5e5&language=en-US`)
        .then(res => res.json())
        .then(data => setPopularMovies(data.results))
    }, [type])

    return (
        <>
            <div className="poster">
                <Carousel
                    showThumbs={false}
                    autoPlay={true}
                    transitionTime={3}
                    infiniteLoop={true}
                    showStatus={false}
                >
                    {
                        popularMovies.map(movie => (
                            <Link style={{textDecoration:"none",color:"white"}} to={`/movie/${movie.id}`} >
                                <div className="posterImage">
                                    <img src={`https://image.tmdb.org/t/p/original${movie && movie.backdrop_path}`} />
                                </div>
                                <div className="posterImage__overlay">
                                    <div className="posterImage__title">{movie ? movie.original_title: ""}</div>
                                    <div className="posterImage__runtime">
                                        {movie ? movie.release_date : ""}
                                        <span className="posterImage__rating">
                                            {movie ? movie.vote_average :""}
                                            <i className="fas fa-star" />{" "}
                                        </span>
                                    </div>
                                    <div className="posterImage__description">{movie ? movie.overview : ""}</div>
                                </div>
                            </Link>
                        ))
                    }
                </Carousel>
                <div className="buttons">
                <button onClick={() => {
                    setType("movie")
                }}>movies</button>
                <button onClick={() => {
                    setType("tv")
                }}>tv show</button>
                </div>
                {
                    type === "movie"
                    ? <MovieList />
                    : <SerieList />
                }
            </div>
        </>
    )
}

export default Home