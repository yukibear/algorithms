export default function minNumberOfFrogs(croakOfFrogs: string): number {
  let frogs = 0;
  let croakingFrogs = 0;
  const charCount: Record<string, number> = {
    c: 0,
    r: 0,
    o: 0,
    a: 0,
  };

  for (const char of croakOfFrogs) {
    switch (char) {
      case "c":
        if (frogs === croakingFrogs) {
          frogs++;
        }
        croakingFrogs++;
        break;
      case "r":
        if (charCount["c"] === 0) {
          return -1;
        }
        charCount["c"]--;
        break;
      case "o":
        if (charCount["r"] === 0) {
          return -1;
        }
        charCount["r"]--;
        break;
      case "a":
        if (charCount["o"] === 0) {
          return -1;
        }
        charCount["o"]--;
        break;
      case "k":
        if (charCount["a"] === 0) {
          return -1;
        }
        charCount["a"]--;
        croakingFrogs--;
        break;
    }

    if (char !== "k") {
      charCount[char]++;
    }
  }

  return croakingFrogs === 0 ? frogs : -1;
}
