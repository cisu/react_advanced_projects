import React, {useEffect} from 'react';

const Modal = ({modalContent, closeModal}) => {
  useEffect(() => {
    let modal = setTimeout(() => {
      closeModal();
    }, 3000);
    return () =>{
      clearTimeout(modal)
    }
  });

  return (
    <div className='modal'>
      <p>{modalContent}</p>
    </div>
  );
};

export default Modal;
