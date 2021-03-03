
import './App.css';
import AppRouter from './AppRouter';
import {Provider} from 'react-redux';
import store from './redux/store';

const App: () => ReactNode = () => {
  return (
    <>
      <Provider store={store}>
        <AppRouter />
      </Provider>     
    </>
  );
};

export default App;
