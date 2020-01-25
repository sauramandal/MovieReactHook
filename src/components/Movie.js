import React, { Fragment, useState } from 'react'
import MoviePopup from './MoviePopup'
import useModal from '../customhooks/useModal'

const DEFAULT_IMAGE_URL = 'https://image.tmdb.org/t/p/w370_and_h556_bestv2/'
const DEFAULT_PLACEHOLDER_IMAGE =
    'https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg'

const Movie = ({ movie }) => {
    // const [showModal, setShowModal] = useState(false)
    const { isShowing, toggle } = useModal()
    const poster =
        movie.poster_path && movie.poster_path === null
            ? DEFAULT_PLACEHOLDER_IMAGE
            : DEFAULT_IMAGE_URL + movie.poster_path

    // const toggleModal = evt => {
    //     evt.preventDefault()
    //     setShowModal({
    //         showModal: !showModal,
    //     })
    //     console.log('showModal', showModal)
    // }
    return (
        <Fragment>
            <img
                className="gallery-image"
                width="200"
                alt={`The movie titled: ${movie.title}`}
                src={poster}
                onClick={toggle}
                style={{ cursor: 'pointer' }}
            />
            <MoviePopup isShowing={isShowing} hide={toggle} movie={movie} />
        </Fragment>
    )
}

export default Movie
