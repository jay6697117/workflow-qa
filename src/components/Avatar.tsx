type AvatarProps = {
  initials: string;
  label?: string;
  color?: string;
  size?: 'sm' | 'md' | 'lg';
};

const sizeClassName = {
  sm: 'h-10 w-10 text-sm',
  md: 'h-12 w-12 text-base',
  lg: 'h-14 w-14 text-lg',
};

export function Avatar({
  initials,
  label,
  color = 'from-sky-500 to-indigo-600',
  size = 'md',
}: AvatarProps) {
  return (
    <div
      aria-label={label}
      aria-hidden={label ? undefined : 'true'}
      className={`${sizeClassName[size]} flex shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${color} font-bold text-white shadow-sm`}
    >
      {initials}
    </div>
  );
}
