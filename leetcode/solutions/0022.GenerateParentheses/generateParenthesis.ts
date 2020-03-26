export default function generateParenthesis(n: number): string[] {
  if (n === 0) {
    return [];
  }

  const result: string[] = [];
  const resultLength = n * 2;

  function dfs(str: string, open: number, close: number) {
    if (str.length === resultLength) {
      result.push(str);

      return;
    }

    if (open < n) {
      dfs(str + "(", open + 1, close);
    }

    if (close < open) {
      dfs(str + ")", open, close + 1);
    }
  }

  dfs("", 0, 0);

  return result;
}
