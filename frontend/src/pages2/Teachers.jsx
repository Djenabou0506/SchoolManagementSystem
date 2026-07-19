import { useEffect, useState } from "react";
import api from "../api/api";
import { Link } from "react-router-dom";


function Teachers(){


  const [teachers,setTeachers] = useState([]);

  const [search,setSearch] = useState("");



  useEffect(()=>{

    getTeachers();

  },[]);




  const getTeachers = async()=>{

    try{

      const response = await api.get("teachers/");

      setTeachers(response.data);


    }catch(error){

      console.log(error);

    }

  };





  const deleteTeacher = async(id)=>{


    const confirmDelete = window.confirm(
      "Voulez-vous supprimer cet enseignant ?"
    );



    if(confirmDelete){


      try{


        await api.delete(
          `teachers/${id}/`
        );



        setTeachers(

          teachers.filter(

            (teacher)=>teacher.id !== id

          )

        );



        alert(
          "Enseignant supprimé"
        );



      }catch(error){

        console.log(error);

      }


    }


  };







  const filteredTeachers = teachers.filter((teacher)=>{


    const recherche = search.toLowerCase();



    return (

      teacher.id.toString().includes(recherche)

      ||

      String(teacher.telephone).includes(recherche)

    );


  });







return (


<div className="container-fluid">



<div className="d-flex justify-content-between align-items-center mb-3">


<h2>
Liste des enseignants
</h2>



<Link

to="/add-teacher"

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

maxHeight:"500px",

overflowY:"auto",

overflowX:"auto"

}}

>





<table className="table table-bordered table-striped text-center align-middle">



<thead className="table-primary">


<tr>


<th>ID</th>

<th>Prénom</th>

<th>Nom</th>

<th>Spécialité</th>

<th>Téléphone</th>

<th>Matière</th>

<th>
Actions
</th>


</tr>



</thead>







<tbody>


{


filteredTeachers.map((teacher)=>(



<tr key={teacher.id}>


<td>

{teacher.id}

</td>



<td>

{teacher.prenom}

</td>




<td>

{teacher.nom}

</td>





<td>

{teacher.specialite}

</td>





<td>

{teacher.telephone}

</td>





<td>

{

teacher.subject_nom || "Non définie"

}


</td>






<td>


<div className="d-flex justify-content-center align-items-center gap-2 flex-nowrap">



<Link


to={`/edit-teacher/${teacher.id}`}


className="btn btn-warning btn-sm"


>


✏️ Modifier


</Link>





<button


className="btn btn-danger btn-sm"


onClick={()=>deleteTeacher(teacher.id)}


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



export default Teachers;