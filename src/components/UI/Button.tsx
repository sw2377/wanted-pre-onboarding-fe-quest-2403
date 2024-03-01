interface ButtonProps {
  type?: "button" | "submit";
  handleClick?: () => void;
  text: string;
}

const Button = ({ type = "button", handleClick, text }: ButtonProps) => {
  return (
    <button
      className="px-3 py-1 mx-2 border border-rose-400 rounded-md text-white bg-rose-400 hover:bg-rose-500 active:bg-rose-500 focus:outline-none"
      type={type}
      onClick={handleClick}
    >
      {text}
    </button>
  );
};

export default Button;
