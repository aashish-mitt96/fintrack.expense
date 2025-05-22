export function Button({ children, variant = "default", className = "", ...props }) {
  const baseStyle = "px-4 py-2 rounded-md font-medium text-sm";
  const styles = {
    default: "bg-blue-600 text-white hover:bg-blue-700",
    outline: "border border-gray-400 text-gray-700 hover:bg-gray-100",
  };

  return (
    <button className={`${baseStyle} ${styles[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}
