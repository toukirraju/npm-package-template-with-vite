import React from "react";

export interface ButtonProps {
  label: "hellow" | "its me";
}
const Button: React.FC<ButtonProps> = ({ label }) => {
  return <button>{label}</button>;
};
export default Button;
