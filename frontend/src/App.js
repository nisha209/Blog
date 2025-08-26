import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nav from './common/nav';
import Home from './components/home';
import Blog from './components/blog';
import Login from './components/login';
import Signup from './components/signup';

function App() {
  return (
    <div className='px-8'>
      <BrowserRouter>
        <Routes>
          {/* 👇 Add default route */}
          <Route path="/" element={<Home />} />

          <Route path="/nav" element={<Nav />} />
          <Route path="/home" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
