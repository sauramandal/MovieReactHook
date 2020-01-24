import React, { useReducer, useEffect } from 'react'
import Pagination from 'react-js-pagination'
import axios from 'axios'
import { initialState, reducer } from './store'
import Header from './components/Header'
import Search from './components/Search'
import Movie from './components/Movie'
import spinner from './assets/ajax-loader.gif'
import logo from './logo.svg'
// import "bootstrap/scss/bootstrap.scss";
import './App.css'

const MOVIES_API_URL = ''
const SEARCH_MOVIES_URL =
    'https://api.themoviedb.org/3/search/movie?api_key=ff771dd8f4f76b14aaeab6fe96370355&query='
const App = () => {
    const [state, dispatch] = useReducer(reducer, initialState)

    useEffect(() => {
        axios.get(SEARCH_MOVIES_URL + 'harry potter').then(response => {
            console.log('RES', response)
            dispatch({
                type: 'SEARCH_MOVIES_SUCCESS',
                payload: response.data.results,
            })
        })
    }, [])

    const refreshPage = () => {
        window.location.reload()
    }

    const search = searchString => {
        dispatch({
            type: 'SEARCH_MOVIES_REQUEST',
        })
        axios(
            `https://www.omdbapi.com/?s=${searchString}&apikey=4a3b711b`,
        ).then(response => {
            if (response.data.Response === 'True') {
                dispatch({
                    type: 'SEARCH_MOVIES_SUCCESS',
                    payload: response.data.Search,
                })
            } else {
                dispatch({
                    type: 'SEARCH_MOVIES_FAILURE',
                    error: response.data.Error,
                })
            }
        })
    }

    const { movies, errorMessage, loading, activePage } = state
    console.log('movies', movies)
    return (
        <div className="App">
            <div className="m-container">
                <Header text="Movies" />
                <Search search={search} />

                <h4>Favorite Movies</h4>
                <div className="movies">
                    {loading && !errorMessage ? (
                        <span>loading... </span>
                    ) : errorMessage ? (
                        <div className="errorMessage">{errorMessage}</div>
                    ) : (
                        movies &&
                        movies.map((movie, movieIndex) => (
                            <Movie
                                key={`${movieIndex}-${movie.title}`}
                                movie={movie}
                            />
                        ))
                    )}
                </div>
                {/* <Pagination
          activePage={activePage}
          itemsCountPerPage={10}
          totalItemsCount={20}
          pageRangeDisplayed={5}
          onChange={() => false}
        /> */}
            </div>
        </div>
    )
}

export default App
