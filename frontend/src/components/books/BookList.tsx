import { type BasicBook } from "../../type";
import { BookCard } from "./BookCard";
interface listBasicBook{
    list:BasicBook[]
}//nên nhớ
export const BookList:React.FC<listBasicBook> = ({list}) => {

    return (
        <div className="grid grid-cols-4 gap-4">
            {list.map(book=>

                <BookCard key={book._id} _id={book._id} image={book.image} title={book.title} price={book.price}    />
            )}
        </div>
    )
}