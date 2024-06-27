import { Link, Outlet } from "react-router-dom";
import { getBooks } from "../data/data";
import { CURRENTTLINE, FOREGROUND } from "../helpers/colors";

import "./ComponentCss/Books.css"

const Books = () => {
    const books = getBooks();

    return (
        <div className="d-flex flex-column flex-md-row col-12">
            <nav className="col-12 col-md-5 ml-4 my-nav" style={{borderLeft: `solid 1px ${CURRENTTLINE}`,borderBottom: `solid 1px ${CURRENTTLINE}`, padding: "1rem"}}>
                <div className="d-flex search-box-container">
                    <input type="text" className="form-control mb-4 search-box" placeholder="جستجوی کتاب" />
                    <i className="fas fa-search search-icon"/>
                </div>
                <div className="book-name-container">
                {
                    books.map((book) => (
                        <Link className="d-block book-name" to={`/books/${book.number}`} key={book.number} >
                            {book.name}
                        </Link>
                    ))
                }
                </div>
            </nav>
            <Outlet/>
        </div>
    )
}

export default Books;