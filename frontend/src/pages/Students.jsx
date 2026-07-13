import { useEffect, useState } from "react";
import api from "../api/api";

export default function Students() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    api.get("students/")
      .then((res) => setStudents(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h1>Liste des étudiants</h1>

      {students.map((s) => (
        <div key={s.id}>
          {s.prenom} {s.nom}
          
        </div>
      ))}
    </div>
  );
}
