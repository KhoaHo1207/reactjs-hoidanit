import React, { useState } from "react";

function Child(props) {
  const { jobList } = props;

  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(true);
  };

  const handleHide = () => {
    setShow(false);
  };
  return (
    <div>
      <h1>Bang luong: </h1>
      {!show ? (
        <div>
          <button onClick={handleShow}>Show</button>
        </div>
      ) : (
        <>
          {jobList.map((item, index) => {
            if (+item.salary >= 0) {
              return (
                <div key={item.id}>
                  Job: {item.title} - Salary: {item.salary} $
                </div>
              );
            }
          })}
          <div>
            <button onClick={handleHide}>Hide</button>
          </div>
        </>
      )}
    </div>
  );
}

export default Child;
