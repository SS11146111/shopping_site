import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './components/Home';
import { Product } from './components/Product';
import { Cart } from './components/Cart';
import './App.css';
import { useState } from 'react';
function App() {

  const [itemList, setItemList] = useState(() => {
    const savedList = localStorage.getItem('itemList');
    return savedList ? JSON.parse(savedList) : [];
  });
 
  return (
    <div className="App">
      <Router>
        <Header itemList={itemList}/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product:offer" element={<Product itemList={itemList} setItemList={setItemList}/>} />
          <Route path="/product:neckband" element={<Product itemList={itemList} setItemList={setItemList}/>} />
          <Route path="/product:xyzheadset" element={<Product itemList={itemList} setItemList={setItemList}/>} />
          <Route path="/product:webcam" element={<Product itemList={itemList} setItemList={setItemList}/>} />
          <Route path="/product:gheadset" element={<Product itemList={itemList} setItemList={setItemList}/>} />
          <Route path="/cart" element={<Cart itemList={itemList} setItemList={setItemList}/>} />
        </Routes>
        <Footer/>
      </Router>
      
    </div>
  );
}

export default App;
