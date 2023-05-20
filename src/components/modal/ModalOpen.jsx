import React, { useState } from 'react';
import LetterModal from './LetterModal';

const ModalOpen = () => {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => {
    setIsOpen(true);
  };
  return (
    <div>
      <button onClick={openModal}>modal</button>
      {isOpen && <LetterModal setIsOpen={setIsOpen} />}
    </div>
  );
};

export default ModalOpen;
