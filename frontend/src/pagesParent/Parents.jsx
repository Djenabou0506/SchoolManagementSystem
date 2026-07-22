import { useEffect, useState } from "react";
import api from "../api/api";
import { Link } from "react-router-dom";


function Parents(){

const [parents,setParents] = useState([]);



useEffect(()=>{

getParents();

},[]);



const getParents = async()=>{

const response = await api.get("parents/");

setParents(response.data);

};





const deleteParent = async(id)=>{


if(window.confirm("Supprimer ce parent ?")){


await api.delete(
`parents/${id}/`
);


setParents(

parents.filter(
(parent)=>parent.id !== id
)

);


alert("Parent supprimé");

}


};





return (

<div className="container-fluid">


<div className="d-flex justify-content-between mb-3">


<h2>
👨‍👩‍👧 Liste des parents
</h2>


<Link
to="/add-parent"
className="btn btn-success"
>

➕ Ajouter

</Link>


</div>





<table className="table table-bordered text-center">


<thead className="table-primary">

<tr>

<th>Nom</th>
<th>Téléphone</th>
<th>Relation</th>
<th>Élève</th>
<th>Actions</th>

</tr>

</thead>



<tbody>


{
parents.map((parent)=>(


<tr key={parent.id}>


<td>
{parent.prenom} {parent.nom}
</td>


<td>
{parent.telephone}
</td>


<td>
{parent.relation}
</td>


<td>
{parent.student_prenom} {parent.student_nom}
</td>



<td>


<Link

to={`/edit-parent/${parent.id}`}

className="btn btn-warning btn-sm me-2"

>
✏️ Modifier
</Link>



<button

className="btn btn-danger btn-sm"

onClick={()=>deleteParent(parent.id)}

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


export default Parents;