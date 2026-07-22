import {useEffect,useState} from "react";
import api from "../api/api";
import {useParams,useNavigate} from "react-router-dom";


function EditParent(){


const {id}=useParams();

const navigate=useNavigate();


const [parent,setParent]=useState({

student:"",
nom:"",
prenom:"",
telephone:"",
relation:""

});




useEffect(()=>{

api.get(`parents/${id}/`)
.then(res=>setParent(res.data));


},[]);




const handleChange=(e)=>{

setParent({

...parent,

[e.target.name]:e.target.value

});

};




const handleSubmit=async(e)=>{

e.preventDefault();


await api.put(

`parents/${id}/`,

parent

);


alert("Modification réussie");


navigate("/parents");


};




return (

<div className="container">


<h3>
✏️ Modifier Parent
</h3>


<form onSubmit={handleSubmit}>


<input
className="form-control mb-3"
name="prenom"
value={parent.prenom}
onChange={handleChange}
/>



<input
className="form-control mb-3"
name="nom"
value={parent.nom}
onChange={handleChange}
/>



<input
className="form-control mb-3"
name="telephone"
value={parent.telephone}
onChange={handleChange}
/>




<button className="btn btn-success">

💾 Modifier

</button>


</form>


</div>

);


}


export default EditParent;