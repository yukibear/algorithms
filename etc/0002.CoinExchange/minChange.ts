// **This problem is written in Japanese
// https://tayama-2.hatenadiary.org/entry/20111210/1323502092

export default function minChange(
  values: number[],
  n: number
): number {
  values.sort((a, b) => b - a);

  function dfs(rest: number, count: number, i: number): number {
    const newCount = count + Math.floor(rest / values[i]);

    if (rest % values[i] === 0) {
      return newCount;
    }

    if (i === values.length - 1) {
      return -1;
    }

    const result = dfs(rest % values[i], newCount, i + 1);

    return result !== -1 ? result : dfs(rest, count, i + 1);
  }

  return dfs(n, 0, 0);
}
