import { useState, useEffect } from "react";
import api from "../api/api";
import { useNavigate } from "react-router-dom";

import {
  FaSchool,
  FaCalendarAlt,
  FaChalkboardTeacher,
  FaSave
} from "react-icons/fa";


function AddClasse() {


  const navigate = useNavigate();


  const [teachers, setTeachers] = useState([]);


  const [classe, setClasse] = useState({

    nom:"",
    annee_scolaire:"",
    teacher:""

  });



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




  const handleChange=(e)=>{

    setClasse({

      ...classe,
      [e.target.name]:e.target.value

    });

  };





  const handleSubmit=async(e)=>{

    e.preventDefault();


    try{


      await api.post(
        "classes/",
        classe
      );


      alert(
        "Classe ajoutée avec succès"
      );


      navigate("/classes");


    }catch(error){

      console.log(error);

    }


  };





return (

<div className="container-fluid">


<div className="card shadow-lg">



<div className="card-header bg-primary text-white">

<h4 className="mb-0">

🎓 Ajouter une classe

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

type="text"

name="nom"

value={classe.nom}

className="form-control"

placeholder="Exemple : 5em A"

onChange={handleChange}

/>


</div>







<div className="col-md-6 mb-3">


<label className="form-label">

<FaCalendarAlt/> Année scolaire

</label>


<input

type="text"

name="annee_scolaire"

value={classe.annee_scolaire}

className="form-control"

placeholder="Exemple : 2025-2026"

onChange={handleChange}

/>


</div>







<div className="col-md-6 mb-3">


<label className="form-label">

<FaChalkboardTeacher/> Enseignant

</label>



<select

name="teacher"

value={classe.teacher}

className="form-select"

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


<FaSave/>

 Enregistrer


</button>


</div>




</form>



</div>



</div>



</div>


);


}


export default AddClasse;