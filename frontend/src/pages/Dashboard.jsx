import { useEffect, useState } from "react";
import api from "../api/api";


function Dashboard() {


  const [students, setStudents] = useState(0);
  const [classes, setClasses] = useState(0);
  const [teachers, setTeachers] = useState(0);
  const [subjects, setSubjects] = useState(0);

  const [parents, setParents] = useState(0);
  const [grades, setGrades] = useState(0);
  const [attendance, setAttendance] = useState(0);



  useEffect(() => {

    loadStatistics();

  }, []);





  const loadStatistics = async () => {


    try {


      const studentsResponse = await api.get("students/");
      const classesResponse = await api.get("classes/");
      const teachersResponse = await api.get("teachers/");
      const subjectsResponse = await api.get("subjects/");

      const parentsResponse = await api.get("parents/");
      const gradesResponse = await api.get("grades/");
      const attendanceResponse = await api.get("attendance/");



      setStudents(studentsResponse.data.length);
      setClasses(classesResponse.data.length);
      setTeachers(teachersResponse.data.length);
      setSubjects(subjectsResponse.data.length);

      setParents(parentsResponse.data.length);
      setGrades(gradesResponse.data.length);
      setAttendance(attendanceResponse.data.length);



    } catch(error) {

      console.log(error);

    }


  };






  const Card = ({color, title, value}) => (

    <div className="flex-fill">

      <div className={`card ${color} text-white shadow h-100`}>

        <div className="card-body text-center p-2">


          <h6 className="mb-1">

            {title}

          </h6>


          <h3 className="mb-0">

            {value}

          </h3>


        </div>


      </div>


    </div>

  );






  return (


    <div className="container-fluid">


      <h3 className="text-center mb-3">

        📊 Tableau de bord

      </h3>






      <div className="d-flex gap-2 flex-nowrap">



        <Card
          color="bg-primary"
          title="👨‍🎓 Étudiants"
          value={students}
        />



        <Card
          color="bg-success"
          title="🏫 Classes"
          value={classes}
        />



        <Card
          color="bg-warning text-dark"
          title="👨‍🏫 Enseignants"
          value={teachers}
        />



        <Card
          color="bg-danger"
          title="📚 Matières"
          value={subjects}
        />



        <Card
          color="bg-info"
          title="👨‍👩‍👧 Parents"
          value={parents}
        />



        <Card
          color="bg-secondary"
          title="📊 Notes"
          value={grades}
        />



        <Card
          color="bg-dark"
          title="📅 Absences"
          value={attendance}
        />



      </div>


    </div>


  );


}


export default Dashboard;