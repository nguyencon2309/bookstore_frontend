import { useEffect, useState } from "react";
import BookAPI from "../api/bookApi";

interface Book {
  _id: string;
  title: string;
  author: string;
  genre: string;
}

const Books = () => {
  
    const [loading,setLoading] = useState(true)
    const [error,setError] = useState("")
  useEffect(() => {
    const fetchBooks = async () => {
      
      try {
        const response = await BookAPI.getListBook({
          
        });
        console.log("API response:", response.data);
        
      } catch (err: any) {
        console.error(err);
        setError(err)
        
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);

  if (loading) return <p>Đang tải sách...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <div>
      
    </div>
  );
};

export default Books;
