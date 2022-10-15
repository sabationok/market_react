import React, { useState } from 'react';
import { nanoid } from 'nanoid';
// import PropTypes from 'prop-types';
import RangeForm from './RageForm/RangeForm';
import css from './itemMarkerRange.module.css';

const ItemMarkerRange = ({ horId, vertId, elId = null }) => {
  const [itemName] = useState(nanoid(8));
  const [itemId] = useState(nanoid(5));

  return (
    <li className={css.itemMarkerRanger} id={itemName}>
      <p>Item name {itemName}</p>
      <RangeForm defaultId={itemId} />
    </li>
  );
};

ItemMarkerRange.propTypes = {};

export default ItemMarkerRange;
