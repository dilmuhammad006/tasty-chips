import { NextIcon1 } from "../../assets";
import "./button.scss";

interface ButtonProps {
  text: string;
}

const Button: React.FC<ButtonProps> = ({ text }) => {
  return (
    <button className="fc scale">
      <span>{text}</span>
      <NextIcon1 />
    </button>
  );
};

export default Button;
