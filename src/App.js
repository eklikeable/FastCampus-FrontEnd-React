import './App.css';
import { LocationProvider } from './components/common/contexts';
import Menu from './components/Menu';
import Tab from './components/Tab';

function App() {
  return (
    <div className='App'>
      <LocationProvider>
        <Menu />
        <Tab />
      </LocationProvider>
    </div>
  );
}

export default App;
