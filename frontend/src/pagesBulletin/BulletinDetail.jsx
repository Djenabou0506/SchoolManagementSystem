import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../api/api";
import "./Bulletins.css";


function BulletinDetail(){

const {id} = useParams();

const [bulletin,setBulletin] = useState(null);


useEffect(()=>{

getBulletin();

},[]);



const getBulletin = async()=>{

try{

const response = await api.get(
`bulletins/${id}/`
);

setBulletin(response.data);


}catch(error){

console.log(error);

}

};



if(!bulletin){

return (

<div className="text-center">
<h4>Chargement...</h4>
</div>

);

}



return (

<div className="container-fluid">


{/* Partie impression */}

<div className="bulletin-print">


<div className="text-center">

<img 
src="/logo.png"
alt="Logo école"
className="logo"
/>


<h3>
ECOLE PRIMAIRE - COLLEGE - LYCEE
</h3>


<hr/>

</div>



<div className="infos">


<p>
👨‍🎓 <b>Élève :</b> {bulletin.student_nom}
</p>


<p>
🏫 <b>Niveau :</b> {bulletin.niveau}
</p>


<p>
📚 <b>Classe :</b> {bulletin.classe}
</p>


<p>
📅 <b>Année scolaire :</b> 2025-2026
</p>


</div>





<table className="table table-bordered text-center">


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




<div className="signatures">


<div>

<p>Le professeur</p>

<br/>
<br/>

Signature

</div>




<div>

<p>Le directeur</p>

<br/>
<br/>

Signature et cachet

</div>


</div>




</div>





<button

className="btn btn-dark mt-4 no-print"

onClick={()=>window.print()}

>

🖨️ Imprimer

</button>



</div>


);


}


export default BulletinDetail;