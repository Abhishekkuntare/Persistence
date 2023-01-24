import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./components/Home/Home";
import Registration from "./pages/Registration";
import Login from "./pages/Login";
import { AuthContext } from "./helpers/AuthContext";
import { useState, useEffect } from "react";
import axios from "axios";
import Header from "./components/layout/Header/Header";
import Header2 from "./components/layout/Header/Header2";
import Footer from "./components/layout/Footer/Footer";
import Employee from "./components/Employee/Employee";
import About from "./components/About/About";
import PageNotFound from "./pages/PageNotFound";
import Employee_Details from "./pages/Employee_Details";
import Profile from "./pages/Profile";
import Post from "./pages/Post";
import ChangePassword from "./pages/ChangePassword";
import Bot from "./components/Bot/Bot";
import CreateEmployee from "./pages/CreateEmployee";
import Cookies from "./pages/Cookies";
import Pricing from "./pages/Pricing";
import UseCases from "./pages/UseCases";
import MyProfile from "./pages/MyProfile";
import GetMyEmployeeProfile from "./pages/GetMyEmployeeProfile";
import CreateMyEmployee from "./pages/CreateMyEmployee";
import Feedback from "./components/Feedback/Feedback";

function App() {
  const [authState, setAuthState] = useState({
    username: "",
    id: 0,
    status: false,
  });

  useEffect(() => {
    axios
      .get("http://localhost:3001/auth/auth", {
        headers: {
          accessToken: localStorage.getItem("accessToken"),
        },
      })
      .then((response) => {
        if (response.data.error) {
          setAuthState({ ...authState, status: false });
        } else {
          setAuthState({
            username: response.data.username,
            id: response.data.id,
            status: true,
          });
        }
      });
  }, []);

  return (
    <>
      <div className="App">
        <Bot />
        <AuthContext.Provider value={{ authState, setAuthState }}>
          <Router>
            <div className="navbar">
              <div className="links">
                {!authState.status ? (
                  <>
                    <Header />
                    {/* <Link to="/login"> Login</Link>
                  <Link to="/registration"> Registration</Link> */}
                  </>
                ) : (
                  <>
                    {/* <Link to="/"> Home Page</Link>
                  <Link to="/createpost"> Create A Post</Link> */}
                    <Header2 />
                  </>
                )}
              </div>
            </div>
            <Routes>
              <Route path="/registration" element={<Registration />} />
              <Route path="/login" element={<Login />} />
              <Route path="/" element={<Home />} />
              <Route path="/employee" element={<Employee />} />
              <Route path="/about" element={<About />} />
              <Route path="/create_employee" element={<CreateEmployee />} />
              <Route path="/employee_details" element={<Employee_Details />} />
              <Route path="/profile/:id" element={<Profile />} />
              <Route path="/post/:id" element={<Post />} />
              <Route path="/changepassword" element={<ChangePassword />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/usecase" element={<UseCases />} />
              <Route path="/myprofile" element={<MyProfile />} />
              <Route path="/feedback" element={<Feedback />} />
              <Route
                path="/getEmployeeProfile"
                element={<GetMyEmployeeProfile />}
              />
              <Route path="/createMyEmployee" element={<CreateMyEmployee />} />
              <Route
                path="/get_my_employee_profile"
                element={<GetMyEmployeeProfile />}
              />
              <Route path="/*" element={<PageNotFound />} />
            </Routes>

            <Footer />
          </Router>
        </AuthContext.Provider>
        <Cookies />
      </div>
    </>
  );
}

export default App;
