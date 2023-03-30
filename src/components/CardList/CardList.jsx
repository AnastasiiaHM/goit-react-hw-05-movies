import { getTrendingMovies } from 'components/API';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Container, List, Item, FilmName, Links } from './CardList.styled';

const CardList = () => {
  const [list, setList] = useState([]);
  const location = useLocation();

  useEffect(() => {
    async function fetch() {
      const response = await getTrendingMovies();

      const data = response.data.results;

      setList(data);
    }
    fetch();
  }, []);

  return (
    <Container>
      <List>
        {list.map(({ id, poster_path, original_title }) => {
          return (
            <Item key={id}>
              <Links to={`movies/${id}`} state={{ from: location }}>
                <img
                  src={`https://image.tmdb.org/t/p/w200${poster_path}`}
                  alt={original_title}
                />
                <FilmName>{original_title}</FilmName>
              </Links>
            </Item>
          );
        })}
      </List>
      <img />
    </Container>
  );
};
export default CardList;
