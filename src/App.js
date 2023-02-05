import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home.page';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/u-camp-proyecto-5/" element={<Home />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
