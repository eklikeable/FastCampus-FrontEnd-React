import styled from 'styled-components';
import './App.css';
import { LocationProvider } from './components/common/contexts';
import Tab from './components/Tab';
import { Routes, Route } from 'react-router-dom';
import Card from './components/Card';
import Favorite from './components/Favorite';
import WholeCity from './components/WholeCity';

function App() {
  return (
    <LocationProvider>
      <Container className='App'>
        <CardsBox>
          <Routes>
            <Route path='/' element={<Card />} />
            <Route path='/cities' element={<WholeCity />} />
            <Route path='/favorite' element={<Favorite />} />
          </Routes>
        </CardsBox>
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
  /* position: relative; */
`;

const TapBox = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
`;

const CardsBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7px;
`;
