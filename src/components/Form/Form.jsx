import { useState, useEffect } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';
import { getSearchMovies } from 'components/API';
import {
  Forms,
  SearchFormBtn,
  SearchFormInput,
  IconB,
  ListMovie,
  Items,
  FilmName,
  Li,
} from './Form.styled';

const Form = () => {
  const [searchParam, setSearchParam] = useSearchParams();
  const [query, setQuery] = useState('');
  const [d, setD] = useState([]);
  const location = useLocation();
  const value = searchParam.get('query');

  useEffect(() => {
    if (!value) return;
    async function fetch() {
      const response = await getSearchMovies(value);
      const data = response.data.results;
      console.log(data);
      setD(data);
    }
    fetch();
  }, [value]);

  const handleClickBtn = e => {
    e.preventDefault();
    setSearchParam({ query });
  };

  return (
    <>
      <Forms onSubmit={handleClickBtn}>
        <SearchFormInput
          name="value"
          required
          value={query}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search your favourite film"
          onChange={e => setQuery(e.currentTarget.value)}
        />
        <SearchFormBtn type="submit">
          <IconB />
        </SearchFormBtn>
      </Forms>
      <ListMovie>
        {d.map(({ id, original_title, poster_path, title }) => {
          return (
            <Li key={id}>
              <Items to={`${id}`} state={{ from: location }}>
                <img
                  src={`https://image.tmdb.org/t/p/w200${poster_path}`}
                  alt={title}
                />
                <FilmName>{original_title}</FilmName>
              </Items>
            </Li>
          );
        })}
      </ListMovie>
    </>
  );
};
export default Form;
