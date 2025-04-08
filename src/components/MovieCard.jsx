import React from 'react';

const MovieCard = ({
  movie: {
    title,
    vote_average,
    poster_path,
    release_date,
    original_language,
    vote_count,
    overview,
    popularity,
  },
}) => {
  return (
    <div className="movie-card relative rounded-lg overflow-hidden">
      {/* Обёртка для изображения с hover-эффектом */}
      <div className="relative">
        <img
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w500/${poster_path}`
              : 'no-movie.png'
          }
          alt={title}
          className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
        />

        {/* Описание — появляется только при наведении на картинку */}
        <div className="overview absolute text-sm">
          <p className="overview-text  overflow-y-hidden max-h-full">
            {overview || 'No overview available.'}
          </p>
        </div>
      </div>

      <div className="mt-4">
        <h3>{title}</h3>

        <div className="content">
          <div className="rating">
            <span className="rating-score-number">Voted: {vote_count}</span>
            <img src="star.svg" alt="Star Icon" />
            <p>{vote_average ? vote_average.toFixed(1) : 'NN'}</p>
          </div>

          <div className="info-after-rating">
            <span>•</span>
            <p className="lang">{original_language}</p>
            <span>•</span>
            <p className="text-white">
              {release_date ? release_date.split('-')[0] : 'N/A'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
