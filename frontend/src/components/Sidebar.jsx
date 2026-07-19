import { 
  FaHome, 
  FaUserGraduate, 
  FaSchool, 
  FaChalkboardTeacher, 
  FaBook 
} from "react-icons/fa";

import { Link } from "react-router-dom";


function Sidebar() {

  return (
    <div className="bg-dark text-white vh-100 p-3">

      <h4 className="text-center mb-4">
        📚 Menu
      </h4>


      <ul className="nav flex-column">


        <li className="nav-item mb-3">

          <Link 
            to="/" 
            className="nav-link text-white d-flex align-items-center"
          >
            <FaHome className="me-3" />
            Dashboard
          </Link>

        </li>



        <li className="nav-item mb-3">

          <Link 
            to="/students" 
            className="nav-link text-white d-flex align-items-center"
          >
            <FaUserGraduate className="me-3" />
            Étudiants
          </Link>

        </li>



        <li className="nav-item mb-3">

          <Link 
            to="/classes" 
            className="nav-link text-white d-flex align-items-center"
          >
            <FaSchool className="me-3" />
            Classes
          </Link>

        </li>



        <li className="nav-item mb-3">

          <Link 
            to="/teachers" 
            className="nav-link text-white d-flex align-items-center"
          >
            <FaChalkboardTeacher className="me-3" />
            Enseignants
          </Link>

        </li>



        <li className="nav-item mb-3">

          <Link 
            to="/subjects" 
            className="nav-link text-white d-flex align-items-center"
          >
            <FaBook className="me-3" />
            Matières
          </Link>

        </li>


      </ul>


    </div>
  );
}


export default Sidebar;