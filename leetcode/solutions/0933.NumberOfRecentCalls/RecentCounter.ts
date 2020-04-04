export default class RecentCounter {
  private times: number[] = [];

  ping(t: number) {
    const { times } = this;
    let i = 0;

    while (t - times[i] > LIMIT_MILLISEC) {
      i++;
    }

    times.splice(0, i);

    return times.push(t);
  }
}

const LIMIT_MILLISEC = 3000;
