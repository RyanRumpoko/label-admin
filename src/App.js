import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Dashboard from "./views/Dashboard";

function App() {
  return (
    <>
      <div className="container-fluid">
        <div className="row flex-nowrap">
          <Sidebar />
          <div className="col p-0">
            <Navbar />
            <Routes>
              <Route path="/" element={<Dashboard />} />
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
