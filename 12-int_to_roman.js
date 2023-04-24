var intToRoman = function(num) {
    let result = '';
    let mult = 1;

    let values = {
        1: 'I',
        5: 'V',
        10: 'X',
        50: 'L',
        100: 'C',
        500: 'D',
        1000: 'M'
    };

    while (num > 0) {
        let digitStr = ''
        let digit = num % 10;
        num = Math.trunc(num / 10);

        if (digit === 9) {
            digitStr += values[1 * mult];
            digitStr += values[10 * mult];
            digit -= 9;
        }

        if (digit >= 5) {
            digitStr += values[5 * mult];
            digit -= 5;
        }

        if (digit === 4) {
            digitStr += values[1 * mult];
            digitStr += values[5 * mult];
            digit -= 4;
        }

        while (digit > 0) {
            digitStr += values[1 * mult];
            digit -= 1;
        }

        mult *= 10
        result = digitStr + result;
    }

    return result;
};



var intToRoman = function(num) {
    let result = '';

    let values = [
        [1, 'I'],
        [4, 'IV'],
        [5, 'V'],
        [9, 'IX'],
        [10, 'X'],
        [40, 'XL'],
        [50, 'L'],
        [90, 'XC'],
        [100, 'C'],
        [400, 'CD'],
        [500, 'D'],
        [900, 'CM'],
        [1000, 'M']
    ];


    for (let i = values.length - 1; i >= 0; i--) {
        let val = values[i][0];
        let sym = values[i][1];

        if (Math.floor(num / val)) {
            let count = Math.floor(num / val);
            result += sym.repeat(count);
            num = num % val;
        }
    }

    return result;
};