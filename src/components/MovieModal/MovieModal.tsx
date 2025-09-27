import { createPortal } from 'react-dom';
import type { Movie } from '../../types/movie';
import './MovieModal.module.css';
import css from './MovieModal.module.css';

interface MovieModalProps {
  onClose: (event: React.MouseEvent<HTMLDivElement> | React.MouseEvent<HTMLButtonElement>) => void;
  movie: Movie;
}

const MovieModal = ({ movie, onClose }: MovieModalProps) => {
  const { title, overview, release_date, vote_average, backdrop_path } = movie;

  return createPortal(
    <>
      <div onClick={onClose} className={css.backdrop} role="dialog" aria-modal="true">
        <div className={css.modal}>
          <button onClick={onClose} className={css.closeButton} aria-label="Close modal">
            &times;
          </button>
          <img
            src={`https://image.tmdb.org/t/p/original/${backdrop_path}`}
            alt={title}
            className={css.image}
          />
          <div className={css.content}>
            <h2>{title}</h2>
            <p>{overview}</p>
            <p>
              <strong>Release Date:</strong> {release_date}
            </p>
            <p>
              <strong>Rating:</strong> {vote_average}
            </p>
          </div>
        </div>
      </div>
    </>,
    document.body,
  );
};

export default MovieModal;
