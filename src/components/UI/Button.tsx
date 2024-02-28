interface ButtonProps {
  type?: "button" | "submit";
  handleClick?: () => void;
  text: string;
}

const Button = ({ type = "button", handleClick, text }: ButtonProps) => {
  return (
    <button type={type} onClick={handleClick}>
      {text}
    </button>
  )
}

export default Button