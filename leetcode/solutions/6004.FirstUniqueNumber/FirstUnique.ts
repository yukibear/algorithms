export default class FirstUnique {
  private listMap: Map<number, DoubleListNode | null>;
  private head: DoubleListNode;
  private tail: DoubleListNode;

  constructor(nums: number[]) {
    this.head = { val: -2, next: null, prev: null };
    this.tail = { val: -1, next: null, prev: this.head };
    this.head.next = this.tail;
    this.listMap = new Map<number, DoubleListNode | null>();

    for (const n of nums) {
      this.add(n);
    }
  }

  showFirstUnique(): number {
    return this.head.next!.val;
  }

  add(value: number) {
    if (this.listMap.has(value)) {
      const node = this.listMap.get(value);

      if (!node || !node.prev || !node.next) {
        return;
      }

      node.prev.next = node.next;
      node.next.prev = node.prev;
      this.listMap.set(value, null);

      return;
    }

    const node: DoubleListNode = {
      val: value,
      prev: this.tail.prev,
      next: this.tail,
    };
    this.listMap.set(value, node);
    this.tail.prev!.next = node;
    this.tail.prev = node;
  }
}

type DoubleListNode = {
  val: number;
  prev: DoubleListNode | null;
  next: DoubleListNode | null;
};
