export default function wordBreak(
  s: string,
  wordDict: string[]
): boolean {

}

function wordBreak1(
  s: string,
  wordDict: string[]
): boolean {
  const dp: string[][] = Array.from({ length: wordDict.length + 1 }, () => []);
  dp[0] = [s];

  let variations: string[] = [s];

  for (const [i, word] of wordDict.entries()) {
    for (const str of variations) {
      const [matched, vars] = createPatterns(str, word, 0, []);

      if (matched) {
        return true;
      }

      variations = variations.concat(vars);
    }
  }

  return false;
}

function createPatterns(
  s: string,
  word: string,
  start: number,
  variations: string[]
): [boolean, string[]] {
  const i = s.indexOf(word, start);

  if (i === -1) {
    return [false, variations];
  }

  if (i === 0 && s === word) {
    return [true, []];
  }

  let chars = s.split("");
  chars.splice(i, word.length);
  let s2 = chars.join("");
  variations.push(s2);

  const [matched] = createPatterns(s2, word, i, variations);

  if (matched) {
    return [true, []];
  }

  variations.push(s);

  return createPatterns(s, word, i + 1, variations);
}
