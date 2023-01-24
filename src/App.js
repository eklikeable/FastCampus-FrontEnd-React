import styled from 'styled-components';
import './App.css';
import { LocationProvider } from './components/common/contexts';
import Menu from './components/Menu';
import Tab from './components/Tab';

function App() {
  return (
    <LocationProvider>
      <Menu />
      <Container className='App'>
        <TapBox>
          <Tab />
        </TapBox>
      </Container>
    </LocationProvider>
  );
}

export default App;

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const TapBox = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
`;
