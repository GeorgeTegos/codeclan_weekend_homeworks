import React, { useState } from "react";

function EditForm({ fetchTeas, tea }) {
  const [name, setName] = useState(tea.name);
  const [brand, setBrand] = useState(tea.brand);
  const BASE_URL = "http://localhost:8080";

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleBrandChange = (event) => {
    setBrand(event.target.value);
  };

  const handleEdit = (e) => {
    e.preventDefault();
    // console.log(e.target.value);
    const config = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        brand,
      }),
    };

    setBrand("");
    setName("");

    fetch(`${BASE_URL}/api/teas/${tea.id}`, config)
      .then((res) => res.json())
      .then((data) => fetchTeas());
  };

  return (
    <div>
      <form onSubmit={handleEdit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleNameChange}
        />

        <label htmlFor="brand">Brand:</label>
        <input
          type="text"
          name="brand"
          value={brand}
          onChange={handleBrandChange}
        />
        <input
          type="submit"
          value="Save"
        />
      </form>
    </div>
  );
}

export default EditForm;
