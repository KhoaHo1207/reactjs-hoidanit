import React, { useState } from "react";

function Child(props) {
  const { salaryList } = props;
  console.log(salaryList);

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
          {salaryList.map((item, index) => {
            if (+item.salary >= 0) {
              return (
                <div key={item.id}>
                  name: {item.name} - salary: {item.salary} $
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
