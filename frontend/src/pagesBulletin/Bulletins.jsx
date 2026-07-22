import { useEffect, useState } from "react";
import api from "../api/api";
import "./Bulletins.css";


function Bulletins(){

const [students,setStudents] = useState([]);
const [student,setStudent] = useState("");
const [bulletin,setBulletin] = useState(null);



useEffect(()=>{

getStudents();

},[]);



const getStudents = async()=>{

try{

const response = await api.get("students/");
setStudents(response.data);

}catch(error){

console.log(error);

}

};





const getBulletin = async(id)=>{

try{

const response = await api.get(
`bulletins/${id}/`
);

setBulletin(response.data);


}catch(error){

console.log(error);

}

};





const imprimer = ()=>{

window.print();

};






return (

<div className="container-fluid">


<h2 className="mb-4 no-print">
📄 Bulletin scolaire
</h2>



<select

className="form-select mb-4 no-print"

value={student}

onChange={(e)=>{

setStudent(e.target.value);
getBulletin(e.target.value);

}}

>


<option>
Choisir un élève
</option>


{
students.map((s)=>(

<option key={s.id} value={s.id}>

{s.prenom} {s.nom}

</option>

))

}


</select>





{

bulletin && (


<div id="bulletin-print">


<h3 className="text-center">
ECOLE PRIMAIRE - COLLEGE - LYCEE
</h3>


<hr/>


<h5>
👨‍🎓 Élève : {bulletin.student_nom}
</h5>


<h5>
🏫 Niveau : {bulletin.niveau}
</h5>


<h5>
📚 Classe : {bulletin.classe}
</h5>


<h5>
📅 Année scolaire : 2025-2026
</h5>



<table className="table table-bordered text-center mt-4">


<thead>

<tr>

<th>Matière</th>

<th>Note</th>

<th>Coefficient</th>

</tr>

</thead>



<tbody>


{

bulletin.notes.map((note,index)=>(

<tr key={index}>

<td>
{note.matiere}
</td>


<td>
{note.note}/20
</td>


<td>
{note.coefficient}
</td>


</tr>

))

}


</tbody>


</table>




<h4>
📊 Moyenne générale :
{bulletin.moyenne_generale}/20
</h4>


<h4>
🏅 Mention :
{bulletin.mention}
</h4>




<button

className="btn btn-primary no-print"

onClick={imprimer}

>

🖨️ Imprimer

</button>



</div>


)


}



</div>


);


}


export default Bulletins;