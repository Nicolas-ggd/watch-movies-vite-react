import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { PrivateRoutes } from "./utils/PrivateRoutes";
import { Home } from "./components/home/Home";
import { Auth } from "./components/auth/Auth";
import { ForgotPassword } from "./components/forgotPassword/ForgotPassword";
import { SignIn } from "./components/authorization/SignIn";
import { Page404 } from "./components/nonExist/404Page";
import { CountryDetail } from "./components/countries/CountryDetail";

function App() {

  return (
    <div className="w-screen h-full bg-gray-50">
      <Router>
        <Routes>
          <Route element={<PrivateRoutes />}>
            <Route element={<Home />} exact path="/home"></Route>
            <Route exact path="/:country" element={<CountryDetail />}></Route>
          </Route>
          <Route exact path="/" element={<Auth />}></Route>
          <Route exact path="/verify" element={<SignIn />}></Route>
          <Route exact path="/reset-password" element={<ForgotPassword />}></Route>
          <Route path="*" element={<Page404 />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
