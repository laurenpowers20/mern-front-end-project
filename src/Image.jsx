import { useState } from "react"
import Modal from "./Modal"

function Image(props) {
  const [showModal, setShowModal] = useState(false);

  return (  
      <div className="image">
      <img src={props.image} className="gallery-pic" alt="Avatar Character" onClick={() => setShowModal(true)} />
      <Modal
          onClose={() => setShowModal(false)}
        show={showModal}
        name={props.name}
        quote={props.quote}
        fightingStyle={props.fightingStyle}
        />
      </div>
  )
}

export default Image