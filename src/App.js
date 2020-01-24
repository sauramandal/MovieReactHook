import React, {useReducer, useEffect} from 'react';
import {initialState, reducer} from './store';
import Header from "./components/Header";
import Search from "./components/Search";
import axios from "axios";
import spinner from "./assets/ajax-loader.gif";
import logo from './logo.svg';
import './App.css';

const MOVIES_API_URL = "";

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    axios.get(MOVIES_API_URL).then(response => {
      dispatch({
        type: "SEARCH_MOVIES_SUCCESS",
        payload: response.data.Search
      })
    })
  },[]);

  const refreshPage = () => {
    window.location.reload();
  };

  const search = searchString => {
    dispatch({
      type: "SEARCH_MOVIES_REQUEST"
    });
    axios(`https://www.omdbapi.com/?s=${searchString}&apikey=4a3b711b`).then(response => {
      if(response.data.Response === "true") {
        dispatch({
          type: "SEARCH_MOVIES_SUCCESS",
          payload: response.data.Search
        });
      } else {
        dispatch({
          type: "SEARCH_MOVIES_FAILURE",
          error: response.data.Error
        })
      }
    })
  }

  const {movies, errorMessage, loading} = state;
  return (
    <div className="App">
      <div className="m-container">
        <Header text="Movie List header" />
        <Search search={search} />
        <div className="">
          <h4>Favourite Movies</h4>
          <div className="movies">
            {
              loading && !errorMessage ? (
                <img className="spinner" src={spinner} alt="Loading spinner" />
              ) : errorMessage ? (
                <div className="errorMessage">{errorMessage}</div>
              ) : (
                movies.map((movie, index) => (
                  <Movie key={`${index}-${movie.Title}`} movie={movie} />
                ))
              )
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default App;
