import { useState,useEffect } from "react";
import {useParams,useNavigate} from "react-router-dom";
import api from "../api/api";


function EditTeacher(){


const {id}=useParams();

const navigate=useNavigate();



const [teacher,setTeacher]=useState({

prenom:"",
nom:"",
specialite:"",
telephone:"",
subject:""

});





useEffect(()=>{

getTeacher();

},[]);





const getTeacher=async()=>{


try{


const response=await api.get(
`teachers/${id}/`
);


setTeacher(response.data);



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


await api.put(

`teachers/${id}/`,

teacher

);



alert(
"Modification réussie"
);


navigate("/teachers");



}catch(error){

console.log(error);

}



};






return (

<div className="container-fluid">


<div className="card shadow">


<div className="card-header bg-warning">

<h4>
✏️ Modifier enseignant
</h4>


</div>




<div className="card-body">


<form onSubmit={handleSubmit}>


<input

className="form-control mb-3"

name="prenom"

value={teacher.prenom || ""}

onChange={handleChange}

/>



<input

className="form-control mb-3"

name="nom"

value={teacher.nom || ""}

onChange={handleChange}

/>




<input

className="form-control mb-3"

name="specialite"

value={teacher.specialite || ""}

onChange={handleChange}

/>




<input

className="form-control mb-3"

name="telephone"

value={teacher.telephone || ""}

onChange={handleChange}

/>




<button className="btn btn-success">

💾 Enregistrer modification

</button>



</form>



</div>



</div>



</div>


);


}


export default EditTeacher;