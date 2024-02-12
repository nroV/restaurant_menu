import React, { CSSProperties } from "react";

const Button = ({
  label,
  onClick,
  className,
  children,
}: {
  label: string;
  onClick?: () => void;
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <button className={className} onClick={onClick}>
      {/* {label} */}
      {children}
    </button>
  );
};

export default Button;
