import './App.css';
import { Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Acceuil from './pages/Acceuil';
import Post from './pages/Post';
import { Provider } from 'react-redux';
import { store } from './store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <div>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/home' element={<Home/>}>
            <Route path='/home/acceuil' element={<Acceuil/>}/>
            <Route path='/home/contact' element={<Contact/>}/>
          </Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/post' element={<Post/>}></Route>
        </Routes>
        </div>
      </div>
    </Provider>

  );
}

export default App;
