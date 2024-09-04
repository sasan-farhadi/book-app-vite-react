import { IoSearchSharp } from "react-icons/io5"

import styled from "./SearchBox.module.css"

const SearchBox = ({ search, setSearch, searchHandler }) => {
    return (
        <div className={styled.search}>
            <input type="text" placeholder="Search Title ..." value={search} onChange={e => setSearch(e.target.value.toLowerCase().trim())} />
            <button onClick={searchHandler}><IoSearchSharp /></button>
        </div>
    )
}

export default SearchBox
