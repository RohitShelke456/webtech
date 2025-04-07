import logo from './logo.svg';
import './style.css'
import Home from './Component/Home';
import Navbar from './Component/Navbar';
import Banar02 from './Component/Banar02';
import Categry03 from './Component/Categry03';
import Brand04 from './Component/Brand04';
import TrendingProducts05 from './Component/TrendingProducts05';
import LuxaDark06 from './Component/LuxaDark06';
import Sellingproducts07 from './Component/Sellingproducts07';
import Blog09 from './Component/Blog09';
import FoodmartApp10 from './Component/FoodmartApp10';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import People11 from './Component/People11';
import Freedelivery12 from './Component/Freedelivery12';
import Footer from './Component/Footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar></Navbar>

      <Routes> 
             <Route path="/home" element={<Home />} />
            <Route path="/banar" element={<Banar02 />} />
            <Route path="/categry" element={<Categry03 />} />
            <Route path="/brand04" element={<Brand04/>} />
            <Route path="/trendingproducts" element={<TrendingProducts05 />} />
            <Route path="/luxadark" element={<LuxaDark06 />} />
            <Route path="/sellingproducts" element={<Sellingproducts07 />} />
            <Route path="/blog" element={<Blog09/>}/>
            <Route path="/foodmartapp" element={<FoodmartApp10 />} />
            <Route path="/people" element={<People11 />} />
            <Route path="/freedelivery" element={<Freedelivery12 />} />
            </Routes>
          <Footer></Footer>
      </BrowserRouter>
       
    </div>
  );
}

export default App;
