import React, { Fragment, useState } from 'react'

const Search = ({ search }) => {
    const [searchValue, setSearchValue] = useState('')

    const handleSearch = evt => {
        setSearchValue(evt.target.value)
    }

    const resetInputField = () => {
        setSearchValue('')
    }

    const callSearchFunction = evt => {
        evt.preventDefault()
        search(searchValue)
    }

    return (
        <Fragment>
            <form className="search-container">
                <input
                    id="search-bar"
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
                {/* <input
                    onClick={callSearchFunction}
                    type="submit"
                    value="SEARCH"
                /> */}
            </form>
        </Fragment>
    )
}

export default Search
