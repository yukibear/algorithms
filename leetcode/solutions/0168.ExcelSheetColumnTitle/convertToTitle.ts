export default function convertToTitle(n: number): string {
  let title = "";

  do {
    let num = n % 26;
    n = Math.floor(n / 26);

    if (num === 0) {
      num = 26;
      n -= 1;
    }
    title = numToAlphabet(num) + title;
  } while (n / 26 > 0);

  return title;
}

function numToAlphabet(n: number): string {
  return String.fromCharCode(
    Number.parseInt((n + 64).toString(16), 16)
  );
}
