import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import SigninCompo from "./Components/SigninCompo";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeCompo from "./Components/HomeCompo";
import SignupCompo from "./Components/Signup";
import UseAuthContextProvider from "./Context/AuthContext";
import ProtectedCompo from "./ProtectedCompo";
function App() {
  return (
    <div className="App">
      <UseAuthContextProvider>
        <Router basename="/">
          <Routes>
            <Route path="/" element={<HomeCompo />} />
            <Route path="/explore" element={<ProtectedCompo />} />
            <Route path="/Netflix/signin" element={<SigninCompo />} />
            <Route path="/Netflix/Signup" element={<SignupCompo />} />
          </Routes>
        </Router>
      </UseAuthContextProvider>
    </div>
  );
}

export default App;
