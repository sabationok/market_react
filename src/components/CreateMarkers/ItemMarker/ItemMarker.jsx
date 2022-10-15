import React from 'react';
// import PropTypes from 'prop-types';
import css from './itemMarker.module.css';

const ItemMarker = ({ top, left, link, itemId }) => {
  let styleOf = {
    top: top,
    left: left,
  };
  return (
    <div className={css.markerBox} style={styleOf}>
      <button className={css.markerBtn}></button>
      <div className={css.markerLinkBox}>
        <button className={css.markerLink} type="button"></button>
      </div>
    </div>
  );
};

ItemMarker.propTypes = {};

export default ItemMarker;
