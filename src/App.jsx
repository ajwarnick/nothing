import { Route, Routes } from "react-router"

import Footer from './components/Footer'
import Header from './components/Header'

import Chats from './components/Chats'
import Feed from './components/Feed'
import Profile from './components/Profile'
import Camera from "./components/Camera"

function App() {
  const path = window.location.pathname;
  console.log(path);
  return (
    <>
      <Header />
        <div className="container">
          <Routes>
            <Route path="/" element={<Feed />} />
            <Route path="/chat" element={<Chats />} />
            <Route path="/camera" element={<Camera />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </div>
      <Footer />  
    </>
  )
}

export default App
