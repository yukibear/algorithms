
export default function jewelsAndStones(
    jewelChars: string,
    stoneChars: string
): number {
    const jewels = new Set([...jewelChars]);
    let jewelCount = 0;

    for (const s of stoneChars) {
        if (jewels.has(s)) {
            jewelCount++;
        }
    }
    return jewelCount;
}
