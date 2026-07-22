import { useEffect, useState } from "react";
import api from "../api/api";
import { useParams, useNavigate } from "react-router-dom";


function EditGrade(){

const {id} = useParams();

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

getGrade();
getStudents();
getSubjects();

},[]);




const getGrade = async()=>{

try{

const response = await api.get(
`grades/${id}/`
);


setGrade(response.data);


}catch(error){

console.log(error);

}

};




const getStudents = async()=>{

const response = await api.get(
"students/"
);

setStudents(response.data);

};




const getSubjects = async()=>{

const response = await api.get(
"subjects/"
);

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


try{


await api.put(

`grades/${id}/`,

grade

);


alert(
"Note modifiée avec succès"
);


navigate("/grades");



}catch(error){

console.log(error);

}



};







return (

<div className="container-fluid">


<div className="card shadow">


<div className="card-header bg-warning">

<h4>
✏️ Modifier une note
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

value={grade.note}

onChange={handleChange}

placeholder="Note"

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

💾 Enregistrer modification

</button>



</form>


</div>


</div>


</div>


);


}


export default EditGrade;