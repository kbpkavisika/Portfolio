interface LogoProps {
  className?: string;
  size?: number;
}

export default function Logo({ className = "", size = 48 }: LogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Background rounded square */}
      <rect
        width="100"
        height="100"
        rx="22"
        ry="22"
        fill="#000000"
      />
      
      {/* P letter */}
      <path
        d="M20 25 L20 75 L28 75 L28 55 L45 55 C52 55 57 50 57 42.5 C57 35 52 30 45 30 L20 25 Z M28 33 L42 33 C46 33 48 36 48 42.5 C48 49 46 52 42 52 L28 52 L28 33 Z"
        fill="#8EFF00"
      />
      
      {/* K letter */}
      <path
        d="M62 25 L62 75 L70 75 L70 55 L75 55 L85 75 L95 75 L82 50 L94 25 L84 25 L75 42 L70 42 L70 25 L62 25 Z"
        fill="#8EFF00"
      />
    </svg>
  );
}