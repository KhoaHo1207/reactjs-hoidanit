import Form from "../Examples/Form";
import ListToDo from "../Todos/ListToDo";
import Home from "../views/Home/idex";
import ListUser from "../views/Users/ListUser";
import DetailUser from "../views/Users/DetailUser";
const publicUrl = [
  {
    path: "/about",
    component: Form,
  },
  {
    path: "/todo",
    component: ListToDo,
  },
  {
    path: "/",
    component: Home,
  },
  {
    path: "/home",
    component: Home,
  },
  {
    path: "/user",
    component: ListUser,
  },
  {
    path: "/user/:id",
    component: DetailUser,
  },
];

const privateUrl = [{}];

export { publicUrl, privateUrl };
