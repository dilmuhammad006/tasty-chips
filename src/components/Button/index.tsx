import { NextIcon1 } from "../../assets";
import "./button.scss";

interface ButtonProps {
  text: string;
  color?: string;
  borderColor?: string;
}

const Button: React.FC<ButtonProps> = ({ text, color, borderColor }) => {
  return (
    <button className="fc scale" style={{ border: `2px solid ${borderColor || "white"}` }}>
      <span style={{ color: color }}>{text}</span>
      <NextIcon1 color={color || "#fff"} />
    </button>
  );
};

export default Button;
