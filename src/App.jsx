import { BrowserRouter , Routes , Route } from 'react-router-dom'
import './App.css'
import Header from './Components/Header.jsx'
import  CoinPage  from './Pages/CoinPage.jsx'
import HomePage from './Pages/HomePage.jsx'




function App() {


  return (
    <BrowserRouter>
      <div className="all-container">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/coins/:id" element={<CoinPage/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
  
}

export default App
