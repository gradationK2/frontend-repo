import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Main from "./pages/Main/Main";
import Start from "./pages/Start";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Food from "./pages/Food";
import Review from "./pages/Review";
import Search from "./pages/Search";
import WriteReview from "./pages/WriteReview";
import MyPage from "./pages/MyPage";
import Profile from "./pages/Profile";
import ChangePw from "./pages/ChangePw";
import MyReview from "./pages/MyReview";
import Like from "./pages/Like";
import Collection from "./pages/Collection";
import NextCollection from "./pages/NextCollection";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/start" element={<Start />} />
        <Route path="/" element={<Main />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/food/:id" element={<Food />} />
        <Route path="/review/:id" element={<Review />} />
        <Route path="Search" element={<Search />} />
        {/* 검색 결과 화면 있으면 추가 */}
        <Route path="/writeReview/:id" element={<WriteReview />} />
        <Route path="mypage" element={<MyPage />} />
        <Route path="profile" element={<Profile />} />
        <Route path="changePw" element={<ChangePw />} />
        <Route path="myReview" element={<MyReview />} />
        <Route path="like" element={<Like />} />
        <Route path="collection" element={<Collection />} />
        <Route path="nextCollection" element={<NextCollection />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
