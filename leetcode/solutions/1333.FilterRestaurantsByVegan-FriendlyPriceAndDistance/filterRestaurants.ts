export default function filterRestaurants(
  restaurants: number[][],
  veganFriendly: number,
  maxPrice: number,
  maxDistance: number
): number[] {
  return restaurants
    .filter(([, , vg, price, distance]) => {
      return (
        (!veganFriendly || vg) && price <= maxPrice && distance <= maxDistance
      );
    })
    .sort(([id1, rating1], [id2, rating2]) => {
      if (rating1 === rating2) {
        return id2 - id1;
      } else {
        return rating2 - rating1;
      }
    })
    .map(([id]) => id);
}
