import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home.page';
import Error from './pages/error.page';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/u-camp-proyecto-5/" element={<Home />}></Route>
          <Route path="*" element={<Error />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
