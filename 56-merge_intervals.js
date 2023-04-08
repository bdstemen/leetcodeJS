var merge = function(intervals) {
    let result = [];
    let curr = 0;

    intervals.sort((a, b) => (a[0] - b[0]));
    console.log(intervals);

    while (curr < intervals.length) {
        let l = intervals[curr][0];
        let r = intervals[curr][1];

        while (curr < intervals.length - 1 && intervals[curr + 1][0] <= r) {
            curr++;
            if (intervals[curr][1] > r) {
                r = intervals[curr][1];
            }
        }

        result.push([l, r]);
        curr++;
    }

    return result;
};