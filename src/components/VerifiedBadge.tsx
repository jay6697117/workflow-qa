import { Check } from 'lucide-react';

type VerifiedBadgeProps = {
  label?: string;
};

export function VerifiedBadge({ label = 'Verified account' }: VerifiedBadgeProps) {
  return (
    <span
      className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-pulse-blue text-white"
      title={label}
      aria-label={label}
    >
      <Check className="h-3.5 w-3.5" aria-hidden="true" strokeWidth={3} />
    </span>
  );
}
