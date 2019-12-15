export default function numOfBurgers(
  tomato: number,
  cheese: number
): number[] {
  let i = 0;
  while (i * 2 <= tomato) {
    let tomatoLeft = tomato - i * 2;
    if (tomatoLeft === (cheese - i) * 4) {
      return [tomatoLeft / 4, i];
    }
    i++;
  }
  return [];
}
