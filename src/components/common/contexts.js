import { createContext, useContext, useReducer } from 'react';

const initialState = {
  apiData: [],
  sido: '경기',
  station: '양평읍',
  favorite: [],
};

function reducer(state, action) {
  switch (action.type) {
    case 'apiDataChange':
      return { ...state, apiData: action.apiData };
    case 'sidoChange':
      return { ...state, sido: action.sido };
    case 'stationChange':
      return { ...state, station: action.station };
    case 'addFavorite':
      return { ...state, favorite: state.favorite.concat(action.favorite) };
    case 'removeFavorite':
      const idx = state.favorite.indexOf(action.favorite);
      state.favorite.splice(idx, 1);
      return { ...state, favorite: [...state.favorite] };
    default:
      return state;
  }
}

const LocationStateContext = createContext(null);
const LocationDispatchContext = createContext(null);

export function LocationProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <LocationStateContext.Provider value={state}>
      <LocationDispatchContext.Provider value={dispatch}>
        {children}
      </LocationDispatchContext.Provider>
    </LocationStateContext.Provider>
  );
}

export function useLocationState() {
  const context = useContext(LocationStateContext);
  if (!context) throw Error('LocationStateContext 없음');
  return context;
}

export function useLocationDispatch() {
  const context = useContext(LocationDispatchContext);
  if (!context) throw Error('LocationDispatchContext 없음');
  return context;
}
