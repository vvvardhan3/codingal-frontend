import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Posts from './pages/Posts';

function App() {
  return (
   <>
   <BrowserRouter>
   <Routes>
   <Route index element={<Home/>} />
   <Route element={<Home/>} path="/home" />
   <Route element={<Posts/>} path="/posts" />

   </Routes>
   
   </BrowserRouter>
   
   </>
  );
}

export default App;
