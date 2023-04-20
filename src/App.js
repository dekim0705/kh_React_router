// import logo from './logo.svg';
import './App.css';
// import HomeEx from './pages/HomeEx';
// import AboutEx from './pages/AboutEx';
import Home from './mini_pages/Home';
import Login from './mini_pages/Login';
import Join from './mini_pages/Join';
import FindAccount from './mini_pages/FindAccount';
import MyPage from './mini_pages/MyPage';
import MyPost from './mini_pages/MyPost';
import MyReply from './mini_pages/MyReply';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Profile from './pages/ProfileEx';
import MyPage2 from './mini_pages/MyPage2';


// <Route path=”주소 규칙” element={보여 줄 컴포넌트 JSX} /> 

function App() {
  return (
      <Router>  
          <Routes>
            <Route path="/" element={<Home />} /> 
            <Route path="/Login" element={<Login />} /> 
            <Route path="/Join" element={<Join />} /> 
            <Route path="/Login/FindAccount" element={<FindAccount />} /> 
            <Route path="/MyPage" element={<MyPage />} /> 
            <Route path="/MyPage/MyPost" element={<MyPost />} /> 
            <Route path="MyPage/MyReply" element={<MyReply />} /> 
            <Route path="/Profiles/:username" element={<Profile />} />
            {/* :username -> 매개변수, useParams에서 가져올 수 있는 값 */}
            <Route path="/MyPage2" element={<MyPage2 />} />

          </Routes>
      </Router>
    );
}

export default App;

/*
function App() {
  return (
      <Router>  
          <Routes>
            <Route path="/" element={<HomeEx />} /> 
            // === root page 
            <Route path="/AboutEx" element={<AboutEx />} /> 
            // About이라는 path가 들어오면 해당 페이지로 이동 ex)링크투(X, 오류 가능성), 네비게이터
          </Routes>
      </Router>
    );
}
*/