const TeaList = ({ teas, handleTeaDelete }) => {
  return (
    <div id="tea-list">
      <h2>All the teas!</h2>
      <ul>
        {teas.map((tea) => {
          return (
            <li key={tea.id}>
              {tea.name} by {tea.brand}
              <button onClick={() => handleTeaDelete(tea)}>Delete</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TeaList;
