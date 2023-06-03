import { BrowserRouter, Routes, Route } from 'react-router-dom';

import React from 'react';
import UserPage from './pages/UserPage';
import Main from './pages/Main';
import ShareRequestModal from './components/modal/ShareRequestModal';
import OnBoarding from './pages/OnBoarding';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<OnBoarding />}></Route>
        <Route path="/user" element={<UserPage />}></Route>

        <Route path="/custom" element={<div>커스텀 페이지를 넣어주세요</div>}></Route>
        <Route path="/loading" element={<div>로딩페이지를 넣어주세요</div>}></Route>
        <Route path="/main/:userid/:roomid" element={<Main></Main>}></Route>
        <Route path="modal" element={<ShareRequestModal />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
