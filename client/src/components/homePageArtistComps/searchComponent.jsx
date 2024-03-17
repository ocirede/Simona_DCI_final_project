import { useState } from "react";
import { Search } from 'lucide-react';


export function SearchComponent({ onSearch }){
    const [searchInput, setSearchInput] = useState("")

    const handleInputChange = (e) => {
        setSearchInput(e.target.value);
    }
    const handleSearchSubmit = () => {
        onSearch(searchInput)
    }
    return(
        <div className="flex items-center border-b-2 border-gray-200 py-2">
            <input
                 type="text"
                 placeholder="Search by name or title..."
                 value={searchInput}
                 onChange={handleInputChange}
                 className="  border w-full text-gray-700 m-3 py-1 px-2 "/>
                
              <button
                 onClick={handleSearchSubmit}
                 className=" bg-gray-300 hover:bg-gray-400 text-black font-bold py-2 px-4 rounded-l focus:outline-none focus:shadow-outline" >  <Search size={20} />
              </button>

        </div>

    )
}