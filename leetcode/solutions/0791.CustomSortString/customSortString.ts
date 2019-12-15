export default function customSortString(
  S: string,
  T: string
): string {
  let sList = S.split("");
  const map = new Map(sList.map(s => [s, 0]));

  T = T.split("").filter((t) => {
    if (map.has(t)) {
      map.set(t, map.get(t)! + 1);
      return false;
    }
    return true;
  }).join("");

  S = sList.map(s => s.repeat(map.get(s)!)).join("");
  return S + T;
}
