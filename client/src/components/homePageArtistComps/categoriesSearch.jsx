import { useState } from "react";
import { SearchComponent } from "./searchComponent";
import FilteredUsersPage from "../filteredUsersPage/filteredUsersPage";

export function CategoriesSearch() {
  const [showCategories, setShowCategories] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null)
  const [searchQuery, setSearchQuery] = useState("")

  const userData = [
    { id: 1, name: 'tyhe', role: 'Singer', categories: ['music',"contemporary arts"], imageUrl: 'profile-pic.jpg' },
    { id: 2, name: 'fede', role: 'Actor', categories: ['performing arts'],  imageUrl: 'profile-pic.jpg' },
    { id: 3, name: 'kostas', role: 'Dancer', categories:[ 'dance'], imageUrl: 'profile-pic.jpg' },
    { id: 4, name: 'Issa', role: 'Painter', categories: ['painting'],  imageUrl: 'profile-pic.jpg' },
    { id: 5, name: 'Mary', role: 'Photographer', categories: ['performing arts'], imageUrl: 'profile-pic.jpg' },
    { id: 6, name: 'Jesus', role: 'Dj', categories: ['music'],  imageUrl: 'profile-pic.jpg' },
    { id: 7, name: 'Mohammad', role: 'Muisc composer', categories: ['music'], imageUrl: 'profile-pic.jpg' },
    { id: 8, name: 'Adam', role: 'Performer', categories: ['performing arts','contemporary arts'],  imageUrl: 'profile-pic.jpg' },
  
  ];

  const categories =["painting" , "drawing", "digital art", "sculpture", "performing arts",
  "music", "dance", "photography", "literary arts", "contemporary arts",
  "traditional arts", "crafts", "design", "other"]
 

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
      <div className="flex items-center justify-center p-4 border-b-2 bg-blue-100 cursor-pointer" onClick={() => setShowCategories(!showCategories)}>
        Categories / Search
      </div>
      {showCategories && (
        <div className="w-full p-4 bg-gray-100">
           <SearchComponent onSearch={handleSearch} />
           
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
             
          
          <div className="w-full p-4 mt-5 bg-gray-100">
            <h1 className="text-l font-bold text-center p-4">{selectedCategory}</h1>
          
            {(selectedCategory || searchQuery) && (
                   
                  <FilteredUsersPage userData={userData} selectedCategory={selectedCategory} searchQuery={searchQuery}  />
                )}
          </div>
            
        </div>
      )}
     
    </div>
      </>
    )
  }