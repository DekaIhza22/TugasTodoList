interface ButtonProps {
  label: string;
  color?: string;
  padding?: string;
  onClick?: () => void;
}

const Button = ({ label, color = "blue", padding = "5px 10px", onClick }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      style={{
        background: color,
        border: "none",
        color: "white",
        padding,
        borderRadius: "5px",
        cursor: "pointer",
      }}
    >
      {label}
    </button>
  );
};

export default Button;
