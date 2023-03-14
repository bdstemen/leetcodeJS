var canPlaceFlowers = function(flowerbed, n) {
    let flowers = 0;
    for (let i = 0; i < flowerbed.length; i++) {
        if (flowerbed[i] === 1) {
            continue;
        } else if (flowerbed[i - 1] !== 1 && flowerbed[i + 1] !== 1) {
            flowers++;
            i++;
        }
    }

    return flowers >= n;
};