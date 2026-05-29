const compactFormatter = new Intl.NumberFormat('en', {
  notation: 'compact',
  maximumFractionDigits: 1,
});

export function formatCount(value: number): string {
  return compactFormatter.format(value);
}

export function getCharacterStatus(count: number, max: number) {
  const remaining = max - count;

  return {
    remaining,
    isNearLimit: remaining <= 40 && remaining >= 0,
    isOverLimit: remaining < 0,
  };
}
