
import {  Routes, Route } from "react-router-dom";
import "./App.css";
import "./lib/font-awesome/css/all.min.css";
import Header  from "./components/Header";
import Add from "./components/Add";
import Watched from "./components/Watched";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import ProtectedRoute from "./components/ProtectedRoute";
import {UserAuthContextProvider}  from "./context/UserAuthContext";
import { GlobalProvider } from "./context/GlobalState";
function App() {
  return (
        <GlobalProvider>
          <UserAuthContextProvider>
            <Routes>
              <Route
                path="/home"
                element={
                  <ProtectedRoute>
                    <Header/>
                    <Home />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/add"
                element={
                  <ProtectedRoute>
                    <Header/>
                    <Add />
                  </ProtectedRoute>
                }
              />
               <Route
                path="/watched"
                element={
                  <ProtectedRoute>
                    <Header/>
                    <Watched/>
                  </ProtectedRoute>
                }
              />
              <Route path="/" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
            </Routes>
          </UserAuthContextProvider>
          </GlobalProvider>
          
  );
}

export default App;
