interface FirstatLogoProps {
  variant?: 'navy' | 'white';
  className?: string;
}

export function FirstatLogo({ variant = 'navy', className = 'h-8' }: FirstatLogoProps) {
  const fill = variant === 'white' ? '#FFFFFF' : '#042C5E';

  return (
    <div className={`inline-flex items-center gap-2.5 select-none ${className}`}>
      <svg
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-auto"
        aria-hidden="true"
      >
        <path d="M8 2H34V11H2L8 2Z" fill={fill} />
        <rect x="8" y="14" width="20" height="9" fill={fill} />
        <rect x="8" y="26" width="10" height="9" fill={fill} />
      </svg>
      <span
        className="font-display text-2xl font-bold tracking-tight"
        style={{ color: fill }}
      >
        Firstat
      </span>
    </div>
  );
}
