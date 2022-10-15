import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import SignIn from './pages/SignIn';
import Home from './pages/Home';
import SignUp from './pages/SignUp';



function App() {
  return (
      <div className='root-wrap'>
        <RecoilRoot>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/sign-in" element={<SignIn />} />
              <Route path="/sign-up" element={<SignUp />} />
            </Routes>
          </BrowserRouter>
        </RecoilRoot>
      </div>
  );
}

export default App;
