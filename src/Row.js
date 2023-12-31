import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from "./axios"
import "./Row.css"

const base_url = "https://image.tmdb.org/t/p/original/";

const Row = ({ title, fetchUrl, isLargeRow = false }) => {
    const [movies, setMovies] = useState([])
    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    }, [fetchUrl])

    console.log(movies);
    return (
        <div className='Row'>
            <h2>{title}</h2>
            <div className="row_posters">

                {movies.map((movie) => (
                    <img
                        className={`row_poster ${isLargeRow && "row__posterLarge"}`}
                        key={movie.id}
                        src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} alt={movie.name} />
                ))}
            </div>
        </div>
    )
}

export default Row
