type AvatarProps = {
  initials: string;
  size?: 'sm' | 'md' | 'lg';
};

const sizeClassName = {
  sm: 'h-10 w-10 text-sm',
  md: 'h-12 w-12 text-base',
  lg: 'h-14 w-14 text-lg',
};

export function Avatar({ initials, size = 'md' }: AvatarProps) {
  return (
    <div
      aria-hidden="true"
      className={`${sizeClassName[size]} flex shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-sky-500 to-indigo-600 font-bold text-white shadow-sm`}
    >
      {initials}
    </div>
  );
}
