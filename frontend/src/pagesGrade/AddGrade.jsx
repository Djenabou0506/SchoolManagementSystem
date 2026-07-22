import { useEffect, useState } from "react";
import api from "../api/api";
import { useNavigate } from "react-router-dom";


function AddGrade(){

const navigate = useNavigate();


const [students,setStudents] = useState([]);
const [subjects,setSubjects] = useState([]);


const [grade,setGrade] = useState({

student:"",
subject:"",
note:"",
semestre:""

});



useEffect(()=>{

getStudents();
getSubjects();

},[]);



const getStudents = async()=>{

const response = await api.get("students/");

setStudents(response.data);

};



const getSubjects = async()=>{

const response = await api.get("subjects/");

setSubjects(response.data);

};




const handleChange=(e)=>{

setGrade({

...grade,

[e.target.name]:e.target.value

});

};



const handleSubmit=async(e)=>{

e.preventDefault();


await api.post(
"grades/",
grade
);


alert("Note ajoutée avec succès");


navigate("/grades");


};




return (

<div className="container-fluid">


<div className="card shadow">


<div className="card-header bg-success text-white">

<h4>
➕ Ajouter une note
</h4>

</div>



<div className="card-body">


<form onSubmit={handleSubmit}>


<select

className="form-control mb-3"

name="student"

value={grade.student}

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





<select

className="form-control mb-3"

name="subject"

value={grade.subject}

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





<input

type="number"

className="form-control mb-3"

name="note"

placeholder="Note"

value={grade.note}

onChange={handleChange}

/>





<select

className="form-control mb-3"

name="semestre"

value={grade.semestre}

onChange={handleChange}

>


<option value="">
Choisir semestre
</option>

<option value="1">
Semestre 1
</option>

<option value="2">
Semestre 2
</option>

<option value="3">
Semestre 3
</option>


</select>





<button className="btn btn-success">

💾 Enregistrer

</button>


</form>


</div>


</div>


</div>


);


}


export default AddGrade;