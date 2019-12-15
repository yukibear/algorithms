export default function gcdOfStrings(
  str1: string,
  str2: string
): string {
  if (str1.length > str2.length) {
    [str1, str2] = [str2, str1];
  }

  for (let i = 1; i <= str1.length; i++) {
    const dividerLength = str1.length / i;
    if (str1.length % i !== 0 || str2.length % dividerLength !== 0) {
      continue;
    }

    const divider = str1.slice(0, dividerLength);
    if (str1 === divider.repeat(i) && str2 === divider.repeat(str2.length / dividerLength)) {
      return divider;
    }
  }
  return "";
}
