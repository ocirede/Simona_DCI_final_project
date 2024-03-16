import { useState } from "react";
import { Search } from 'lucide-react';


export function SearchComponent({ onSearch }){
    const [searchUser, setSearchUser] = useState("")

    const handleChange = (e)=>{
        setSearchUser(e.target.value);
    }
    const handleSubmit = () => {
        onSearch(searchUser);
    }
    return(
        <div className="flex items-center border-b-2 border-gray-200 py-2">
            <input
                 type="text"
                 placeholder="Search by name or title..."
                 value={searchUser}
                 onChange={handleChange}
                 className="  border w-full text-gray-700 m-3 py-1 px-2 "/>
                
              <button
                 className=" bg-gray-300 hover:bg-gray-400 text-black font-bold py-2 px-4 rounded-l focus:outline-none focus:shadow-outline" onClick={handleSubmit}>  <Search size={20} />
              </button>

        </div>

    )
}