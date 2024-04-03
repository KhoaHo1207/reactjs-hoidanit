import React, { useState } from "react";
import Child from "./Child";
import AddComponent from "./AddComponent";

function Form() {
  const [jobList, setJobList] = useState([
    {
      id: 1,
      title: "Manager",
      salary: 600,
    },
    {
      id: 2,
      title: "Junior",
      salary: 400,
    },
    {
      id: 3,
      title: "Fresher",
      salary: 350,
    },
  ]);

  const addNewJob = (job) => {
    console.log(job);
    setJobList((jobList) => {
      return [...jobList, job];
    });
  };

  const deleteAJob = (job) => {
    let currentJobList = jobList;
    currentJobList = currentJobList.filter((item) => item.id !== job.id);
    setJobList(currentJobList);
  };
  return (
    <div>
      <AddComponent addNewJob={addNewJob} />
      <Child jobList={jobList} deleteAJob={deleteAJob} />
    </div>
  );
}

export default Form;
