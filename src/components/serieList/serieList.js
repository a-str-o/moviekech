import React, {useEffect, useState} from "react"
import "./serieList.css"
import { useParams } from "react-router-dom"
import Cards from "../cardSe/cardSe"

const SerieList = () => {
    
    const [serieList, setSerieList] = useState([])
    const {type} = useParams()

    useEffect(() => {
        getData()
    }, [])

    useEffect(() => {
        getData()
    }, [type])

    const getData = () => {
        fetch(`https://api.themoviedb.org/3/tv/${type ? type : "popular"}?api_key=6b3cfd1c595cc8994c09d12fa15da5e5&language=en-US`)
        .then(res => res.json())
        .then(data => setSerieList(data.results))
    }

    return (
        <div className="movie__list">
            <h2 className="list__title">{(type ? type : "POPULAR").toUpperCase()}</h2>
            <div className="list__cards">
                {
                    serieList.map(serie => (
                        <Cards movie={serie} />
                    ))
                }
            </div>
        </div>
    )
}

export default SerieList