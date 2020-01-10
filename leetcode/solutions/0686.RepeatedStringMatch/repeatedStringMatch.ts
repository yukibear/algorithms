export default function repeatedStringMatch(A: string, B: string): number {
  if (A.length > B.length) {
    if (A.indexOf(B) !== -1) {
      return 1;
    }

    return (A.repeat(2).indexOf(B) === -1) ? -1 : 2;
  }

  let repatTimes = Math.ceil(B.length / A.length);
  let compare = A.repeat(repatTimes);

  if (compare.indexOf(B) !== -1) {
    return repatTimes;
  }

  return (compare + A).indexOf(B) === -1 ? -1 : repatTimes + 1;
}
