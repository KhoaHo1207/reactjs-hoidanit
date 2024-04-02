import React, { useState } from "react";
import Child from "./Child";

function Form() {
  const [fullname, setFullname] = useState({
    fname: "",
    lname: "",
  });

  const handleChangeFullName = (e) => {
    const { name, value } = e.target;
    setFullname({ ...fullname, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(fullname);
  };
  const salaryList = [
    {
      id: 1,
      name: "Khoa",
      salary: 600,
    },
    {
      id: 2,
      name: "Nhi",
      salary: 400,
    },
    {
      id: 3,
      name: "Han",
      salary: 350,
    },
  ];
  return (
    <div>
      <form>
        <label htmlFor="fname">First name:</label>
        <br />
        <input
          type="text"
          id="fname"
          name="fname"
          value={fullname.fname}
          onChange={handleChangeFullName}
        />
        <br />
        <label htmlFor="lname">Last name:</label>
        <br />
        <input
          type="text"
          id="lname"
          name="lname"
          value={fullname.lname}
          onChange={handleChangeFullName}
        />
        <br />
        <br />
        <button type="submit" value="Submit" onClick={(e) => handleSubmit(e)}>
          Submit
        </button>
      </form>
      <Child salaryList={salaryList} />
    </div>
  );
}

export default Form;
