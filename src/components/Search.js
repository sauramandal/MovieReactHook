import React, { Fragment, useState, useRef } from 'react'

const Search = ({ search }) => {
    const inputRef = useRef()
    const [searchValue, setSearchValue] = useState('')

    const handleSearch = evt => {
        setSearchValue(evt.target.value)
    }

    const resetInputField = () => {
        setSearchValue('')
    }

    const callSearchFunction = evt => {
        evt.preventDefault()
        if (searchValue === '') {
            inputRef.current.focus()
            alert('Please enter a movie name to search')
            return
        }
        search(searchValue)
    }

    return (
        <Fragment>
            <form className="search-container">
                <input
                    id="search-bar"
                    ref={inputRef}
                    value={searchValue}
                    onChange={handleSearch}
                    type="text"
                    placeholder="Search movies, tv shows.."
                />
                <a href="#">
                    <img
                        className="search-icon"
                        src="http://www.endlessicons.com/wp-content/uploads/2012/12/search-icon.png"
                        onClick={callSearchFunction}
                    />
                </a>
            </form>
        </Fragment>
    )
}

export default Search
