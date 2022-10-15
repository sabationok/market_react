import CreateMarkers from './CreateMarkers/CreateMarkers';
import css from './app.module.css';

export const App = () => {
  return (
    <div className={css.app}>
      <CreateMarkers />
    </div>
  );
};
