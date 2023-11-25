import { BrowserRouter, Routes, Route } from "react-router-dom";
import GetStarted from "./components/started";
import ResetPassword from "./components/resetP.js";
import Welcome from "./components/login";
import ForgotPassword from "./components/forgotP";
import BookTax from "./components/bookTax";
import Signup1 from "./components/signup1";
import CoverPage from "./components/coverPage";
import Verification from "./components/verification";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='*' element={<h1 className="text-center">Not fount</h1>}/>
        
        <Route index element={<CoverPage />} />
        <Route path ="home" element ={<GetStarted/>}/>
        <Route path="signup" element={<Signup1 />} />
        <Route path="login" element={<Welcome />} />
        <Route path ="Book" element={<BookTax/>}/>
        <Route path='forgotpassword' element={<ForgotPassword/>}/>
        <Route path ="verifyCode" element ={<Verification/>}/>
        <Route path="resetpassword" element ={<ResetPassword/>}/>
        
        
        

      
      </Routes>
    </BrowserRouter>
  );
}

export default App;
