import React, { useState } from 'react';
// import { nanoid } from 'nanoid';
import Buttons from './Buttons';
// import PropTypes from 'prop-types';
import css from './rangeForm.module.css';

const RangeForm = ({ defaultId = null }) => {
  const [itemId] = useState(defaultId);
  const [horizontal, setHorizontal] = useState(20);
  const [vertical, setVertical] = useState(20);
  const [accept, setAccept] = useState(false);
  let ranges = {
    horizontal: setHorizontal,
    vertical: setVertical,
  };
  function onRange(e) {
    let { target } = e;
    ranges[target.name](target.value);
  }
  function onAccept(ev) {
    console.log(`Item ${itemId} accepted`);
    setAccept(!accept);
  }
  function onEdit(ev){
    console.log(`Item ${itemId} available for editting`);
    setAccept(!accept);
  }
  function onDelete(ev) {
    console.log(`Item ${itemId} deleted`);
  }
  return (
    <div className={css.rangeForm}>
      <span className={css.title}>Horizontal position</span>
      <input
        type="range"
        name="horizontal"
        min="20"
        max="80"
        value={horizontal}
        onChange={onRange}
        disabled={accept}
      />

      <span className={css.title}>Vertical position</span>
      <input
        type="range"
        name="vertical"
        min="20"
        max="80"
        value={vertical}
        onChange={onRange}
        disabled={accept}
      />

      <Buttons accept={accept} onAccept={onAccept} onDelete={onDelete} onEdit={onEdit} />
    </div>
  );
};

RangeForm.propTypes = {};

export default RangeForm;
