import React, { Fragment } from 'react'

const MoviePopup = ({ isShowing, hide, movie }) =>
    isShowing ? (
        <Fragment>
            <div className="modal-overlay" />
            <div
                className="modal-wrapper"
                aria-modal
                aria-hidden
                tabIndex={-1}
                role="dialog">
                <div className="modal">
                    <div className="modal-header">
                        <button
                            type="button"
                            className="modal-close-button"
                            data-dismiss="modal"
                            aria-label="Close"
                            onClick={hide}>
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <p>{movie.title}</p>
                </div>
            </div>
        </Fragment>
    ) : null

export default MoviePopup
