import { useState } from "react"

function Searchbar({setSearchTerm}) {
  return (
    <input type="text" placeholder="Search by name" onChange={(event) => {
      setSearchTerm(event.target.value)
    }} />
  )
}
  

export default Searchbar


