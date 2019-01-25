function pageCount(n, p) {
    const frontFlip = Math.floor(p/2);
    var backFlip = Math.floor((n/2)-frontFlip);

    const result = Math.min(frontFlip, backFlip);
    return result;

}
