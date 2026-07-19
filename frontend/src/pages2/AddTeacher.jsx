import { useState, useEffect } from "react";
import api from "../api/api";
import { useNavigate } from "react-router-dom";

import {
 FaUser,
 FaPhone,
 FaBook,
 FaSave
} from "react-icons/fa";


function AddTeacher(){


const navigate = useNavigate();


const [subjects,setSubjects] = useState([]);



const [teacher,setTeacher] = useState({

    prenom:"",
    nom:"",
    specialite:"",
    telephone:"",
    subject:""

});




useEffect(()=>{

    getSubjects();

},[]);





const getSubjects = async()=>{


try{

const response = await api.get("subjects/");

setSubjects(response.data);


}catch(error){

console.log(error);

}


};






const handleChange=(e)=>{


setTeacher({

...teacher,

[e.target.name]:e.target.value

});


};






const handleSubmit=async(e)=>{


e.preventDefault();


try{


await api.post(
"teachers/",
teacher
);



alert(
"Enseignant ajouté avec succès"
);



navigate("/teachers");



}catch(error){

console.log(error);

}



};







return (

<div className="container-fluid">


<div className="card shadow-lg">


<div className="card-header bg-primary text-white">

<h4>
👨‍🏫 Ajouter un enseignant
</h4>

</div>



<div className="card-body">


<form onSubmit={handleSubmit}>


<div className="row">



<div className="col-md-6 mb-3">

<label>
<FaUser/> Prénom
</label>


<input

className="form-control"

name="prenom"

value={teacher.prenom}

onChange={handleChange}

/>


</div>




<div className="col-md-6 mb-3">

<label>
<FaUser/> Nom
</label>


<input

className="form-control"

name="nom"

value={teacher.nom}

onChange={handleChange}

/>


</div>





<div className="col-md-6 mb-3">

<label>
Spécialité
</label>


<input

className="form-control"

name="specialite"

value={teacher.specialite}

onChange={handleChange}

/>


</div>





<div className="col-md-6 mb-3">

<label>
<FaPhone/> Téléphone
</label>


<input

className="form-control"

name="telephone"

value={teacher.telephone}

onChange={handleChange}

/>


</div>





<div className="col-md-6 mb-3">

<label>
<FaBook/> Matière
</label>



<select

className="form-select"

name="subject"

value={teacher.subject}

onChange={handleChange}

>


<option value="">
Choisir matière
</option>



{

subjects.map((subject)=>(


<option

key={subject.id}

value={subject.id}

>

{subject.nom}

</option>


))


}


</select>



</div>



</div>




<div className="text-end">


<button className="btn btn-success">


<FaSave/> Enregistrer


</button>


</div>




</form>


</div>


</div>


</div>


);


}


export default AddTeacher;