/** @format */

import { Outlet, useLocation } from "react-router-dom";
import NavBar from "./components/navBar/NavBar";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div>
      {/* nav sectino */}
      <div>
        <NavBar />
      </div>
      {/* outlate section  */}
      <div>
        <Outlet />
      </div>

      {/* footer section */}
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
