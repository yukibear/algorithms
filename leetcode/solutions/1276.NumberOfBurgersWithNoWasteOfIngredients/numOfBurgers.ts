export default function numOfBurgers(tomato: number, cheese: number): number[] {
  const numOfSmall = (cheese * 4 - tomato) / 2;

  return numOfSmall % 1 === 0 && numOfSmall >= 0 && numOfSmall <= cheese
    ? [cheese - numOfSmall, numOfSmall]
    : [];
}
