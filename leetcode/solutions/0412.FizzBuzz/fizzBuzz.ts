export default function fizzBuzz(n: number): string[] {
  return Array.from(
    { length: n },
    (_, i) => (++i % 3 ? "" : "Fizz") + (i % 5 ? "" : "Buzz") || i.toString()
  );
}
