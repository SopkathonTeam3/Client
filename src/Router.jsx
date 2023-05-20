import { BrowserRouter, Routes, Route } from 'react-router-dom';

import React from 'react';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div>온보딩페이지를 넣어주세요</div>}></Route>
        <Route path="/user" element={<div>유저이름 작성하는 페이지 </div>}></Route>
        <Route path="/custom" element={<div>커스텀 페이지를 넣어주세요</div>}></Route>
        <Route path="/loading" element={<div>로딩페이지를 넣어주세요</div>}></Route>
        <Route path="/main/:userid/:roomid" element={<div>메인페이지를 넣어주세요</div>}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
