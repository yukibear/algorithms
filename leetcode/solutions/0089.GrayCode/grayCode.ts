export default function grayCode(n: number): number[] {
  const max = 2 ** n;
  let result = [];

  for (var i = 0; i < max; i++) {
    result.push(toGray(i));
  }
  return result;
}

const toGray = (n: number): number => n ^ (n >> 1);
