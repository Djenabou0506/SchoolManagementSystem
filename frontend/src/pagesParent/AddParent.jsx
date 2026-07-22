import {useEffect,useState} from "react";
import api from "../api/api";
import {useNavigate} from "react-router-dom";


function AddParent(){

const navigate=useNavigate();


const [students,setStudents]=useState([]);


const [parent,setParent]=useState({

student:"",
nom:"",
prenom:"",
telephone:"",
relation:""

});



useEffect(()=>{

api.get("students/")
.then(res=>setStudents(res.data));

},[]);



const handleChange=(e)=>{

setParent({

...parent,

[e.target.name]:e.target.value

});

};




const handleSubmit=async(e)=>{

e.preventDefault();


await api.post(
"parents/",
parent
);


alert("Parent ajouté");


navigate("/parents");


};





return (

<div className="container">


<h3>
➕ Ajouter Parent
</h3>


<form onSubmit={handleSubmit}>


<select
className="form-control mb-3"
name="student"
onChange={handleChange}
>


<option>
Choisir élève
</option>


{
students.map(student=>(

<option value={student.id} key={student.id}>

{student.prenom} {student.nom}

</option>

))
}


</select>




<input
className="form-control mb-3"
name="prenom"
placeholder="Prénom"
onChange={handleChange}
/>



<input
className="form-control mb-3"
name="nom"
placeholder="Nom"
onChange={handleChange}
/>




<input
className="form-control mb-3"
name="telephone"
placeholder="Téléphone"
onChange={handleChange}
/>




<select
className="form-control mb-3"
name="relation"
onChange={handleChange}
>


<option>
Relation
</option>

<option value="Père">
Père
</option>

<option value="Mère">
Mère
</option>

<option value="Tuteur">
Tuteur
</option>


</select>




<button className="btn btn-success">

💾 Enregistrer

</button>



</form>


</div>

);


}


export default AddParent;