import { useState } from "react";
import EditBiscuitForm from "./EditBiscuitForm";

const BiscuitList = ({ biscuits, handleBiscuitDelete, fetchBiscuits }) => {
  const [edit, setEdit] = useState(false);

  return (
    <div id="biscuit-list">
      <h2>All the biccys!</h2>
      <ul>
        {biscuits.map((biscuit) => {
          return (
            <li
              key={biscuit.id}
              style={{ margin: "10px", textDecoration: "underline " }}
            >
              {biscuit.name} by {biscuit.brand}
              <button onClick={() => handleBiscuitDelete(biscuit)}>
                Delete
              </button>
              <button onClick={() => setEdit(!edit)}>Edit</button>
              {edit == true && (
                <EditBiscuitForm
                  fetchBiscuits={fetchBiscuits}
                  biscuit={biscuit}
                  setEdit={setEdit}
                />
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default BiscuitList;
