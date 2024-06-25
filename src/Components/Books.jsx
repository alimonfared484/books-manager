import { Link } from "react-router-dom";
import { getBooks } from "../data/data";
import { CURRENTTLINE } from "../helpers/colors";

const Books = () => {
    const books = getBooks();

    return (
        <div className="d-flex col-5">
            <nav className="col-12" style={{borderLeft: `solid 1px ${CURRENTTLINE}`, padding: "1rem"}}>
                <input type="text" className="form-control mb-4" placeholder="جستجوی کتاب" />
                {
                    books.map((book) => (
                        <Link className="d-block" to={`/books/${book.number}`} key={book.number} >
                            {book.name}
                        </Link>
                    ))
                }
            </nav>
        </div>
    )
}

export default Books;