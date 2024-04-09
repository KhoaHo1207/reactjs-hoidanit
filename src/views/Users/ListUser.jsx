import React, { Component } from "react";
import axios from "axios";
import "./ListUser.scss";
class ListUser extends Component {
  state = {
    listUsers: [],
  };
  async componentDidMount() {
    // axios.get("https://reqres.in/api/users?page=2").then((res) => {
    //   console.log(res);
    // });
    let res = await axios.get("https://reqres.in/api/users?page=2");
    this.setState({
      listUsers: res && res.data && res.data.data ? res.data.data : [],
    });
    console.log(res.data.data);
  }
  render() {
    let { listUsers } = this.state;
    return (
      <div className="list-user-container">
        <div className="list-user-title">
          <h1>List User</h1>
        </div>
        <div className="list-user-content">
          {listUsers &&
            listUsers.length > 0 &&
            listUsers.map((user, index) => {
              return (
                <div className="list-user-content-child" key={user.id}>
                  {index + 1} - {user.first_name} {user.last_name}
                </div>
              );
            })}
        </div>
      </div>
    );
  }
}

export default ListUser;
