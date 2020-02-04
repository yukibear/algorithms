export default function letterCasePermutation(S: string): string[] {
  const res: string[] = [];

  function dfs(s: string, i: number) {
    if (i === s.length) {
      res.push(s);

      return;
    }

    dfs(s, i + 1);

    const charCode = s.charCodeAt(i);

    // check if charCode is in either A(65) to Z(90) or a(97) to z(122) range
    if (
      (charCode >= 65 && charCode <= 90) ||
      (charCode >= 97 && charCode <= 122)
    ) {
      s = s.substring(0, i) + PAIR.get(s[i]) + s.substring(i + 1);

      dfs(s, i + 1);
    }
  }

  dfs(S, 0);

  return res;
}

const PAIR = new Map<string, string>([
  ["A", "a"],
  ["B", "b"],
  ["C", "c"],
  ["D", "d"],
  ["E", "e"],
  ["F", "f"],
  ["G", "g"],
  ["H", "h"],
  ["I", "i"],
  ["J", "j"],
  ["K", "k"],
  ["L", "l"],
  ["M", "m"],
  ["N", "n"],
  ["O", "o"],
  ["P", "p"],
  ["Q", "q"],
  ["R", "r"],
  ["S", "s"],
  ["T", "t"],
  ["U", "u"],
  ["V", "v"],
  ["W", "w"],
  ["X", "x"],
  ["Y", "y"],
  ["Z", "z"],
  ["a", "A"],
  ["b", "B"],
  ["c", "C"],
  ["d", "D"],
  ["e", "E"],
  ["f", "F"],
  ["g", "G"],
  ["h", "H"],
  ["i", "I"],
  ["j", "J"],
  ["k", "K"],
  ["l", "L"],
  ["m", "M"],
  ["n", "N"],
  ["o", "O"],
  ["p", "P"],
  ["q", "Q"],
  ["r", "R"],
  ["s", "S"],
  ["t", "T"],
  ["u", "U"],
  ["v", "V"],
  ["w", "W"],
  ["x", "X"],
  ["y", "Y"],
  ["z", "Z"]
]);
