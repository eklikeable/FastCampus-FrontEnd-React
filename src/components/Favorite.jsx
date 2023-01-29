import styled from 'styled-components';
import { useLocationState } from './common/contexts';

function Favorite() {
  const { favorite } = useLocationState();
  return (
    <Container>
      <ul>
        <h3>즐겨찾기한 측정소들~~!</h3>
        <br />
        {favorite.map((station) => (
          <li key={station}>{station}</li>
        ))}
      </ul>
    </Container>
  );
}

export default Favorite;

const Container = styled.div``;
