import React, {useEffect, useState} from "react"
import "./serie.css"
import { useParams } from "react-router-dom"
import axios from "axios"

const Serie = () => {
    const [currentMovieDetail, setMovie] = useState()
    const [numberSe, setnumberSe] = useState(1)
    const [numberEp, setNumberEp] = useState(1)
    const { id } = useParams()

    const getData = async() => {
        const data  = await axios.get(`https://api.themoviedb.org/3/tv/${id}?api_key=6b3cfd1c595cc8994c09d12fa15da5e5&language=en-US`)
        return data
     }
   useEffect( async () => {
         const {data} = await getData()
         setMovie(data)
         window.scrollTo(0,0)  
         console.log(data)
     }, [])

   
    return (
        <div className="movie" key={id}>
            <div className="movie__intro">
                <img className="movie__backdrop" src={`https://image.tmdb.org/t/p/original${currentMovieDetail ? currentMovieDetail.backdrop_path : ""}`} />
            </div>
            <div className="movie__detail">
                <div className="movie__detailLeft">
                    <div className="movie__posterBox">
                        <img className="movie__poster" src={`https://image.tmdb.org/t/p/original${currentMovieDetail ? currentMovieDetail.poster_path : ""}`} />
                    </div>
                </div>
                <div className="movie__detailRight">
                    <div className="movie__detailRightTop">
                        <div className="movie__name">{currentMovieDetail ? currentMovieDetail.name : ""}</div>
                        <div className="movie__tagline">{currentMovieDetail ? currentMovieDetail.tagline : ""}</div>
                        <div className="movie__rating">
                            {currentMovieDetail ? currentMovieDetail.vote_average: ""} <i className="fas fa-star" />
                            <span className="movie__voteCount">{currentMovieDetail ? "(" + currentMovieDetail.vote_count + ") votes" : ""}</span>
                        </div>  
                        <div className="movie__genres">
                            {
                                currentMovieDetail && currentMovieDetail.genres
                                ? 
                                currentMovieDetail.genres.map((genre, idx) => (
                                    <span className="movie__genre" id={genre.id} key={idx}>{genre.name}</span>
                                )) 
                                : 
                                null
                            }
                        </div>
                    </div>
                    <div className="movie__detailRightBottom">
                        <div className="synopsisText">Synopsis</div>
                        <div>{currentMovieDetail ? currentMovieDetail.overview : ""}</div>
                    </div>
                    <div className="movie__genres">
                            {
                                currentMovieDetail && currentMovieDetail?.number_of_seasons
                                ? 
                                   Array(currentMovieDetail?.number_of_seasons).fill(null).map((item, idx) => (
                                        <span className="movie__genre season" key={idx} onClick={() => setnumberSe(idx + 1)}>season {idx + 1}</span>
                                    ))
                                : 
                                null
                            }
                        </div>
                        <div className="movie__genres">
                            {
                                currentMovieDetail && currentMovieDetail?.seasons
                                ? 
                                   Array( currentMovieDetail.next_episode_to_air.season_number === numberSe ? (currentMovieDetail.next_episode_to_air.episode_number - 1) : currentMovieDetail?.seasons[numberSe].episode_count).fill(null).map((item, idx) => (
                                    <span className="movie__genre season" key={idx} onClick={() => setNumberEp(idx + 1)}>ep{idx + 1}</span>
                                    ))
                                : 
                                null
                            }
                        </div>
                    
                </div>
            </div>
            <div className="movie__name">{'season' + numberSe + '-' + 'ep' +numberEp}</div>

           <div className="watch">
            <iframe  id="ifr" src={`https://v2.vidsrc.me/embed/${id}/${numberSe + '-' + numberEp}`} width="80%" height="700" frameborder="0" allowfullscreen="true" />
            </div>

           
        </div>
    )
}

export default Serie