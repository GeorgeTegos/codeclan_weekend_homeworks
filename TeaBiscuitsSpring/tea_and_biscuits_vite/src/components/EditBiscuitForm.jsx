import React from "react";
import { useState } from "react";

function EditBiscuitForm({ biscuit, fetchBiscuits, setEdit }) {
  const [name, setName] = useState(biscuit.name);
  const [brand, setBrand] = useState(biscuit.brand);
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
    setEdit(false);

    fetch(`${BASE_URL}/api/biscuits/${biscuit.id}`, config)
      .then((res) => res.json())
      .then((data) => fetchBiscuits());
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

export default EditBiscuitForm;
