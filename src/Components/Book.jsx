import { useParams } from "react-router-dom";
import {getBook} from "../data/data"

import "./ComponentCss/Book.css"
import { COMMENT, FOREGROUND, GREEN, ORANGE, PURPLE, RED } from "../helpers/colors";

const Book = () => {
    const params = useParams();
    const book = getBook(parseInt(params.bookId))

    if(book) {
        return (
            <div className="d-flex justify-content-center w-100">
                <div className="my-card">
                        <img className="image-card" src={`${book.img}`} alt="" />
                        <div className="my-body-card">
                            <p className="text-book">{book.name}</p>
                                <div className="info-book">
                                    <span className="key-info">شماره کتاب :</span>
                                    <span className="value-info" style={{color: RED}}>{book.number}</span>
                                </div>
                                <div className="info-book">
                                    <span className="key-info">تاریخ انتشار :</span>
                                    <span className="value-info" style={{color: COMMENT}}>{book.due}</span>
                                </div>
                                <div className="info-book">
                                    <span className="key-info"> تعداد دانلود :</span>
                                    <span className="value-info" style={{color: ORANGE}}>{book.download}</span>
                                </div>
                                <div className="info-book">
                                    <span className="key-info"> قیمت کتاب :</span>
                                    <span className="value-info" style={{color: GREEN}}>{book.amount}</span>
                                </div>
                                <button className="btn mt-2" style={{backgroundColor: PURPLE, color: FOREGROUND}}>افزودن به سبد خرید <i class="fa-solid fa-cart-shopping"></i></button>
                            </div>
                        </div>
                    </div>
    
        )
    }else {
        return (
            <div>
                <h2 style={{color: GREEN}}>کتاب مورد نظر یافت نشد</h2>
            </div>
        )
    }
}

export default Book;