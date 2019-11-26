const hash = {
  1: "I",
  5: "V",
  10: "X",
  50: "L",
  100: "C",
  500: "D",
  1000: "M"
};

  if (i === 9) {
    str += hash[1] + hash[10];
  } else if (i > =5) {
    str +=  hash[5] + hash[1].repeat(i - 5);
  } else {
    str += hash[1].repeat(5 - i) + hash[5];
  }

/**
 * @param {number} num
 * @return {string}
 */
export default function intToRoman(num: number): string {
  let numArr: string[] = num.toString().split("");

  let str = "";
  for (let digit of [1000, 100, 10, 1]) {
    let n = Math.floor(num / digit);

    if (n === 9) {
      str += hash[1] + hash[digit];
    } else if (n >= 5) {
      str +=  hash[5] + hash[1].repeat(n - 5);
    } else if (n === 4) {
      str += hash[1] + hash[5];
    }
  }

  return str;
}
