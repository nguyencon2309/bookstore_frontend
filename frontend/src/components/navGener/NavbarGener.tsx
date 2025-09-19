import { Link } from "react-router-dom";
import {type Gener } from "../../type";
interface ListGener{
    listGener:Gener[]
}
export const NavbarGener:React.FC<ListGener> = ({listGener}) => {
    return (
        <div className="flex justify-between ">
            <Link to={``} key={-1} className="w-fit">Tất cả</Link>
            {listGener.map((gener,index)=>(
                <Link to={``} key={index} className="w-fit">{gener.catelogy}</Link>
            ))}
        </div>
    )
}