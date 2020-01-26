export default function filterRestaurants(
  restaurants: number[][],
  veganFriendly: number,
  maxPrice: number,
  maxDistance: number
): number[] {
  for (let i = restaurants.length - 1; i >= 0; i--) {
    const [id, rating, vg, price, distance] = restaurants[i];

    if (veganFriendly && !vg
      || price > maxPrice
      || distance > maxDistance) {
      restaurants.splice(i, 1);
    }
  }

  restaurants.sort((a, b) => {
    const [id1, rating1] = a;
    const [id2, rating2] = b;
    if (rating1 === rating2) {
      return id2 - id1;
    } else {
      return rating2 - rating1
    }
  });

  return restaurants.map(([id]) => id);
}
