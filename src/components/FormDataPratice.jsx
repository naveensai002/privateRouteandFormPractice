import React from "react";

const FormDataPratice = () => {
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);
    const name = formData.get("name");
    console.log(data);
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <label htmlFor="name" name="name">
        Name
      </label>
      <input type="text" name="name" />
      <label htmlFor="name" name="email">
        Email
      </label>
      <input type="email" name="email" />
      <button type="submit">Submit</button>
    </form>
  );
};

export default FormDataPratice;
