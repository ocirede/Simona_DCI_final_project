import CardElement from "../cards/CardElement";
import { UserContext } from "../../context/userContext";
import { useContext } from "react";


export default function FilteredUsersPage({  selectedCategory, searchQuery  }) {

  const { users } = useContext(UserContext)

    const filteredUsers = users?.filter(user => {
      const name = `${user.address?.firstname || ""} ${user.address?.lastname || ""}`.trim()
      const role = user.role || "";
        const matchesCategory = selectedCategory ? user.categories.includes(selectedCategory) : true;
        const matchesSearch = !searchQuery || name.toLowerCase().includes(searchQuery.toLowerCase()) || role.toLowerCase().includes(searchQuery.toLowerCase());

        return matchesCategory && matchesSearch;
    });
    return (
  <>
         
    <div className="flex flex-wrap justify-center gap-4">
      {filteredUsers.length > 0 ? (
        filteredUsers.map((user ,index)=> (
          <CardElement key={index} {...user} />
        ))
      ) : (
        <div>No users found for this category.</div>
      )}
    </div>
 
  </>
    
  )
}
