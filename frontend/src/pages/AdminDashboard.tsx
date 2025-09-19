import { generApi } from "../api/generApi";
import { authorApi } from "../api/authorApi";
import { useState } from "react";

export const AdminDashboard = () => {
    const [name,setName] = useState("");
    const [catelogy,setCatelogy] = useState("");
    const handleAddAuthor = async() => {
        
            try{
                
                const add = await authorApi.addAuthor(name);
                console.log(add.data)
                setName("");
            }
            catch(err:any){
                console.log(err);
            }
            finally{

            }
        
    }
    const handleAddGener = async() => {
        
            try{
                const add = await generApi.addGener(catelogy);
                console.log(add.data)
                setCatelogy("")
            }
            catch(err:any){
                console.log(err);
            }
            finally{

            }
        
    }
    
    return (
        <>
        <div>
            <h2>
                thêm tác giả
            </h2>
            <input type="text" value={name} onChange={(e)=>setName(e.target.value)} />
            <button onClick={handleAddAuthor}>add</button>
        </div>
        <div>
            <h2>
                thêm thể loại
            </h2>
            <input type="text" value={catelogy} onChange={(e)=>setCatelogy(e.target.value)} />
            <button onClick={handleAddGener}>add</button>
        </div>
        <div>
            <h2>
                thêm sách
            </h2>
            <input type="text" value={catelogy} onChange={(e)=>setCatelogy(e.target.value)} />
            <input type="text" value={catelogy} onChange={(e)=>setCatelogy(e.target.value)} />
            <input type="text" value={catelogy} onChange={(e)=>setCatelogy(e.target.value)} />
            <input type="text" value={catelogy} onChange={(e)=>setCatelogy(e.target.value)} />
            <input type="text" value={catelogy} onChange={(e)=>setCatelogy(e.target.value)} />
            <input type="text" value={catelogy} onChange={(e)=>setCatelogy(e.target.value)} />
            <button onClick={handleAddGener}>add</button>
        </div>
        </>
    )
}