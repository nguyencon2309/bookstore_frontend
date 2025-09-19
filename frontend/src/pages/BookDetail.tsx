import { Link, useParams } from "react-router-dom";
import BookAPI from "../api/bookApi";
import type { Book } from "../type";
import { use, useEffect, useState } from "react";
export const BookDetail = () => {
    const [loading,setLoading] = useState(false);
    const [error,setError] = useState("")
    const id = useParams();
    const [detailBook,setDetailBook] = useState<Book|null>()
    useEffect(()=>{
        const fetch = async()=>{
            try{
            setLoading(true);
            const res = await BookAPI.getListBook({})
            // if(res.data){
            //     setDetailBook(res.data);
            // }
        }

        catch(err:any){
            setError(err)
        }
        finally{
            setLoading(false);
        }
        }
        fetch();
        
    },[id])
    if(error) return <p className="color-red">{error}</p>
    if(loading) return <p>Loading.....</p>
    return (
        <div>
            
            <div className="mb-2 mt-2 rounded p-1 bg-white">
                <p><Link to={`/`}>Trang chủ</Link> / <Link to={`/The-loai/:temp`}>Tiểu thuyết</Link> / Tác phẩm</p>
            </div>
            <div className="flex bg-white justify-around items-center mb-2 rounded">
                <img src="https://res.cloudinary.com/dpgcpqxju/image/upload/v1757475194/z4dmripdasosb7mrqqmi.png" alt="" className="w-400 h-800 object-contain"/>
                <div className="w-550 h-300 text-left">
                    <h3>Title</h3>
                    <p>Tác giả:</p>
                    <p>Nhà xuất bản</p>
                    <p>Price</p>
                    <p>số lượng</p>
                    <button>Thêm vào giỏ hàng</button>
                </div>
            </div>
            <div className=" mb-2 rounded p-4 text-left bg-white">
                <h4 className="mb-2">Mô tả</h4>
                <p>hàm! Tôi Là Ma Cà Rồng !? được cập nhật nhanh và đầy đủ nhất tại TruyenQQ. Bạn đọc đừng quên để lại bình luận và chia sẻ, ủng hộ TruyenQQ ra các chương mới nhất của truyện Thế Giới Siêu Phàm! Tôi Là Ma Cà Rồng !?.</p>
            </div>
            <div className="mb-2 rounded p-4 text-left bg-white">
                <p>Thông tin chi tiết</p>
                <div className="grid grid-cols-10 g-y-1">
                    <div className="col-span-3">Tác giả</div><div className="col-span-7">Nguyễn Nhật ánh divoem</div>
                    <div className="col-span-3">Tác giả</div><div className="col-span-7">Nguyễn Nhật ánh divoem</div>
                    <div className="col-span-3">Tác giả</div><div className="col-span-7">Nguyễn Nhật ánh divoem</div>
                    <div className="col-span-3">Tác giả</div><div className="col-span-7">Nguyễn Nhật ánh divoem</div>
                </div>
            </div>
        </div>
    )
}