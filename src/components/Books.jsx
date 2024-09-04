import { useState } from "react"

import { books as bookData } from "../constants/mockData"
import BookCard from "./BookCard"
import SideCard from "./SideCard"
import SearchBox from "./SearchBox"

import styled from './Books.module.css'

const Books = () => {
    const [liked, setLiked] = useState([])
    const [books, setBooks] = useState(bookData)
    const [search, setSearch] = useState("")

    const handleLikeList = (book, status) => {
        if (status) {
            const newLikeList = liked.filter(i => i.id !== book.id)
            setLiked(newLikeList)
        } else {
            setLiked(liked => [...liked, book])
        }
    }

    const searchHandler = () => {
        if (search) {
            const newBook = bookData.filter(x => x.title.toLowerCase().includes(search) )
            setBooks(newBook)
        } else {
            setBooks(bookData)
        }
    }
    return (
        <>
            <SearchBox search={search} setSearch={setSearch} searchHandler={searchHandler} />
            <div className={styled.container}>
                <div className={styled.cards}>
                    {books.map(x => {
                        return (
                            <BookCard key={x.id} data={x} handleLikeList={handleLikeList}  />
                        )
                    })}
                </div>
                {
                    !!liked.length &&
                    <div className={styled.favorite}>
                        <h4>Favorites</h4>
                        {liked.map(x => {
                            return (
                                <SideCard key={x.id} data={x} />
                            )
                        })}</div>
                }
            </div>
        </>
    )
}

export default Books
