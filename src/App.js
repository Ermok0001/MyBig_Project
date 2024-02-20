import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Main } from './components/Basic/Main';
import { Navigation } from './components/Basic/Navigation';
import { Support } from './components/page/Support';
import { About } from './components/page/About';
import { Favoutite } from './components/page/Favourite';
import { store } from './store/store';
import { Provider } from 'react-redux';


function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <Navigation></Navigation>
      <Routes>
        <Route path='/' element={<Main />}></Route>
        <Route path='/fav' element={<Favoutite></Favoutite>}></Route>
        <Route path='/support' element={<Support />}></Route>
        <Route path='/about' element={<About />}></Route>
      </Routes>
    </div>
    </Provider>
  );
}

export default App;
