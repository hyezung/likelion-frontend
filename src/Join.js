import "./App.css";
import Button from "./MyButton";
import Signup from "./signup";

function Join() {
  const buttonText = "회원가입";

  return (
    <div className="join">
      <Signup />
      <Button text={buttonText} />
    </div>
  );
}

export default Join;
