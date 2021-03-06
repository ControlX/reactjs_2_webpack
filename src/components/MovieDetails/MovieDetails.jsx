import React from 'react'
import PropTypes from 'prop-types'
import './movie_details.css'

export default function MovieDetails(props){
    
    return (
        <div>
            <p className='header-parent-label-properties'><strong>netflix</strong>roulette</p>
            <img className='movie-details-search' src="./src/resources/icon_search_transparent.png" onClick={() => props.onMovieDetailsSearch()}/>
        <div className='movie-details-parent'>
            <div className='movie-details-movie-placeholder'>
            <img src={props.movieDetailSelection.src} />
            </div>
            <div className='movie-details-information'>
                <label className='movie-details-title-name'>{props.movieDetailSelection.title}</label>
                <span className='movie-details-rating'>{(props.movieDetailSelection.rating !== undefined) ? props.movieDetailSelection.rating : 'NA'}</span>
                <p className='movie-details-genre'>{props.movieDetailSelection.description}</p>
                <p className='movie-details-year-runtime'>{props.movieDetailSelection.year + '\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0' + props.movieDetailSelection.runtime + ' min'}</p>
                <p className='movie-details-overview'>{props.movieDetailSelection.overview}</p>
            </div>
        </div>
        </div>
    )
}