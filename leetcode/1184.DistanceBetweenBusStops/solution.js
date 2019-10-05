/**
 * @param {number[]} distance
 * @param {number} start
 * @param {number} destination
 * @return {number}
 */
var distanceBetweenBusStops = function(distance, start, destination) {
    if (start === destination) return 0;

    let min1 = 0;
    let min2 = 0;

    if (start > destination) {
        let tmp = destination;
        destination = start;
        start = tmp;
    }

    let start2 = start + distance.length -1;
    distance = [...distance, ...distance];

    for (let i = start; i <= start2 ; i++) {
        if (i < destination) {
            min1 += distance[i];
        } else {
            min2 += distance[i];
        }
    }
    return (min1 > min2)  ? min2 : min1;
};
