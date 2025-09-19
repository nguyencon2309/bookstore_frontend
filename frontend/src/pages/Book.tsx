
import { useEffect, useState } from "react";
import BookAPI from "../api/bookApi";
import { BookList } from "../components/books/BookList";

import { Link } from "react-router-dom";
import { NavbarGener } from "../components/navGener/NavbarGener";
import type { BasicBook } from "../type";
import { BookSkeleton } from "../components/books/BookSkeleton";

import { type Gener } from "../type";
import { generApi } from "../api/generApi";
const Books: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [list, setList] = useState<BasicBook[]>([]);
  const [listGener,setListGener] = useState<Gener[]>([])

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const res = await BookAPI.getListBook({});
        if (res.data?.list) {
          const res_map = res.data.list.map((li: { image: any; title: any; price: any; _id: any; })=>({image:li.image,title:li.title,price:li.price,_id:li._id}))//nên nhớ
          setList(res_map);
        }
      } catch (err: any) {
        console.error(err);
        setError(err.message || "Có lỗi xảy ra khi tải sách");
      } finally {
        setLoading(false);
      }
    };
    fetchBooks();
    const fetchGener = async()=>{
      try{
        const res = await generApi.getList();
        if(res.data?.list)
          setListGener(res.data.list)
      }
      catch(err:any)
      {
        console.log(err)
      }
      finally{

      }
    }
    fetchGener();
  }, []);
  

  if (loading) return <div className="grid grid-4-cols gap-4">{[...Array(4)].map((_,i)=><BookSkeleton key={i}/>)}</div>
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <div>
      
      {/* // div thể loại*/}
      <NavbarGener listGener={listGener}/>
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Truyện tranh</h1>
      <BookList list={list}/>
      {/* // Truyện tranh */}
      <h1 className="text-xl font-bold mb-4">Tiểu thuyết</h1>
      <BookList list={list}/>
      
    </div>
    </div>
  );
};

export default Books;

