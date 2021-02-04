import React, { useState, useEffect } from "react";
import "./Row.css";
import axios from "../axios";




function Row({ title, fetchUrl, isLargeRow = false }) {

    const [movies, setMovies] = useState([]);
    const [isTrailer, setIsTrailer] = useState(false);
    const [youtubeUrl, setYoutubeUrl] = useState(null);

    const base_url = "https://image.tmdb.org/t/p/original/";


    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            const data = request.data.results;

            setMovies(data);

        }

        fetchData()
    }, [fetchUrl]);


    const trailer = async (id) => {
        setIsTrailer(!isTrailer);

        try {
            const trailerUrl = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${process.env.REACT_APP_MOVIE_API}&language=en-US`;
            const response = await fetch(trailerUrl);
            const data = await response.json();
            const finalUrl = `https://www.youtube.com/embed/${data.results[0].key}?autoplay=1&mute=0`;
            setYoutubeUrl(finalUrl);
            setIsTrailer(true);
        } catch (error) {
            console.log("error=>", error);
            setIsTrailer(false);
        }




    }

    return (
        <>
            <div className="row">
                <h2>{title}</h2>

                <div className="row__posters">

                    {movies.map((movie) => (
                        ((isLargeRow && movie.poster_path) || (!isLargeRow && movie.backdrop_path)) &&

                        < img src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path
                            }`} alt={movie?.original_title} key={movie.id} className={`row__poster ${isLargeRow && "row__posterLarge"}`} onClick={() => trailer(movie.id)} />
                    ))}
                </div>

                {setIsTrailer && youtubeUrl &&
                    <iframe
                        width="100%"
                        height="460"
                        allow="autoplay"
                        src={youtubeUrl}
                        className="youtube"
                        title={youtubeUrl}

                    ></iframe>
                }

            </div>

        </>
    );
}

export default Row;
