export default function intToRoman(num: number): string {
  if (num >= 5000) {
    return "";
  }

  let str = "";

  for (let digit of [1000, 100, 10, 1]) {
    let n = Math.floor(num / digit);
    num = num % digit;

    if (n === 0) {
      continue;
    }
    if (digit === 1000) {
      str += INT_ROMAN_MAP[digit].repeat(n);
      continue;
    }

    if (n === 9) {
      str += INT_ROMAN_MAP[digit] + INT_ROMAN_MAP[digit * 10];
    } else if (n >= 5) {
      str +=  INT_ROMAN_MAP[digit * 5] + INT_ROMAN_MAP[digit].repeat(n - 5);
    } else if (n === 4) {
      str += INT_ROMAN_MAP[digit] + INT_ROMAN_MAP[digit * 5];
    } else {
      str += INT_ROMAN_MAP[digit].repeat(n);
    }
  }

  return str;
}

const INT_ROMAN_MAP: Record<number, string> = {
  1: "I",
  5: "V",
  10: "X",
  50: "L",
  100: "C",
  500: "D",
  1000: "M"
};
