import React, { useState, useEffect } from "react";
import Image from "./Image"

function Avatar() {
  const [character, setCharacter] = useState([]);

  useEffect(() => {
    const fetchCharacters = async () => {
      const response = await fetch("https://atla-api-production.up.railway.app/characters")
      const json = await response.json()
      setCharacter(json)
    }
    fetchCharacters()
  }, [])
  return (
    <>
      {!character ? (
        <h2>Loading...</h2>) : (
          <section>
            <div className="gallery">
              {character.map((character) => (
                <Image key={character.name} {...character} />
              ))}
            </div>
          </section>
        )}
    </>
  )
}

export default Avatar