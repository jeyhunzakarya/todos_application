import React, {useState} from 'react'
import Modal from "react-modal";
import AddTodo from './AddTodo';
const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      backgroundColor: "white",
      width: 400,
    },
  };
function NewTodoModal() {
    const [modalOpen, setModalOpen] = useState(false);
    return (
        <div>
          <button onClick={setModalOpen}>new todo</button>
          <Modal
            isOpen={modalOpen}
            onRequestClose={() => setModalOpen(false)}
            style={customStyles}
            ariaHideApp={false}
          >
            <AddTodo/>
            <button onClick={() => setModalOpen(false)}>Close Modal</button>
          </Modal>
        </div>
      );
}

export default NewTodoModal