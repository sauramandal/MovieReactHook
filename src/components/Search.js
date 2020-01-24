import React, { useState } from 'react'

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
        resetInputField()
    }

    return (
        <form className="search">
            <input value={searchValue} onChange={handleSearch} type="text" />
            <input onClick={callSearchFunction} type="submit" value="SEARCH" />
        </form>
    )
}

export default Search
