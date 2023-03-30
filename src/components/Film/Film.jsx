import { Container, Img, Description, Title, Text } from './Film.styled';

const Film = ({ film }) => {
  const { poster_path, title, release_date, vote_average, overview, budget } =
    film;

  return (
    <Container>
      <Img
        src={`https://image.tmdb.org/t/p/w500${poster_path}`}
        alt="{title}"
      />
      <div>
        <Title>{title}</Title>

        <Description>
          Realease Date: <Text>{release_date}</Text>
        </Description>

        <Description>
          Budget: <Text>{budget} $</Text>
        </Description>

        <Description>
          Vote Score: <Text>{vote_average}</Text>
        </Description>

        <Description>Overview:</Description>
        <Text> {overview}</Text>
      </div>
    </Container>
  );
};
export default Film;
