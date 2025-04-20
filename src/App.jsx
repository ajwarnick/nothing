import { Routes, Route } from "react-router";

import Footer from './components/Footer';
import Header from './components/Header';
import Story from './components/Story';

import Chats from './components/Chats'
import Feed from './components/Feed';
import Profile from './components/Profile';
// import Camera from "./components/Camera";
// import PostPage from './components/PostPage';
import Post from './components/Post';

function App() {
  
  const paramsUntangle = () => {
    let params

    if(window.location.toString().includes("/post")){
      params = Object.fromEntries(new URLSearchParams(location.search));
    
      if(params.images && params.images.includes(",,,")){
        params.images = params.images.split(",,,");
      }
  
      if(params.likeAvatars && params.likeAvatars.includes(",,,")){
        params.likeAvatars = params.likeAvatars.split(",,,");
      }

      if(params.userAvatar){
        params.userAvatar = decodeURIComponent(params.userAvatar);
      }
    }

    return params;
  }

  return (
    <>
      <Header />
        <div className="container">
          {/* <Story /> */}
          <Routes>
            <Route path="/post" element={<Post data={paramsUntangle()}/>} />
            <Route path="/" element={<Feed />} />
            {/* <Route path="/chat" element={<Chats />} /> */}
            {/* <Route path="/camera" element={<Camera />} /> */}
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </div>
      <Footer />  
    </>
  )
}

export default App
