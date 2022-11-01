import { useState } from "react"
import { character } from "./Avatar"


function Searchbar({setSearchTerm}) {
  // const [searchTerm, setSearchTerm] = useState("")
  return (
    <input type="text" placeholder="Search by name" onChange={(event) => {
      setSearchTerm(event.target.value)
    }} />
  )
}
  

export default Searchbar

// {
//   if (searchTerm = "") {
//     return value
//   } else if (value.name.toLowerCase().includes(searchTerm.toLowerCase())) {
//       return (
//         <p key={character}>{value.name}</p>
//       )
//   }
// })