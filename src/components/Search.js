import React, {useState} from "react";

const Search = ({ search }) => {
    const [searchValue, setSearchValue] = useState("");

    const handleSearch = e => {
        setSearchValue(e.target.value);
    };

    const resetInputField = () => {
        setSearchValue("");
    };

    const callSearchFunction = e => {
        e.preventDefault();
        search(searchValue);
        resetInputField();
    };
    
    return (
        <form className="search">
            <input value={searchValue}
                onChange={handleSearch}
                type="text"
            />
            <input onClick={callSearchFunction} type="submit" value="SEARCH" />
        </form>
    )
}

export default Search;