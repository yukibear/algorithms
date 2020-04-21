export default function myPow(x: number, n: number): number {
  if (n === 0) {
    return 1;
  }
  if (n === 1) {
    return x;
  }
  if (x === 0) {
    return 0;
  }

  if (n > 0) {
    let res = myPow(multiply(x, x), Math.floor(n / 2));

    if (n % 2 !== 0) {
      return multiply(x, res);
    }

    return res;
  } else {
    return myPow(1 / x, -n);
  }
}

function multiply(x: number, y: number) {
  let leverageX = 1;

  while (x % 1 > 0) {
    x *= 10;
    leverageX *= 10;
  }

  let leverageY = 1;

  while (y % 1 > 0) {
    y *= 10;
    leverageY *= 10;
  }

  return (x * y) / leverageX / leverageY;
}
