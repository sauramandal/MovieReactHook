import React, { useState, useReducer, useEffect } from 'react'
import Pagination from 'react-js-pagination'
import axios from 'axios'
import { initialState, reducer } from './store'
import Filter from './components/Filter'
import Header from './components/Header'
import Search from './components/Search'
import Movie from './components/Movie'
import spinner from './assets/ajax-loader.gif'
import logo from './logo.svg'
import './App.css'

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

    const refreshPage = () => window.location.reload()

    const search = searchString => {
        dispatch({
            type: 'SEARCH_MOVIES_REQUEST',
            payload: searchString,
        })
        axios(SEARCH_MOVIES_URL + searchString).then(response => {
            if (response.data.results && response.data.results.length) {
                dispatch({
                    type: 'SEARCH_MOVIES_SUCCESS',
                    payload: response.data.results,
                })
            } else {
                dispatch({
                    type: 'SEARCH_MOVIES_FAILURE',
                    error: response.data.Error,
                })
            }
        })
    }

    const filterSearch = (searchQuery, queryParams) => {
        dispatch({
            type: 'SEARCH_MOVIES_REQUEST',
            payload: searchQuery,
        })
        axios(SEARCH_MOVIES_URL + queryParams).then(response => {
            if (response.data.results && response.data.results.length) {
                dispatch({
                    type: 'FILTER_MOVIES_SUCCESS',
                    payload: response.data.results,
                })
            } else {
                dispatch({
                    type: 'SEARCH_MOVIES_FAILURE',
                    error: response.data.Error,
                })
            }
        })
    }

    const { movies, errorMessage, loading, activePage, searchQuery } = state
    console.log('state', state)
    const defaultSelectedMovie = movies[0]
    return (
        <div className="App">
            <Header text="Movies" />
            <Search search={search} />
            <div className="row">
                <div className="cards left">
                    {loading && !errorMessage ? (
                        <span>
                            <img src={spinner} alt="" />
                        </span>
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
                <div className="cards right">
                    <Filter
                        searchQuery={searchQuery}
                        movie={defaultSelectedMovie}
                        filterSearch={filterSearch}
                    />
                </div>
            </div>

            {/* <Pagination
          activePage={activePage}
          itemsCountPerPage={10}
          totalItemsCount={20}
          pageRangeDisplayed={5}
          onChange={() => false}
        /> */}
        </div>
    )
}

export default App
