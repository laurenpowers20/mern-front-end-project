import { useState } from "react"
import Modal from "./Modal"

function Image(props) {
  const [showModal, setShowModal] = useState(false);

  return (  
      <div className="image">
      <img src={props.image} className="gallery-pic" alt="Avatar Character" />
      <h3>{props.name}</h3>
      <h4>{props.nationality}</h4>
      <Modal
          onClose={() => setShowModal(false)}
          show={showModal}
          quote={props.quote}
          fightingStyle={props.fightingStyle}
        />
      </div>
  )
}

export default Image