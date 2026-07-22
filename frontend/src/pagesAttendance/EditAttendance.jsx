import { useEffect, useState } from "react";
import api from "../api/api";
import { useParams,useNavigate } from "react-router-dom";


function EditAttendance(){


const {id}=useParams();

const navigate=useNavigate();


const [students,setStudents]=useState([]);


const [attendance,setAttendance]=useState({

student:"",
date:"",
statut:"",
motif:""

});



useEffect(()=>{

getAttendance();
getStudents();

},[]);




const getAttendance=async()=>{

const response=await api.get(
`attendance/${id}/`
);


setAttendance(response.data);

};




const getStudents=async()=>{

const response=await api.get(
"students/"
);

setStudents(response.data);

};




const handleChange=(e)=>{

setAttendance({

...attendance,

[e.target.name]:e.target.value

});

};





const handleSubmit=async(e)=>{

e.preventDefault();


await api.put(

`attendance/${id}/`,

attendance

);


alert("Absence modifiée avec succès");


navigate("/attendance");


};





return (

<div className="container-fluid">


<div className="card shadow">


<div className="card-header bg-warning">

<h4>
✏️ Modifier une absence
</h4>

</div>


<div className="card-body">


<form onSubmit={handleSubmit}>


<select

className="form-control mb-3"

name="student"

value={attendance.student}

onChange={handleChange}

>


<option value="">
Choisir étudiant
</option>


{

students.map((student)=>(

<option

key={student.id}

value={student.id}

>

{student.prenom} {student.nom}

</option>

))

}


</select>





<input

type="date"

className="form-control mb-3"

name="date"

value={attendance.date}

onChange={handleChange}

/>





<select

className="form-control mb-3"

name="statut"

value={attendance.statut}

onChange={handleChange}

>


<option value="Absent">
Absent
</option>


<option value="Présent">
Présent
</option>


</select>





<textarea

className="form-control mb-3"

name="motif"

value={attendance.motif || ""}

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


export default EditAttendance;