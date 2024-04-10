import React, { Component, useEffect, useState } from "react";
import axios from "axios";
import "./ListUser.scss";
import { Link } from "react-router-dom";
// class ListUser extends Component {
//   state = {
//     listUsers: [],
//   };
  // async componentDidMount() {
  //   let res = await axios.get("https://reqres.in/api/users?page=2");
  //   this.setState({
  //     listUsers: res && res.data && res.data.data ? res.data.data : [],
  //   });
  //   console.log(res.data.data);
  // }
//   render() {
//     let { listUsers } = this.state;
//     return (
//       <div className="list-user-container">
//         <div className="list-user-title">
//           <h1>List User</h1>
//         </div>
//         <div className="list-user-content">
//           {listUsers &&
//             listUsers.length > 0 &&
//             listUsers.map((user, index) => {
//               return (
//                 <div className="list-user-content-child" key={user.id}>
//                   {index + 1} - {user.first_name} {user.last_name}
//                 </div>
//               );
//             })}
//         </div>
//       </div>
//     );
//   }
// }
const ListUser = () => {
  const [listUsers, setListUsers] = useState([]);
  const baseUrl = "https://reqres.in/api/users?page=1";
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(baseUrl);
        setListUsers(res?.data?.data || []);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="list-user-container">
      <div className="list-user-title">
        <h1>List User</h1>
      </div>
      <div className="list-user-content">
        {listUsers.map((user, index) => (
          <div className="list-user-content-child" key={user.id}>
            <span>
              {index + 1} - {user.first_name} {user.last_name}
            </span>
            <Link to={`/users/${user.id}`}>
              <button style={{ marginLeft: "3%" }}>Detail</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListUser;
