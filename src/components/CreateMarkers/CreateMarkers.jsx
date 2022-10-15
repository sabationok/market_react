import React from 'react';
// import PropTypes from 'prop-types';
import ItemMarker from './ItemMarker/ItemMarker';
import css from './createMarkers.module.css';
import ItemMarkerRange from './ItemMarkerRange/ItemMarkerRange';
const CreateMarkers = props => {
  let classCreateMarkers = [css.createMarkers, '--overlay', '--center'].join(
    ' '
  );

  return (
    <div className={classCreateMarkers}>
      <div className={css.imgBox}>
        <img
          className={css.mainImg}
          src="https://raw.githubusercontent.com/goodcat46/images/main/brand_cards/suknia-synia/suknia-synia_1.webp"
          alt=""
        />
        <ul className={css.lookList}>
          <ItemMarker top="50%" left="10%" />
          <ItemMarker top="60%" left="50%" />
          <ItemMarker top="70%" left="20%" />
          <ItemMarker top="80%" left="60%" />
          <ItemMarker top="40%" left="40%" />
          <ItemMarker top="20%" left="50%" />
        </ul>
      </div>
      <form
        className={css.formCreateMarkers}
        onSubmit={ev => {
          ev.preventDefault();
          console.log('Форму відправлено');
        }}
      >
        <ul className={css.rangeMarkersList}>
          <ItemMarkerRange />
          <ItemMarkerRange />
          <ItemMarkerRange />
          <ItemMarkerRange />
          <ItemMarkerRange />
          <ItemMarkerRange />
        </ul>
        <div className={css.buttons}>
          <button className={css.button} type="submit">
            Accept All
          </button>
          <button className={css.button} type="reset">
            Decline All
          </button>
        </div>
      </form>
    </div>
  );
};

CreateMarkers.propTypes = {};

export default CreateMarkers;
//*'`${} --overlay --center`'
