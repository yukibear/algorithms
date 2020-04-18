export default function checkValidString(s: string): boolean {
  let openCount: number[] = [];
  let astCount: number[] = [];

  for (const [i, char] of [...s].entries()) {
    if (char === "(") {
      openCount.push(i);
    } else if (char === "*") {
      astCount.push(i);
    } else if (openCount.length > 0) {
      openCount.pop();
    } else if (astCount.length > 0) {
      astCount.pop();
    } else {
      return false;
    }
  }

  let i = openCount.length - 1;
  for (let j = astCount.length - 1; i >= 0 && j >= 0; i--, j--) {
    if (openCount[i] > astCount[j]) {
      return false;
    }
  }

  return i < 0;
}
