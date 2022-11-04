import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Login from './page/Login';

import { Routes, Route } from "react-router-dom";
import Layout from "./page/Layout";
import Home from "./page/Home"
import { DataProvider } from './context/DataContext';
import ProductDress from './page/ProductDress';


function App() {
  return (
    <div className="App">
      <DataProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path='loginform' element={<Login />} />
        
        </Route>
      </Routes>
      </DataProvider>
      <ProductDress />
    </div>
  );
}

export default App;
