import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

import Dashboard from "./pages/Dashboard";
import Students from "./pages/Students";
import AddStudent from "./pages/AddStudent";
import EditStudent from "./pages/EditStudent";

import Classes from "./pages1/Classes";
import AddClasse from "./pages1/AddClasse";
import EditClasse from "./pages1/EditClasse";

import Teachers from "./pages2/Teachers";
import AddTeacher from "./pages2/AddTeacher";
import EditTeacher from "./pages2/EditTeacher";

import Subjects from "./pages3/Subjects";
import AddSubject from "./pages3/AddSubject";
import EditSubject from "./pages3/EditSubject";
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

              <Route 
                path="/classes"
                element={<Classes />}
              />
              <Route 
                path="/add-classe" 
                element={<AddClasse />} 
              />
              <Route 
                path="/edit-classe/:id" 
                element={<EditClasse />} 
              />
              <Route 
                path="/teachers"
                element={<Teachers/>}
              />


              <Route
                path="/add-teacher"
                element={<AddTeacher/>}
              />


              <Route
                path="/edit-teacher/:id"
                element={<EditTeacher/>}
              />

              <Route path="/subjects" element={<Subjects/>}/>

              <Route path="/add-subject" element={<AddSubject/>}/>

              <Route 
                path="/edit-subject/:id" 
                element={<EditSubject />}
              />
            </Routes>

          </div>


        </div>

      </div>


    </BrowserRouter>

  );

}


export default App;