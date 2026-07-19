import { useEffect, useState } from "react";
import api from "../api/api";
import { Link } from "react-router-dom";


function Students() {

  const [students, setStudents] = useState([]);
  const [search, setSearch] = useState("");


  useEffect(() => {
    getStudents();
  }, []);


  const getStudents = async () => {

    try {

      const response = await api.get("students/");
      setStudents(response.data);

    } catch(error) {

      console.log(error);

    }

  };
  const deleteStudent = async(id)=>{


  const confirmDelete = window.confirm(
    "Voulez-vous supprimer cet étudiant ?"
  );


  if(confirmDelete){


    try{

      await api.delete(`students/${id}/`);


      setStudents(
        students.filter(
          (student)=>student.id !== id
        )
      );


      alert("Étudiant supprimé");


    }catch(error){

      console.log(error);

    }


  }


};
const filteredStudents = students.filter((student)=>{

  const recherche = search.toLowerCase();

  return (

    student.id.toString().includes(recherche)
    ||
    String(student.telephone).includes(recherche)

  );

});


  return (

    <div className="container-fluid">


      <div className="d-flex justify-content-between align-items-center mb-3">

<h2>
Liste des étudiants
</h2>


<Link 
to="/add-student"
className="btn btn-success"
>
➕ Ajouter
</Link>


</div>


<div className="mb-3">

<input

type="text"

className="form-control"

placeholder="🔎 Rechercher par ID ou Téléphone"

value={search}

onChange={(e)=>setSearch(e.target.value)}

/>

</div>

      <div 
          className="table-responsive"
           style={{
           maxHeight: "500px",
             overflowY: "auto",
            overflowX: "auto"
      }}
>


        <table className="table table-bordered table-striped text-center align-middle">


          <thead className="table-primary">

            <tr>

              <th>ID</th>
              <th>Prénom</th>
              <th>Nom</th>
              <th>Date naissance</th>
              <th>Sexe</th>
              <th>Téléphone</th>
              <th>Classe</th>
              <th style={{width:"180px"}}>
                  Actions
              </th>

            </tr>

          </thead>



          <tbody>

          {
            filteredStudents.map((student)=>(

              <tr key={student.id}>

                <td>{student.id}</td>

                <td>{student.prenom}</td>

                <td>{student.nom}</td>

                <td>{student.date_naissance}</td>

                <td>{student.sexe}</td>

                <td>{student.telephone}</td>

                <td>
                  {student.classe_nom || "Non définie"}
                </td>

            <td>

  <div className="d-flex justify-content-center align-items-center gap-2 flex-nowrap">

    <Link

        to={`/edit-student/${student.id}`}

        className="btn btn-warning btn-sm"

      >

      ✏️ Modifier

    </Link>


    <button 
      className="btn btn-danger btn-sm"
      onClick={() => deleteStudent(student.id)}
    >
      🗑️ Supprimer
    </button>

  </div>

            </td>


              </tr>

            ))
          }


          </tbody>


        </table>


      </div>


    </div>

  );

}


export default Students;