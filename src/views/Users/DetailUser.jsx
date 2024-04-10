import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function DetailUser() {
  const user = useParams();
  const userId = parseInt(user.id);
  const baseUrl = `https://reqres.in/api/users/${userId}`;
  const [detailUser, setDetailUser] = useState({});
  const isEmptyObj = Object.keys(detailUser).length === 0;
  const navigate = useNavigate();
  useEffect(() => {
    fetch(baseUrl)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setDetailUser(data.data);
      })
      .catch((error) => console.log(error.message));
  }, []);
  // const baseUrl = "https://reqres.in/api/users?page=2";
  // const [api, setApi] = useState([]);
  // useEffect(() => {
  //   fetch(baseUrl)
  //     .then((response) => response.json())
  //     .then((data) => setApi(data.data))
  //     .catch((error) => console.log(error.message));
  // }, []);

  // const userId = useParams();
  // const user = api.find((obj) => {
  //   return obj.id === parseInt(userId.id);
  // });
  const handleBack = () => {
    navigate("/user");
  };
  return (
    <div>
      {detailUser && !isEmptyObj && (
        <div key={detailUser.id}>
          <div>User ID: {detailUser.id}</div>
          <div>
            User Name: {detailUser.first_name} {detailUser.last_name}
          </div>
          <div>User Email: {detailUser.email}</div>
          <div>
            <img src={detailUser.avatar} alt={detailUser.id} />
          </div>
          <button type="button" onClick={() => handleBack()}>
            Back
          </button>
        </div>
      )}
    </div>
  );
}

export default DetailUser;
