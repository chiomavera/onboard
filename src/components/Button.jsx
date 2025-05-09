import Link from "next/link";

const Button = ({ label, href = "#", className = "" }) => {
  return (
    <Link
      href={href}
      className={`w-full h-14 flex items-center justify-center rounded-md bg-primary-color text-white text-center ${className}`}
    >
      {label}
    </Link>
  );
};

export default Button;
