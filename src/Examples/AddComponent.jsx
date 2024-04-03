import React, { useState } from "react";

function AddComponent(props) {
  const [job, setJob] = useState({
    title: "",
    salary: "",
  });

  const handleChangeJob = (e) => {
    const { name, value } = e.target;
    setJob({ ...job, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!job.title || !job.salary) {
      alert("Missing param");
      return;
    }
    props.addNewJob({
      id: Math.floor(Math.random() * 1001),
      title: job.title,
      salary: job.salary,
    });

    setJob({
      title: "",
      salary: "",
    });
  };

  return (
    <div>
      AddComponent
      <form>
        <label htmlFor="title">Job Title:</label>
        <br />
        <input
          type="text"
          id="title"
          name="title"
          value={job.title}
          onChange={handleChangeJob}
        />
        <br />
        <label htmlFor="salary">Salary:</label>
        <br />
        <input
          type="text"
          id="salary"
          name="salary"
          value={job.salary}
          onChange={handleChangeJob}
        />
        <br />
        <br />
        <button type="submit" value="Submit" onClick={(e) => handleSubmit(e)}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default AddComponent;
