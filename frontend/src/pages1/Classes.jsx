import { useEffect, useState } from "react";
import api from "../api/api";
import { Link } from "react-router-dom";


function Classes(){

  const [classes, setClasses] = useState([]);


  useEffect(()=>{

    getClasses();

  },[]);



  const getClasses = async()=>{

    try{

      const response = await api.get("classes/");
      setClasses(response.data);

    }catch(error){

      console.log(error);

    }

  };



  const deleteClasse = async(id)=>{


    const confirmDelete = window.confirm(
      "Voulez-vous supprimer cette classe ?"
    );


    if(confirmDelete){

      try{

        await api.delete(`classes/${id}/`);

        setClasses(
          classes.filter(
            (classe)=>classe.id !== id
          )
        );


        alert("Classe supprimée");


      }catch(error){

        console.log(error);

      }

    }

  };




return (

<div className="container-fluid">


<div className="d-flex justify-content-between align-items-center mb-4">


<h2>
📚 Liste des classes
</h2>


<Link
to="/add-classe"
className="btn btn-success"
>

➕ Ajouter

</Link>


</div>




<div className="table-responsive">


<table className="table table-bordered table-striped text-center align-middle">


<thead className="table-primary">

<tr>

<th>ID</th>

<th>Nom de la classe</th>
<th>Année scolaire</th>
<th>Teacher</th>
<th>Actions</th>

</tr>


</thead>



<tbody>


{

classes.map((classe)=>(


<tr key={classe.id}>


<td>
{classe.id}
</td>



<td>
{classe.nom}
</td>

<td>
{classe.annee_scolaire}
</td>

<td>
{classe.teacher}
</td>


<td>


<div className="d-flex justify-content-center gap-2">


<Link

to={`/edit-classe/${classe.id}`}

className="btn btn-warning btn-sm"

>

✏️ Modifier

</Link>



<button

className="btn btn-danger btn-sm"

onClick={()=>deleteClasse(classe.id)}

>

🗑️ Supprimer

</button>



</div>


</td>



</tr>


))


}



</tbody>


</table>


</div>



</div>


);


}


export default Classes;