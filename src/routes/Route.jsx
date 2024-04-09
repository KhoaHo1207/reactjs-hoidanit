import Form from "../Examples/Form";
import ListToDo from "../Todos/ListToDo";
import Home from "../views/Home/idex";
import ListUser from "../views/Users/ListUser";
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
];

const privateUrl = [{}];

export { publicUrl, privateUrl };
