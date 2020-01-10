// Solution without using regex
export default function detectCapitalUse(word: string): boolean {
  if (word.length <= 1) {
    return true;
  }

  const shouldBeCapital = isCapital(word[1]);

  if (shouldBeCapital && !isCapital(word[0])) {
    return false;
  }

  for (let i = 2; i < word.length; i++) {
    if (isCapital(word[i]) !== shouldBeCapital) {
      return false;
    }
  }

  return true;
}

function isCapital(word: string) {
  // charcode A:65 Z:90
  return word.charCodeAt(0) >= 65 && word.charCodeAt(0) <= 90;
}
