import React, { useState } from "react";

function MyComponent() {
  const [person, setPerson] = useState({
    name: "",
    age: "",
  });

  const handleChangePerson = (event) => {
    const { name, value } = event.target;
    setPerson({ ...person, [name]: value });
  };

  const handleSubmitButton = (e) => {
    e.preventDefault(); //khong cho submit
    alert("Ban chac chua");
  };
  return (
    <div>
      Name:
      <input
        name="name"
        id="name"
        type="text"
        value={person.name}
        onChange={handleChangePerson}
      ></input>
      <br />
      Age:
      <input
        name="age"
        id="age"
        type="number"
        value={person.age}
        onChange={handleChangePerson}
      ></input>
      <br />
      Xin chao, {person.name} tuoi {person.age}
      <br />
      <form onSubmit={handleSubmitButton}>
        <input name="a" id="a" type="number"></input>
        <button type="submit">Submit</button>
        <button type="reset">Reset</button>
      </form>
    </div>
  );
}

export default MyComponent;
