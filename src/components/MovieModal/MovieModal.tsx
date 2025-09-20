import './MovieModal.module.css';
import css from './MovieModal.module.css';

interface MovieModalProps {
  name: string;
}

const MovieModal = (props: MovieModalProps) => {
  return (
    <>
      <div className={css.backdrop} role="dialog" aria-modal="true">
        <div className={css.modal}>
          <button className={css.closeButton} aria-label="Close modal">
            &times;
          </button>
          <img
            src="https://image.tmdb.org/t/p/original/backdrop_path"
            alt="movie_title"
            className={css.image}
          />
          <div className={css.content}>
            <h2>movie_title</h2>
            <p>movie_overview</p>
            <p>
              <strong>Release Date:</strong> movie_release_date
            </p>
            <p>
              <strong>Rating:</strong> movie_vote_average/10
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieModal;
