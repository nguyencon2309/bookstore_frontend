import { type BasicBook } from "../../type";
import { useNavigate } from "react-router-dom";
export const BookCard:React.FC<BasicBook> = ({
    image,
    title,
    price,
    _id
}) => {
    const navigate = useNavigate()
    const handleClick = () => {
        console.log(_id)
        navigate(`/book/${_id}`);
    }
    return (
        
            <div className="border rounded p-3 shadow " role="button" onClick={handleClick}>
                <img src={image} alt={title} className="w-full h-40 bg-gray-200 mb-2"/>
                <p >{title}</p>
                <p >Giá : {price.toLocaleString()} VNĐ</p>
            </div>
        
    )
}