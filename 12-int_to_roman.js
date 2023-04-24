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