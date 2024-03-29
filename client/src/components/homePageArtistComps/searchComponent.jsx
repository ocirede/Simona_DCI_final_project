import { useState } from "react";
import { Search } from 'lucide-react';


export function SearchComponent({ onSearch,clearFilter  }){
    const [searchInput, setSearchInput] = useState("")

    const handleInputChange = (e) => {
        setSearchInput(e.target.value);
    }
    const handleSearchSubmit = () => {
        onSearch(searchInput)
        setSearchInput("")
    }
    return(
        <div className="flex items-center border-b-2 bg-retroBlue  border-gray-200 pl-4 pr-4">
              <button className="bg-white rounded-2xl hover:bg-gray-400 text-gray-800 text-sm font-bold py-1 px-3 border border-black " onClick={clearFilter}>
                Clear
              </button>
            <input
                 type="text"
                 placeholder="Search by name or title..."
                 value={searchInput}
                 onChange={handleInputChange}
                 onKeyDown={(e) => e.key === 'Enter' && handleSearchSubmit()}
                 className="border border-borderBlue focus:outline-none rounded-2xl w-full placeholder-white placeholder-xs bg-lightBlue text-white m-3 py-1 px-2 "/>
                
              <button
                 onClick={handleSearchSubmit}
                 className=" bg-white rounded-2xl hover:bg-gray-400 text-black font-bold py-1 px-4  border border-black focus:outline-none focus:shadow-outline" >  <Search size={20} />
              </button>

        </div>

    )
}