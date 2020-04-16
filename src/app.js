import "./scss/app.scss";
import Header from "./components/Header";
import User from "./components/User";

const app = async () => {
  document.getElementById("header").innerHTML = Header();
  document.getElementById("user").innerHTML = await User();
};

// Init App
app();
