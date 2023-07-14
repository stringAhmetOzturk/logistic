import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile"
import Home from "./pages/home/Home";
function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/"> 
          {/* <Route index element={user ? <Home/> :<Login />} />
          <Route path="profile" element={user ? <Profile /> :<Login />} /> */}
          <Route index element={<Login />} />
          <Route path="profile" element={<Profile />} />
        </Route>
        {/* <Route path="*" element={<NotFound />} /> */}
    </Routes>
  </BrowserRouter>
  );
}

export default App;
