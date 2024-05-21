import "./App.css";
import "./font.css";
import Header from "./header";
import Login from "./Login";
import Sub from "./sub";
import Footer from "./footer";
import MyButton from "./MyButton";
import Signup from "./signup";

function App() {
  const buttonText = "로그인";

  return (
    <div className="mainpage">
      <Header />
      <Signup />
      <MyButton text={buttonText} />
      <Footer />
    </div>
  );
}

export default App;
