import React, { useState } from 'react';
import RequestModal from './RequestModal';

const ModalOpen = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    isOpen(true);
  };
  return ()
};

export default ModalOpen;
