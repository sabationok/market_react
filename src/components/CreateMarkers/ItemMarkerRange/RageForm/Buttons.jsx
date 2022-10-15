import React from 'react';
// import PropTypes from 'prop-types';
import css from './rangeForm.module.css';

const Buttons = ({ accept, onAccept, onDelete, onEdit }) => {
  let classAcceptBtn = !accept ? css.active : css.notActive;
  let classEditBtn = accept ? css.active : css.notActive;
  return (
    <div className={css.buttons}>
      <button
        className={[css.button, classAcceptBtn].join(' ')}
        type="button"
        onClick={ev => onAccept(ev)}
      >
        {!accept ? 'Accept' : 'Accepted'}
      </button>
      <button
        className={[css.button, classEditBtn].join(' ')}
        type="button"
        onClick={ev => onEdit(ev)}
      >
        Edit
      </button>
      <button
        className={[css.button, css.active].join(' ')}
        type="button"
        onClick={ev => onDelete(ev)}
      >
        Delete
      </button>
    </div>
  );
};

Buttons.propTypes = {};

export default Buttons;
