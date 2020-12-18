import React from 'react';
import { Modal } from 'react-bootstrap';
import { types } from '../data/types';

import OptionTypeButton from '../components/OptionTypeButton';

const SelectType = ({ omit = '', show, handleSetType, handleClose }) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Body>
        <OptionTypeButton
          key="select-type-none-0"
          type="None"
          onClick={() => handleSetType('')}
        >
          None
        </OptionTypeButton>
        {types.map((t, i) => (
          <OptionTypeButton
            key={`select-type-${t}-${i}`}
            type={t}
            onClick={() => handleSetType(t)}
          >
            {t}
          </OptionTypeButton>
        ))}
      </Modal.Body>
    </Modal>
  );
};

export default SelectType;
