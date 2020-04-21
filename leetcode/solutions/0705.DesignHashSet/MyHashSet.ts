export default class MyHashSet {
  private buckets = 1000;
  private itemsPerBucket = 1001;
  private table: boolean[][];

  constructor() {
    this.table = Array.from({ length: this.buckets });
  }

  add(key: number): void {
    const hashKey = this.hash(key);

    if (this.table[hashKey] == null) {
      this.table[hashKey] = new Array(this.itemsPerBucket);
    }

    this.table[hashKey][this.pos(key)] = true;
  }

  remove(key: number): void {
    const hashkey = this.hash(key);

    if (this.table[hashkey] != null) {
      this.table[hashkey][this.pos(key)] = false;
    }
  }

  contains(key: number): boolean {
    return this.table[this.hash(key)]?.[this.pos(key)] || false;
  }

  hash(key: number) {
    return key % this.buckets;
  }

  pos(key: number) {
    return Math.floor(key / this.buckets);
  }
}
