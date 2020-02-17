export default function lengthOfLongestSubstring(str: string): number {
  let max = 0;
  let lastRange = "";

  for (let i = 0; i < str.length; i++) {
    const nextChar = str[i + 1];
    lastRange += str[i];

    // if there is the next char in the range, shurink it.
    if (!nextChar || lastRange.includes(nextChar)) {
      max = Math.max(max, lastRange.length);
      lastRange = lastRange.slice(lastRange.indexOf(nextChar) + 1);
    }
  }

  return max;
}
