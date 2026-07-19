import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../api/api";

import {
  FaSchool,
  FaCalendarAlt,
  FaChalkboardTeacher
} from "react-icons/fa";


function EditClasse(){

  const {id} = useParams();

  const navigate = useNavigate();


  const [teachers,setTeachers] = useState([]);


  const [classe,setClasse] = useState({

    nom:"",
    annee_scolaire:"",
    teacher:""

  });



  useEffect(()=>{

    getClasse();
    getTeachers();

  },[]);





  // récupérer la classe

  const getClasse = async()=>{

    try{

      const response = await api.get(
        `classes/${id}/`
      );


      setClasse(response.data);


    }catch(error){

      console.log(error);

    }

  };






  // récupérer enseignants

  const getTeachers = async()=>{

    try{

      const response = await api.get(
        "teachers/"
      );


      setTeachers(response.data);


    }catch(error){

      console.log(error);

    }

  };







  const handleChange=(e)=>{


    setClasse({

      ...classe,

      [e.target.name]:e.target.value

    });


  };








  const handleSubmit=async(e)=>{

    e.preventDefault();


    try{


      await api.put(

        `classes/${id}/`,

        classe

      );



      alert(
        "Modification réussie"
      );



      navigate("/classes");



    }catch(error){

      console.log(error);

    }


  };







return (

<div className="container-fluid">


<div className="card shadow-lg">



<div className="card-header bg-warning">


<h4 className="mb-0">

✏️ Modifier classe

</h4>


</div>





<div className="card-body">



<form onSubmit={handleSubmit}>


<div className="row">





<div className="col-md-6 mb-3">


<label className="form-label">

<FaSchool/> Nom de la classe

</label>


<input


className="form-control"


name="nom"


value={classe.nom || ""}


onChange={handleChange}


/>


</div>







<div className="col-md-6 mb-3">


<label className="form-label">

<FaCalendarAlt/> Année scolaire

</label>



<input


className="form-control"


name="annee_scolaire"


value={classe.annee_scolaire || ""}


onChange={handleChange}


/>


</div>








<div className="col-md-6 mb-3">


<label className="form-label">

<FaChalkboardTeacher/> Enseignant

</label>




<select


className="form-select"


name="teacher"


value={classe.teacher || ""}


onChange={handleChange}



>


<option value="">

Choisir un enseignant

</option>



{

teachers.map((teacher)=>(


<option

key={teacher.id}

value={teacher.id}

>

{teacher.nom || teacher.username}


</option>


))


}



</select>



</div>





</div>








<div className="text-end">


<button

className="btn btn-success px-4"

>


💾 Enregistrer modification


</button>



</div>




</form>




</div>




</div>




</div>


);


}


export default EditClasse;