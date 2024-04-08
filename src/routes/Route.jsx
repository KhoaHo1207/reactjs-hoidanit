import Form from "../Examples/Form";
import ListToDo from "../Todos/ListToDo";
import Home from "../views/Home/idex";
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
];

const privateUrl = [{}];

export { publicUrl, privateUrl };
