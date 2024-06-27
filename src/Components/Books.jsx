import {
  NavLink,
  Outlet,
  useSearchParams,
  useLocation,
} from "react-router-dom";
import { getBooks } from "../data/data";
import { CURRENTTLINE, CYAN, FOREGROUND, PURPLE } from "../helpers/colors";

import "./ComponentCss/Books.css";

const Books = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const books = getBooks();

  return (
    <div className="d-flex flex-column flex-md-row col-12">
      <nav
        className="col-12 col-md-5 ml-4 my-nav"
        style={{
          borderLeft: `solid 1px ${CURRENTTLINE}`,
          borderBottom: `solid 1px ${CURRENTTLINE}`,
          padding: "1rem",
        }}
      >
        <div className="d-flex search-box-container">
          <input
            type="text"
            value={searchParams.get("filter") || ""}
            onChange={(event) => {
              let filter = event.target.value;
              if (filter) {
                setSearchParams({ filter });
              } else {
                setSearchParams({});
              }
            }}
            className="form-control mb-4 search-box"
            placeholder="جستجوی کتاب"
          />
          <i className="fas fa-search search-icon" />
        </div>
        <div className="book-name-container">
          {books
            .filter((book) => {
              let filter = searchParams.get("filter");
              if (!filter) return true;
              let name = book.name.toLowerCase();
              return name.startsWith(filter.toLowerCase());
            })
            .map((book) => (
              <NavLink
                className="d-block book-name"
                style={({ isActive }) => {
                  return {
                    color: isActive ? CYAN : FOREGROUND,
                    borderColor: isActive ? PURPLE : FOREGROUND,
                  };
                }}
                to={`/books/${book.number}${location.search}`}
                key={book.number}
              >
                {book.name}
              </NavLink>
            ))}
        </div>
      </nav>
      <Outlet />
    </div>
  );
};

export default Books;
