import { useEffect, useState } from "react";
import api from "../api/api";
import { Link } from "react-router-dom";


function Attendance(){


const [attendances,setAttendances] = useState([]);



useEffect(()=>{

getAttendances();

},[]);




const getAttendances = async()=>{

try{

const response = await api.get("attendance/");

setAttendances(response.data);


}catch(error){

console.log(error);

}

};





const deleteAttendance = async(id)=>{


const confirmDelete = window.confirm(
"Voulez-vous supprimer cette absence ?"
);



if(confirmDelete){


try{


await api.delete(
`attendance/${id}/`
);



setAttendances(

attendances.filter(

(attendance)=>attendance.id !== id

)

);



alert("Absence supprimée");


}catch(error){

console.log(error);

}


}


};







return (


<div className="container-fluid">



<div className="d-flex justify-content-between align-items-center mb-3">


<h2>
📅 Liste des absences
</h2>



<Link

to="/add-attendance"

className="btn btn-success"

>

➕ Ajouter absence

</Link>


</div>






<table className="table table-bordered table-striped text-center align-middle">



<thead className="table-primary">


<tr>

<th>ID</th>

<th>Étudiant</th>

<th>Date</th>

<th>Statut</th>

<th>Motif</th>

<th>Actions</th>


</tr>


</thead>






<tbody>


{

attendances.map((attendance)=>(


<tr key={attendance.id}>


<td>

{attendance.id}

</td>





<td>

{attendance.student_prenom} {attendance.student_nom}

</td>





<td>

{attendance.date}

</td>





<td>

{attendance.statut}

</td>





<td>

{attendance.motif || "Aucun motif"}

</td>







<td>


<Link

to={`/edit-attendance/${attendance.id}`}

className="btn btn-warning btn-sm me-2"

>

✏️ Modifier

</Link>





<button

className="btn btn-danger btn-sm"

onClick={()=>deleteAttendance(attendance.id)}

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



export default Attendance;