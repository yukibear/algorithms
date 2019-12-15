export default function isValid(
  s: string
): boolean {
  if (s.length % 2 !== 0) {
    return false;
  }

  const closerMap = new Map([["{", "}"], ["(", ")"], ["[", "]"]]);
  const openerSet = new Set(closerMap.keys());
  const closerStack: string[] = [];
  for (let i = 0; i < s.length; i++) {
    if (openerSet.has(s[i])) {
      closerStack.push(closerMap.get(s[i])!);
    } else if (closerStack.pop() !== s[i]) {
      return false;
    }
  }
  return closerStack.length === 0;
}
