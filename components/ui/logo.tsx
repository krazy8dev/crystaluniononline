import React from "react";

interface LogoProps {
  className?: string;
  width?: number;
  height?: number;
}

const Logo: React.FC<LogoProps> = ({
  className = "",
  width = 200,
  height = 60,
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 200 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Background Shield */}
      <path
        d="M15 8L25 3L35 8V20C35 28 30 35 25 37L15 32V8Z"
        fill="url(#shieldGradient)"
        stroke="#1E40AF"
        strokeWidth="1"
      />

      {/* Building/Columns */}
      <rect x="18" y="12" width="3" height="8" fill="#FFFFFF" opacity="0.9" />
      <rect x="22" y="12" width="3" height="8" fill="#FFFFFF" opacity="0.9" />
      <rect x="26" y="12" width="3" height="8" fill="#FFFFFF" opacity="0.9" />

      {/* Roof */}
      <path
        d="M17 12L20 10L23 12L26 10L29 12L32 10L32 12L17 12Z"
        fill="#FFFFFF"
        opacity="0.9"
      />

      {/* Trust Symbol - Checkmark */}
      <path
        d="M20 18L22 20L28 14"
        stroke="#1E40AF"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Text: Heritage Trust Bank */}
      <text
        x="45"
        y="20"
        fill="#1E40AF"
        fontSize="12"
        fontWeight="bold"
        fontFamily="Arial, sans-serif"
      >
        Heritage Trust
      </text>
      <text
        x="45"
        y="35"
        fill="#1E40AF"
        fontSize="12"
        fontWeight="bold"
        fontFamily="Arial, sans-serif"
      >
        Bank
      </text>

      {/* Tagline */}
      <text
        x="45"
        y="50"
        fill="#6B7280"
        fontSize="8"
        fontFamily="Arial, sans-serif"
      >
        Trust • Excellence • Innovation
      </text>

      {/* Gradients */}
      <defs>
        <linearGradient id="shieldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3B82F6" />
          <stop offset="100%" stopColor="#1E40AF" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default Logo;
