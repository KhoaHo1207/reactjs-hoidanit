import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function DetailUser() {
  const baseUrl = "https://reqres.in/api/users?page=2";
  const [api, setApi] = useState([]);
  useEffect(() => {
    fetch(baseUrl)
      .then((response) => response.json())
      .then((data) => setApi(data.data))
      .catch((error) => console.log(error.message));
  }, []);

  const userId = useParams();
  const user = api.find((obj) => {
    return obj.id === parseInt(userId.id);
  });
  return (
    <div>
      {user && (
        <div key={user.id}>
          {user.id} - {user.first_name} {user.last_name}
        </div>
      )}
    </div>
  );
}

export default DetailUser;
