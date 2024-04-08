import React, { useState } from "react";
import "./Demo.scss";
function Child(props) {
  const { jobList } = props;

  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(true);
  };

  const handleHide = () => {
    setShow(false);
  };

  const handleClickDelete = (job) => {
    props.deleteAJob(job);
  };
  return (
    <div>
      <h1>Bang luong: </h1>
      {!show ? (
        <div className="btn">
          <button className="btn-show" onClick={handleShow}>
            Show
          </button>
        </div>
      ) : (
        <>
          {jobList.map((item, index) => {
            if (+item.salary >= 0) {
              return (
                <div key={item.id}>
                  Job: {item.title} - Salary: {item.salary} $
                  <button
                    style={{ marginLeft: "5px" }}
                    onClick={() => handleClickDelete(item)}
                  >
                    X
                  </button>
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
