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
        element={props.bendingElement}
        quote={props.quote}
        nationality={props.nationality}
        />
      </div>
  )
}

export default Image