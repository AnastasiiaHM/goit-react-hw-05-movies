import Film from 'components/Film/Film';
import { getDetailsMovie } from 'components/API';
import { Suspense, useRef, useEffect, useState } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import Spiner from 'components/Spinner/Spiner';
import { BackLink, LinkCastRevie } from 'components/Film/Film.styled';

const MoviesDetails = () => {
  const location = useLocation();
  const { movieId } = useParams();
  const [film, setFilm] = useState({});

  const backLink = useRef(location.state?.from ?? '/');

  useEffect(() => {
    async function fetch() {
      const response = await getDetailsMovie(movieId);
      const data = response.data;
      setFilm(data);
    }
    fetch();
  }, [movieId]);
  return (
    <div>
      <BackLink to={backLink.current}>Back To</BackLink>
      <Film film={film} />
      <LinkCastRevie to="cast">Cast</LinkCastRevie>
      <LinkCastRevie to="reviews">Revies</LinkCastRevie>
      <Suspense fallback={<Spiner />}>
        <Outlet />
      </Suspense>
    </div>
  );
};
export default MoviesDetails;
