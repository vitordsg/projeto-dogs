import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header.jsx";
import Footer from "./Components/Footer.jsx";
import Home from "./Components/Home.jsx";
import Login from "./Components/Login/Login.jsx";
import { UserStorage } from "./UserContext.jsx";
import User from "./Components/User/User.jsx";
import ProtectedRoute from "./Components/Helper/ProtectedRoute.jsx";
import Photo from "./Components/Photo/Photo.jsx";
import UserProfile from "./Components/User/UserProfile.jsx";
import NotFound from "./Components/NotFound.jsx";

function App() {
  return (
    <div>
      <BrowserRouter>
        <UserStorage>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="login/*" element={<Login />} />
            <Route
              path="conta/*"
              element={
                <ProtectedRoute>
                  <User />
                </ProtectedRoute>
              }
            />
            <Route path="foto/:id" element={<Photo />} />
            <Route path="perfil/:user" element={<UserProfile />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </UserStorage>
      </BrowserRouter>
    </div>
  );
}

export default App;
