// Timothy Olofson
// Week 5 React Rocketship(Vite)
// Frontend Simplified
// January 20th, 2025


import './Modal.css';


function Modal({ title, cancel, cancelModal, confirm, confirmModal }){


  return (

    <>

      <div className="modal">
        <p className="modal__title">{(title)}</p>
        <div className="modal__buttons">
          <button onClick={cancelModal}  className="btn btn__cancel">{(cancel)}</button>
          <button onClick={confirmModal} className="btn">{(confirm)}</button>
        </div>
      </div>
      <div className="backdrop" />
    </>
  );
}
export default Modal;