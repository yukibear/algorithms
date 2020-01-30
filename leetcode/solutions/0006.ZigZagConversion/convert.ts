export default function convert(s: string, numRows: number): string {
  if (s.length <= 1 || numRows === 1) {
    return s;
  }

  let result = "";
  const step = numRows * 2 - 2;

  for (let i = 0; i < numRows; i++) {
    for (let vert = i; vert < s.length; vert += step) {
      result += s[vert];

      if (i !== 0 && i !== numRows - 1) {
        // diagonal index is the next top one(first + step - i) minus i
        result += s[vert + step - i - i] || "";
      }
    }
  }

  return result;
}
