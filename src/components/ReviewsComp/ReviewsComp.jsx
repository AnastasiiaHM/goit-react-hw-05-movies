import { useEffect, useState } from 'react';
import { getReviewsMovie } from 'components/API';
import { useParams } from 'react-router-dom';
import Spiner from 'components/Spinner/Spiner';
import { Content, Author, List } from './Reviews.styled';

const ReviewsComponent = () => {
  const [review, setReview] = useState([]);
  const { movieId } = useParams();
  const [isActive, setActive] = useState(true);

  useEffect(() => {
    async function fetch() {
      const response = await getReviewsMovie(movieId);
      const res = response.data.results;
      const data = res.slice(0, 4);

      setReview(data);
      setActive(false);
    }
    fetch();
  }, [movieId]);

  if (isActive) {
    return <Spiner />;
  }

  return (
    <div>
      <List>
        {review.map(({ author, content, id }) => {
          return (
            <li key={id}>
              <Author>
                Author: <span>{author}</span>
              </Author>
              <Content>{content}</Content>
            </li>
          );
        })}
      </List>
    </div>
  );
};
export default ReviewsComponent;
