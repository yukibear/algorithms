export default function stringShift(
  s: string,
  shift: [number, number][]
): string {
  let amount = 0;
  for (const [direction, amo] of shift) {
    if (direction === 0) {
      amount -= amo;
    } else {
      amount += amo;
    }
  }

  if (amount === 0) {
    return s;
  }

  amount %= s.length;

  if (amount < 0) {
    amount = -amount;
    return s.substring(amount) + s.substring(0, amount);
  } else {
    return s.substring(s.length - amount) + s.substring(0, s.length - amount);
  }
}
