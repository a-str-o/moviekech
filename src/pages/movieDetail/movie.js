import React, {useEffect, useState} from "react"
import "./movie.css"
import { useParams } from "react-router-dom"
import axios from "axios"

const Movie = () => {
    const [currentMovieDetail, setMovie] = useState({
        imdb_id : ""
    })
    const { id } = useParams()
   const getData = async() => {
       const data  = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=6b3cfd1c595cc8994c09d12fa15da5e5&language=en-US`)
       return data
    }
  useEffect( async () => {
        const {data} = await getData()
        setMovie(data)
        window.scrollTo(0,0)
    }, [])
    
    return (
        <div className="movie">

            <div className="movie__intro">
                <img alt="img" className="movie__backdrop" src={`https://image.tmdb.org/t/p/original${currentMovieDetail ? currentMovieDetail.backdrop_path : ""}`} />
            </div>
            <div className="movie__detail">
                <div className="movie__detailLeft">
                    <div className="movie__posterBox">
                        <img alt="img" className="movie__poster" src={`https://image.tmdb.org/t/p/original${currentMovieDetail ? currentMovieDetail.poster_path : ""}`} />
                    </div>
                </div>
                <div className="movie__detailRight">
                    <div className="movie__detailRightTop">
                        <div className="movie__name">{currentMovieDetail ? currentMovieDetail.original_title : ""}</div>
                        <div className="movie__tagline">{currentMovieDetail ? currentMovieDetail.tagline : ""}</div>
                        <div className="movie__rating">
                            {currentMovieDetail ? currentMovieDetail.vote_average: ""} <i className="fas fa-star" />
                            <span className="movie__voteCount">{currentMovieDetail ? "(" + currentMovieDetail.vote_count + ") votes" : ""}</span>
                        </div>  
                        <div className="movie__runtime">{currentMovieDetail ? currentMovieDetail.runtime + " mins" : ""}</div>
                        <div className="movie__releaseDate">{currentMovieDetail ? "Release date: " + currentMovieDetail.release_date : ""}</div>
                        <div className="movie__genres">
                            {
                                currentMovieDetail && currentMovieDetail.genres
                                ? 
                                currentMovieDetail.genres.map(genre => (
                                    <><span className="movie__genre" key={genre.id} id={genre.id}>{genre.name}</span></>
                                )) 
                                : 
                                ""
                            }
                        </div>
                    </div>
                    <div className="movie__detailRightBottom">
                        <div className="synopsisText">Synopsis</div>
                        <div>{currentMovieDetail ? currentMovieDetail.overview : ""}</div>
                    </div>
                    
                </div>
            </div>
          

            <div className="watch">
            <iframe id="movie" src={`https://v2.vidsrc.me/embed/${currentMovieDetail.imdb_id}/`} width="80%" height="700" frameborder="0" allowfullscreen="true" />
            </div>





        </div>
    )
}

export default Movie