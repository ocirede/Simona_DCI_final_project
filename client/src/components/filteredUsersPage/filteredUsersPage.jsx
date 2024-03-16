import CardElement from "./CardElement";
import { useParams } from 'react-router-dom'


const categories =["painting" , "drawing", "digital art", "sculpture", "performing arts",
"music", "dance", "photography", "literary arts", "contemporary arts",
"traditional arts", "crafts", "design", "other"]

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

export default function FilteredUsersPage({ userData, selectedCategory }) {
    const { categoryName } = useParams()
    const filteredUsers = userData.filter(user=>user.categories.includes(selectedCategory))
   
  return (
  <>
         
    <div className="flex flex-wrap justify-center gap-4">
      {filteredUsers.length > 0 ? (
        filteredUsers.map(user => (
          <CardElement key={user.id} name={user.name} role={user.role} categories={user.categories} imageUrl={user.imageUrl} />
        ))
      ) : (
        <div>No users found for this category.</div>
      )}
    </div>
 
  </>
    
  )
}
