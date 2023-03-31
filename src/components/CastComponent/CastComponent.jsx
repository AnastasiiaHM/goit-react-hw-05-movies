import { useEffect, useState } from 'react';
import { getCastMovie } from 'components/API';
import { useParams } from 'react-router-dom';
import { List, Item, Img, Name, Character } from './Cast.styled';
import Spiner from 'components/Spinner/Spiner';
import Seats from '../../images/Seats.png';

const CastComponent = () => {
  const [cast, setCast] = useState([]);

  const { movieId } = useParams();
  const [isActive, setActive] = useState(true);

  useEffect(() => {
    async function fetch() {
      const response = await getCastMovie(movieId);
      const slises = response.data.cast;
      const data = slises.slice(0, 10);
      setCast(data);
      setActive(false);
    }
    fetch();
  }, [movieId, cast]);

  if (isActive) {
    return <Spiner />;
  }
  if (cast.length === 0) {
    <Name>Sorry but we don`t have cast</Name>;
  }

  return (
    <div>
      <List>
        {cast.map(({ profile_path, name, id, character }) => {
          return (
            <Item key={id}>
              <Img
                src={
                  profile_path
                    ? `https://image.tmdb.org/t/p/w200${profile_path}`
                    : Seats
                }
                alt={name}
              />
              <Name>{name}</Name>
              <Character>{character}</Character>
            </Item>
          );
        })}
      </List>
    </div>
  );
};
export default CastComponent;
