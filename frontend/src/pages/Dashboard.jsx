import { useEffect, useState } from "react";
import api from "../api/api";


function Dashboard() {

  const [students, setStudents] = useState(0);
  const [classes, setClasses] = useState(0);
  const [teachers, setTeachers] = useState(0);
  const [subjects, setSubjects] = useState(0);


  useEffect(() => {
    loadStatistics();
  }, []);


  const loadStatistics = async () => {

    try {

      const studentsResponse = await api.get("students/");
      const classesResponse = await api.get("classes/");
      const teachersResponse = await api.get("teachers/");
      const subjectsResponse = await api.get("subjects/");


      setStudents(studentsResponse.data.length);
      setClasses(classesResponse.data.length);
      setTeachers(teachersResponse.data.length);
      setSubjects(subjectsResponse.data.length);

    } catch (error) {

      console.log(error);

    }

  };


  return (

    <div className="container-fluid">

      <h2 className="text-center mb-4">
        Tableau de bord
      </h2>


      <div className="row g-4 justify-content-center">


        {/* Étudiants */}
        <div className="col-12 col-sm-6 col-lg-3">

          <div className="card bg-primary text-white shadow h-100">

            <div className="card-body text-center">

              <h5>Étudiants</h5>

              <h1>{students}</h1>

            </div>

          </div>

        </div>



        {/* Classes */}
        <div className="col-12 col-sm-6 col-lg-3">

          <div className="card bg-success text-white shadow h-100">

            <div className="card-body text-center">

              <h5>Classes</h5>

              <h1>{classes}</h1>

            </div>

          </div>

        </div>



        {/* Enseignants */}
        <div className="col-12 col-sm-6 col-lg-3">

          <div className="card bg-warning text-dark shadow h-100">

            <div className="card-body text-center">

              <h5>Enseignants</h5>

              <h1>{teachers}</h1>

            </div>

          </div>

        </div>



        {/* Matières */}
        <div className="col-12 col-sm-6 col-lg-3">

          <div className="card bg-danger text-white shadow h-100">

            <div className="card-body text-center">

              <h5>Matières</h5>

              <h1>{subjects}</h1>

            </div>

          </div>

        </div>


      </div>

    </div>

  );

}


export default Dashboard;