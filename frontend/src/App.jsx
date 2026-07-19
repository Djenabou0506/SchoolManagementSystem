import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

import Dashboard from "./pages/Dashboard";
import Students from "./pages/Students";
import AddStudent from "./pages/AddStudent";
import EditStudent from "./pages/EditStudent";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {

  return (

    <BrowserRouter>

      <Navbar />

      <div className="container-fluid">

        <div className="row">

          <div className="col-md-3 col-lg-2 p-0">
            <Sidebar />
          </div>


          <div className="col-md-9 col-lg-10 p-4">

            <Routes>

              <Route path="/" element={<Dashboard />} />

              <Route path="/students" element={<Students />} />
              <Route 
                  path="/add-student" 
                  element={<AddStudent />} 
              />
              <Route 
                path="/edit-student/:id"
                element={<EditStudent />}
              />

            </Routes>

          </div>


        </div>

      </div>


    </BrowserRouter>

  );

}


export default App;