import { useState } from "react";
import api from "../api/api";
import {useNavigate} from "react-router-dom";


function AddSubject(){


const navigate = useNavigate();



const [subject,setSubject]=useState({

nom:"",
coefficient:""

});





const handleChange=(e)=>{


setSubject({

...subject,

[e.target.name]:e.target.value

});


};






const handleSubmit=async(e)=>{


e.preventDefault();



try{


await api.post(
"subjects/",
subject
);



alert(
"Matière ajoutée avec succès"
);



navigate("/subjects");



}catch(error){

console.log(error);

}



};






return (


<div className="container-fluid">


<div className="card shadow">


<div className="card-header bg-primary text-white">

<h4>
📚 Ajouter une matière
</h4>

</div>



<div className="card-body">


<form onSubmit={handleSubmit}>


<input

className="form-control mb-3"

placeholder="Nom matière"

name="nom"

value={subject.nom}

onChange={handleChange}

/>




<textarea

className="form-control mb-3"

name="coefficient"

value={subject.coefficient}

onChange={handleChange}


/>





<button className="btn btn-success">

💾 Enregistrer

</button>



</form>


</div>


</div>


</div>


);


}


export default AddSubject;