import { useContext, useState } from "react";
import { SearchComponent } from "./searchComponent";
import FilteredUsersPage from "../filteredUsersPage/filteredUsersPage";
import { UserContext } from "../../context/userContext";
import { categories } from "../../pages/RegisterUserCategoryForm";

export function CategoriesSearch() {
  const [showCategories, setShowCategories] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null)
  const [searchQuery, setSearchQuery] = useState("")
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
     
        
      <div className="mr-3 ml-3 flex items-center justify-center p-4  bg-retroBlue cursor-pointer  min-h-[200px] mx-auto rounded-2xl shadow-lg border border-b-4 border-black md:w-1/4 "  onClick={() => setShowCategories(!showCategories)}>
        Categories / Search
      </div>
      {showCategories && (
        <div>
        
       
        <div className="w-full bg-retroBlue  pt-4 rounded-tl-2xl rounded-tr-2xl border border-l-black border-t-black border-r-black   ">
          <h1 className="uppercase text-center text-xl text-white">Searching hub</h1>
           <SearchComponent clearFilter={clearFilter} onSearch={handleSearch} />
           </div>
           {searchQuery && (
                   <div className="w-full p-4 mt-5 bg-white">
                   <h1 className="text-l font-bold text-center  p-4">Search Results</h1>
                  <FilteredUsersPage  users={users} searchQuery={searchQuery}  />
                  </div>
                )}
          


           <div className="grid grid-cols-2 gap-6 p-4 bg-white border border-b-black border-l-black border-r-black rounded-bl-2xl rounded-br-2xl shadow-md  ">
            {categories.map((category, index) => (
              <button key={index} className="bg-retroRed  text-white py-2 px-4  rounded-full shadow"onClick={() => handleCategoryClick(category)}>
                {category}
              </button>
            ))}
          </div> 
       
             
            {selectedCategory  && (
                   <div className="w-full p-4 mt-5 bg-white">
                   <h1 className="text-l font-bold text-center p-4">{selectedCategory}</h1>
                  <FilteredUsersPage  users={users} selectedCategory={selectedCategory}   />
                  </div>
                )}
          
            
        
        </div>
      )}
     
    
      </>
    )
  }