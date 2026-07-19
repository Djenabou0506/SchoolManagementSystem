import { useState, useEffect } from "react";
import api from "../api/api";
import { useNavigate } from "react-router-dom";

import {
  FaUser,
  FaCalendar,
  FaPhone,
  FaSchool,
  FaSave
} from "react-icons/fa";


function AddStudent() {


  const navigate = useNavigate();


  const [classes, setClasses] = useState([]);


  const [student, setStudent] = useState({

    prenom:"",
    nom:"",
    date_naissance:"",
    sexe:"",
    telephone:"",
    classe:""

  });



  useEffect(()=>{

    getClasses();

  },[]);



  const getClasses = async()=>{

    try{

      const response = await api.get("classes/");
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


      await api.post("students/",student);


      alert("Étudiant ajouté avec succès");


      navigate("/students");


    }catch(error){

      console.log(error);

    }

  };



return (

<div className="container-fluid">


<div className="card shadow-lg">


<div className="card-header bg-primary text-white">

<h4 className="mb-0">
🎓 Ajouter un étudiant
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

type="text"

name="prenom"

value={student.prenom}

className="form-control"

placeholder="Entrer le prénom"

onChange={handleChange}

/>

</div>



<div className="col-md-6 mb-3">

<label className="form-label">
<FaUser/> Nom
</label>

<input

type="text"

name="nom"

value={student.nom}

className="form-control"

placeholder="Entrer le nom"

onChange={handleChange}

/>

</div>



<div className="col-md-6 mb-3">

<label className="form-label">
<FaCalendar/> Date naissance
</label>

<input

type="date"

name="date_naissance"

value={student.date_naissance}

className="form-control"

onChange={handleChange}

/>

</div>



<div className="col-md-6 mb-3">

<label className="form-label">
Sexe
</label>


<select

name="sexe"

value={student.sexe}

className="form-select"

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

type="text"

name="telephone"

value={student.telephone}

className="form-control"

placeholder="Téléphone"

onChange={handleChange}

/>


</div>




<div className="col-md-6 mb-3">

<label className="form-label">
<FaSchool/> Classe
</label>


<select

name="classe"

value={student.classe}

className="form-select"

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

<FaSave/> Enregistrer

</button>


</div>


</form>


</div>


</div>


</div>

);


}


export default AddStudent;