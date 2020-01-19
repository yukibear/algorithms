export default function maximum69Number(num: number): number {

  const n = num.toString().split("");

  for (let i = 0; i < n.length; i++) {
    if (n[i] === "6") {
      n[i] = "9";
      break;
    }
  }

  return parseInt(n.join(""));
}
