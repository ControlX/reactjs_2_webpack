import React from 'react'
import MovieCard from '../MovieCard'
import PropTypes from 'prop-types'
import './movies_list.css'

export default function MoviesList(props){
    const listing = props.listing;
    return (
        <>
        {listing.map((movie) => (
            (movie.isEnabled) ?
            <div className='gallery' key={movie.id}>
            <MovieCard
                id={movie.id}
                src={movie.src}
                title={movie.title}
                year= {movie.year}
                description={movie.description}
                overview={movie.overview}
                runtime={movie.runtime}
                onEditAction={props.onEditAction}
                onDeleteAction={props.onDeleteAction}
                onShowMovieDetailsAction={props.onShowMovieDetailsAction}
            />
            </div> : null
        ))}
        </>
    )
}

MoviesList.propTypes = {
    listing: PropTypes.array.isRequired
}