
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './pages/Home';

import Products from './pages/Products';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
      <Routes>
        {/* <Route path='/'element={<Home />}/> */}
        <Route path='/'  element={<Products />} />
      </Routes>
      </BrowserRouter>
 
    </div>
  );
}

export default App;
