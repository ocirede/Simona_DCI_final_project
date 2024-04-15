import CardElement from "../cards/CardElement";
import { UserContext } from "../../context/userContext";
import { useContext } from "react";
import MotionSlider from "../motionSlider";
import styled from "styled-components";

export default function FilteredUsersPage({ selectedCategory, searchQuery }) {
  const { users } = useContext(UserContext)

    const filteredUsers = users?.filter(user => {
      const name = `${user.address?.firstname || ""} ${user.address?.lastname || ""}`.trim()
      const role = user.role || "";

        const matchesCategory = selectedCategory ? user.categories.includes(selectedCategory) : true;
        const matchesSearch = !searchQuery || name.toLowerCase().includes(searchQuery.toLowerCase()) || role.toLowerCase().includes(searchQuery.toLowerCase());

        return matchesCategory && matchesSearch;
    });

    const Container = styled.div`
    max-width: 700px; 
    margin: 0 auto; 
    @media (max-width: 640px) {
        max-width: 90%; 
    }
    `;

    return (
  <> 
    <Container>  
    <div className="p-4">
      <MotionSlider>
      {filteredUsers.length > 0 ? (
        filteredUsers.map((user ,index)=> (
          <CardElement key={index} {...user} />
        ))
      ) : (
        <div>No users found for this category.</div>
      )}
      </MotionSlider>
    </div>
    </Container> 
  </>   
  )
}
