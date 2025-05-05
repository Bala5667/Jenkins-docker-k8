import React, { useEffect, useState } from "react";

function App() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetch("/api/students")
      .then((res) => res.json())
      .then(setStudents);
  }, []);

  return (
    <div>
      <h1>Student List</h1>
      <ul>
        {students.map((s) => (
          <li key={s.id}>{s.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
