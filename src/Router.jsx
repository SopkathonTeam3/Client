import { BrowserRouter, Route, Routes } from 'react-router-dom';

import CustomColor from './pages/CustomColor';
import Main from './pages/Main';
import UserPage from './pages/userPage';
import ShareRequestModal from './components/modal/ShareRequestModal';
import OnBoarding from './pages/OnBoarding';
import CustomColorå from './pages/CustomColor';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<OnBoarding />}></Route>
        <Route path="/user" element={<UserPage />}></Route>
        <Route path="/custom" element={<CustomColor />}></Route>
        <Route path="/loading" element={<div>로딩페이지를 넣어주세요</div>}></Route>
        <Route path="/main/:userid/:roomid" element={<Main></Main>}></Route>
        <Route path="modal" element={<ShareRequestModal />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
