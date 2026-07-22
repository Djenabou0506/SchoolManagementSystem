import { useEffect, useState } from "react";
import api from "../api/api";
import { Link } from "react-router-dom";


function Grades(){

const [grades,setGrades] = useState([]);


useEffect(()=>{

getGrades();

},[]);



const getGrades = async()=>{

try{

const response = await api.get("grades/");

setGrades(response.data);

}
catch(error){

console.log(error);

}

};



const deleteGrade = async(id)=>{


const confirmDelete = window.confirm(
"Voulez-vous supprimer cette note ?"
);


if(confirmDelete){

try{

await api.delete(`grades/${id}/`);

setGrades(
grades.filter(
(grade)=>grade.id !== id
)
);


alert("Note supprimée");

}
catch(error){

console.log(error);

}

}


};



return (

<div className="container-fluid">


<div className="d-flex justify-content-between align-items-center mb-3">


<h2>
📊 Liste des notes
</h2>


<Link
to="/add-grade"
className="btn btn-success"
>
➕ Ajouter note
</Link>


</div>



<table className="table table-bordered table-striped text-center">


<thead className="table-primary">

<tr>

<th>ID</th>
<th>Étudiant</th>
<th>Matière</th>
<th>Note</th>
<th>Semestre</th>
<th>Actions</th>

</tr>

</thead>



<tbody>


{
grades.map((grade)=>(

<tr key={grade.id}>


<td>
{grade.id}
</td>

<td>
{grade.student_prenom} {grade.student_nom}
</td>

<td>
{grade.subject_nom}
</td>


<td>
{grade.note}
</td>


<td>
{grade.semestre}
</td>


<td>

<Link

to={`/edit-grade/${grade.id}`}

className="btn btn-warning btn-sm me-2"

>
✏️ Modifier
</Link>



<button

className="btn btn-danger btn-sm"

onClick={()=>deleteGrade(grade.id)}

>
🗑️ Supprimer
</button>


</td>


</tr>


))

}


</tbody>


</table>


</div>


);


}


export default Grades;