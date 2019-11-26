/**
 * @param {character[]} chars
 * @return {number}
 */
export default function compress(
  chars: string[]
): string[] {

  let count = 1;

  for (let i = 0; i < chars.length; ++i) {
    if (chars[i] === chars[i+1]) {
      count += 1;
      continue;
    }

    chars.push(chars[i])

    if (count !== 1) {
      chars.push(...(count.toString().split("")));
    }
    count = 1;
  }
  chars.splice(0, chars.indexOf("-1"));

  return chars;
}

