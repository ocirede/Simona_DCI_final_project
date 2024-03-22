import { useContext, useState } from "react";
import { SearchComponent } from "./searchComponent";
import FilteredUsersPage from "../filteredUsersPage/filteredUsersPage";
import { UserContext } from "../../context/userContext";
import { categories } from "../../pages/RegisterUserCategoryForm";

export function CategoriesSearch() {
  const [showCategories, setShowCategories] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null)
  const [searchQuery, setSearchQuery] = useState("")
  const {  user } = useContext(UserContext)
  const { users } = useContext(UserContext)

 

      const handleCategoryClick = (category)=>{
        setSelectedCategory(category)
       
      }
      const clearFilter = () => {
        setSelectedCategory(null)
        setSearchQuery("")
      }
      const handleSearch = (query) => {
        setSearchQuery(query);

    }
  
       return(
      <>
     
        <div>
      <div className="flex items-center justify-center p-4 border-b-2 bg-blue-100 cursor-pointer w-4/5 min-h-[200px] mx-auto rounded-lg shadow-lg" onClick={() => setShowCategories(!showCategories)}>
        Categories / Search
      </div>
      {showCategories && (
        <div className="w-full p-4 bg-gray-100">
           <SearchComponent onSearch={handleSearch} />

           {searchQuery && (
                   <div className="w-full p-4 mt-5 bg-gray-100">
                   <h1 className="text-l font-bold text-center p-4">Search Results</h1>
                  <FilteredUsersPage  users={users} searchQuery={searchQuery}  />
                  </div>
                )}
           
          <div className="grid grid-cols-2 gap-4">
            {categories.map((category, index) => (
              <button key={index} className="bg-blue-500  hover:bg-blue-700 text-white font-bold py-2 px-4 rounded "onClick={() => handleCategoryClick(category)}>
                {category}
              </button>
            ))}
          </div>
          <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-1 px-3 mt-5 rounded-r" onClick={clearFilter}>
                Clear
              </button>
             
            {selectedCategory  && (
                   <div className="w-full p-4 mt-5 bg-gray-100">
                   <h1 className="text-l font-bold text-center p-4">{selectedCategory}</h1>
                  <FilteredUsersPage  users={users} selectedCategory={selectedCategory}   />
                  </div>
                )}
          
            
        </div>
      )}
     
    </div>
      </>
    )
  }