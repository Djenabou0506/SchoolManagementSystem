import { useEffect, useState } from "react";
import api from "../api/api";

function Classes() {

  const [classes, setClasses] = useState([]);

  useEffect(() => {
    getClasses();
  }, []);


  const getClasses = async () => {
    try {
      const response = await api.get("classes/");
      setClasses(response.data);
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <div>

      <h1>📚 Liste des classes</h1>

      <table border="1">

        <thead>
          <tr>
            <th>ID</th>
            <th>Classe</th>
            <th>Niveau</th>
            <th>Année scolaire</th>
          </tr>
        </thead>


        <tbody>

          {classes.map((classe) => (

            <tr key={classe.id}>

              <td>{classe.id}</td>

              <td>{classe.classe_nom}</td>

              <td>{classe.niveau}</td>

              <td>{classe.annee_scolaire}</td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}


export default Classes;