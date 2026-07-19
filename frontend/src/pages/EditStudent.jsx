import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../api/api";

import {
  FaUser,
  FaCalendar,
  FaPhone,
  FaSchool,
  FaSave
} from "react-icons/fa";


function EditStudent(){

  const {id} = useParams();

  const navigate = useNavigate();


  const [classes, setClasses] = useState([]);


  const [student,setStudent] = useState({

    prenom:"",
    nom:"",
    date_naissance:"",
    sexe:"",
    telephone:"",
    classe:""

  });



  useEffect(()=>{

    getStudent();
    getClasses();

  },[]);



  // récupérer étudiant

  const getStudent = async()=>{

    try{

      const response = await api.get(
        `students/${id}/`
      );

      setStudent(response.data);


    }catch(error){

      console.log(error);

    }

  };




  // récupérer classes

  const getClasses = async()=>{

    try{

      const response = await api.get(
        "classes/"
      );

      setClasses(response.data);


    }catch(error){

      console.log(error);

    }

  };





  const handleChange=(e)=>{

    setStudent({

      ...student,

      [e.target.name]:e.target.value

    });

  };






  const handleSubmit=async(e)=>{

    e.preventDefault();


    try{


      await api.put(

        `students/${id}/`,

        student

      );


      alert(
        "Étudiant modifié avec succès"
      );


      navigate("/students");


    }catch(error){

      console.log(error);

    }

  };





return (

<div className="container-fluid">


<div className="card shadow-lg">


<div className="card-header bg-warning">


<h4 className="mb-0">

✏️ Modifier étudiant

</h4>


</div>




<div className="card-body">


<form onSubmit={handleSubmit}>


<div className="row">





<div className="col-md-6 mb-3">

<label className="form-label">

<FaUser/> Prénom

</label>


<input

className="form-control"

name="prenom"

value={student.prenom || ""}

onChange={handleChange}

/>


</div>







<div className="col-md-6 mb-3">

<label className="form-label">

<FaUser/> Nom

</label>


<input

className="form-control"

name="nom"

value={student.nom || ""}

onChange={handleChange}

/>


</div>







<div className="col-md-6 mb-3">

<label className="form-label">

<FaCalendar/> Date naissance

</label>


<input

type="date"

className="form-control"

name="date_naissance"

value={student.date_naissance || ""}

onChange={handleChange}

/>


</div>







<div className="col-md-6 mb-3">

<label className="form-label">

Sexe

</label>


<select

className="form-select"

name="sexe"

value={student.sexe || ""}

onChange={handleChange}

>


<option value="">
Choisir
</option>


<option value="masculin">
Masculin
</option>


<option value="féminin">
Féminin
</option>


</select>


</div>







<div className="col-md-6 mb-3">

<label className="form-label">

<FaPhone/> Téléphone

</label>


<input

className="form-control"

name="telephone"

value={student.telephone || ""}

onChange={handleChange}

/>


</div>








<div className="col-md-6 mb-3">

<label className="form-label">

<FaSchool/> Classe

</label>


<select

className="form-select"

name="classe"

value={student.classe || ""}

onChange={handleChange}

>


<option value="">
Choisir une classe
</option>



{

classes.map((classe)=>(

<option

key={classe.id}

value={classe.id}

>

{classe.nom}

</option>


))

}



</select>


</div>




</div>





<div className="text-end">


<button className="btn btn-success px-4">

<FaSave/> Enregistrer modification

</button>


</div>





</form>


</div>


</div>


</div>


);


}


export default EditStudent;