import { useEffect, useState } from "react";
import api from "../api/api";
import { Link } from "react-router-dom";


function Subjects(){


const [subjects,setSubjects] = useState([]);

const [search,setSearch] = useState("");



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







const deleteSubject = async(id)=>{


const confirmDelete = window.confirm(
"Voulez-vous supprimer cette matière ?"
);



if(confirmDelete){


try{


await api.delete(
`subjects/${id}/`
);



setSubjects(

subjects.filter(

(subject)=>subject.id !== id

)

);



alert(
"Matière supprimée"
);



}catch(error){

console.log(error);

}



}



};








const filteredSubjects = subjects.filter((subject)=>{


const recherche = search.toLowerCase();



return (

subject.id.toString().includes(recherche)

||

subject.nom.toLowerCase().includes(recherche)

);



});







return (


<div className="container-fluid">



<div className="d-flex justify-content-between align-items-center mb-3">


<h2>
📚 Liste des matières
</h2>




<Link

to="/add-subject"

className="btn btn-success"

>

➕ Ajouter

</Link>



</div>







<div className="mb-3">


<input

type="text"

className="form-control"

placeholder="🔎 Rechercher par ID ou Nom"

value={search}

onChange={(e)=>setSearch(e.target.value)}


/>


</div>







<table className="table table-bordered table-striped text-center">


<thead className="table-primary">


<tr>

<th>ID</th>

<th>Nom</th>

<th>Coefficient</th>

<th>Actions</th>


</tr>


</thead>







<tbody>


{


filteredSubjects.map((subject)=>(


<tr key={subject.id}>


<td>

{subject.id}

</td>




<td>

{subject.nom}

</td>




<td>

{subject.coefficient || "Non définie"}

</td>





<td>


<Link

to={`/edit-subject/${subject.id}`}

className="btn btn-warning btn-sm me-2"

>

✏️ Modifier

</Link>





<button

className="btn btn-danger btn-sm"

onClick={()=>deleteSubject(subject.id)}

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



export default Subjects;