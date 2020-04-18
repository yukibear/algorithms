export default function longestWord(words: string[]): string {
  const wordSetArr: Set<string>[] = [];

  for (const word of words) {
    if (wordSetArr[word.length]) {
      wordSetArr[word.length].add(word);
    } else {
      wordSetArr[word.length] = new Set<string>([word]);
    }
  }

  let endIndex;

  for (let i = wordSetArr.length - 1; i > 0; i--) {
    if (!wordSetArr[i]) {
      endIndex = i;
    }
  }
  if (endIndex) {
    wordSetArr.splice(endIndex);
  }

  const candidates: string[] = [];

  for (let i = wordSetArr.length - 1; i > 0; i--) {
    let longestWordFound = false;

    for (const word of wordSetArr[i].values()) {
      if (wordIsValid(wordSetArr, word)) {
        candidates.push(word);
        longestWordFound = true;
      }
    }

    if (longestWordFound) {
      break;
    }
  }

  return getFirstWord(candidates);
}

function wordIsValid(wordSetArr: Set<string>[], word: string) {
  for (let i = word.length - 1; i > 0; i--) {
    if (!wordSetArr[i] || !wordSetArr[i].has(word.slice(0, i))) {
      return false;
    }
  }

  return true;
}

function getFirstWord(words: string[]) {
  let firstWord = words[0];

  for (const word of words) {
    for (let i = 0; i < word.length; i++) {
      if (word.charCodeAt(i) < firstWord.charCodeAt(i)) {
        firstWord = word;
        break;
      } else if (word.charCodeAt(i) > firstWord.charCodeAt(i)) {
        break;
      }
    }
  }

  return firstWord;
}
