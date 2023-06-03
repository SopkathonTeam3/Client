import { BrowserRouter, Route, Routes } from 'react-router-dom';

import CustomColor from './pages/CustomColor';
import Main from './pages/Main';
import UserPage from './pages/UserPage';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div>온보딩페이지를 넣어주세요</div>}></Route>
        <Route path="/user" element={<UserPage />}></Route>
        <Route path="/" element={<div>온보딩페 이지를 넣어주세요</div>}></Route>
        <Route path="/custom" element={<CustomColor />}></Route>
        <Route path="/loading" element={<div>로딩페이지를 넣어주세요</div>}></Route>
        <Route path="/main/:userid/:roomid" element={<Main />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
