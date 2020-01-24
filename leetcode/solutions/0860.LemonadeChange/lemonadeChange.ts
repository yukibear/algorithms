export default function lemonadeChange(bills: number[]): boolean {
  let fives = 0;
  let tens = 0;

  for (const bill of bills) {
    if (bill === 5) {
      fives++;
      continue;
    }

    if (bill === 10 && fives >= 1) {
      fives--;
      tens++;
      continue;
    }

    if (bill === 20) {
      if (tens >= 1 && fives >= 1) {
        tens -= 1;
        fives -= 1;
        continue;
      } else if (fives >= 3) {
        fives -= 3;
        continue;
      }
    }

    return false;
  }

  return true;
}
