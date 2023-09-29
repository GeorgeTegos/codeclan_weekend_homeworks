import { useState } from "react";
import EditForm from "./EditForm";
import TeaBiscuitForm from "./TeaBiscuitForm";
const TeaList = ({ teas, handleTeaDelete, fetchTeas }) => {
  const [edit, setEdit] = useState(false);
  return (
    <div id="tea-list">
      <h2>All the teas!</h2>
      <ul>
        {teas.map((tea) => {
          return (
            <li key={tea.id}>
              {tea.name} by {tea.brand}
              <button onClick={() => handleTeaDelete(tea)}>Delete</button>
              <button onClick={() => setEdit(!edit)}>Edit</button>
              {edit == true && (
                <EditForm
                  fetchTeas={fetchTeas}
                  tea={tea}
                />
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TeaList;
