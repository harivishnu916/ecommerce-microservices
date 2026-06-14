import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./loginpage";
import ForgotPassword from "./ForgotPassword";
import VerifyOtp from "./VerifyOtp";
import ResetPassword from "./ResetPassword";

function App() {
  return (
    <BrowserRouter>
      <Routes>
       <Route path="/" element={<Login />} />
<Route path="/forgot-password" element={<ForgotPassword />} />
<Route path="/verify-otp" element={<VerifyOtp />} />
<Route path="/reset-password" element={<ResetPassword />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
