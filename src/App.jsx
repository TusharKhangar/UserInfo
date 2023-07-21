import './App.css'
import DemoComponent from "./Demo.component.jsx";
import 'bootstrap/dist/css/bootstrap.min.css'
import CustomNavbar from "./Components/CustomNavbar.jsx";
import {BrowserRouter, Routes , Route} from "react-router-dom";
import LoginComponent from "./Components/Login.component.jsx";
import SignUpComponent from "./Components/SignUp.component.jsx";

function App() {

  return (
    <>
        <BrowserRouter>
        {/*<DemoComponent />*/}
            <CustomNavbar/>
            <Routes>
                {/*<Route path={''} element={<CustomNavbar/>}/>*/}
                <Route path={'/login'} element={<LoginComponent/>}/>
                <Route path={'/signup'} element={<SignUpComponent/>}/>
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
