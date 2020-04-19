export default function reformat(s: string): string {
  let arr1: string[] = [];
  let arr2: string[] = [];

  for (const c of s) {
    if (isNaN(Number(c))) {
      arr1.push(c);
    } else {
      arr2.push(c);
    }
  }

  if (arr1.length < arr2.length) {
    const tmp = arr1;
    arr1 = arr2;
    arr2 = tmp;
  }

  if (arr1.length - arr2.length > 1) {
    return "";
  }

  let result = "";

  for (let i = 0; i < arr2.length; i++) {
    result += arr1[i] + arr2[i];
  }

  return arr1.length > arr2.length ? result + arr1[arr1.length - 1] : result;
}
