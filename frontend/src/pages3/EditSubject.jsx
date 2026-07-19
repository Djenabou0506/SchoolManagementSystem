import {useState,useEffect} from "react";
import {useParams,useNavigate} from "react-router-dom";
import api from "../api/api";


function EditSubject(){


const {id}=useParams();

const navigate=useNavigate();



const [subject,setSubject]=useState({

nom:"",
coefficient:""

});





useEffect(()=>{

getSubject();

},[]);





const getSubject=async()=>{


const response=await api.get(
`subjects/${id}/`
);


setSubject(response.data);


};






const handleChange=(e)=>{


setSubject({

...subject,

[e.target.name]:e.target.value

});


};






const handleSubmit=async(e)=>{


e.preventDefault();



await api.put(

`subjects/${id}/`,

subject

);



alert(
"Modification réussie"
);



navigate("/subjects");



};






return (

<div className="container-fluid">


<div className="card shadow">


<div className="card-header bg-warning">

<h4>
✏️ Modifier matière
</h4>

</div>



<div className="card-body">


<form onSubmit={handleSubmit}>


<input

className="form-control mb-3"

name="nom"

value={subject.nom || ""}

onChange={handleChange}

/>




<textarea

className="form-control mb-3"

name="coefficient"

value={subject.coefficient || ""}

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


export default EditSubject;